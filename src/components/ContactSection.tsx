"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, Mail, Send } from "lucide-react";
import { AGENCY, type HeroCategory } from "@/data/portfolio";
import { SplitHeadline } from "./SplitHeadline";

interface ContactSectionProps {
  category: HeroCategory;
  message: string;
  onCategoryChange: (category: HeroCategory) => void;
  onMessageChange: (message: string) => void;
  resetSignal: number;
}

const CATEGORIES: HeroCategory[] = [
  "Sistema a Medida",
  "Web Comercial",
  "Redes y Meta Ads",
  "Plan Integral",
];

export function ContactSection({
  category,
  message,
  onCategoryChange,
  onMessageChange,
  resetSignal,
}: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedForSignal, setSubmittedForSignal] = useState<number | null>(null);
  const [result, setResult] = useState<{
    delivery: string;
    mailtoUrl?: string;
  } | null>(null);

  const activeResult = submittedForSignal === resetSignal ? result : null;

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const dirtyState = new WeakMap<
      Element,
      { hasInteracted: boolean; hasBlurred: boolean }
    >();
    const flagged = new WeakSet<Element>();
    const announced = new WeakSet<Element>();
    const supportsUserInvalid =
      typeof CSS !== "undefined" && CSS.supports("selector(:user-invalid)");

    const announcer = document.createElement("div");
    announcer.setAttribute("aria-live", "polite");
    announcer.className = "visually-hidden";
    document.body.append(announcer);

    let announceTimer: ReturnType<typeof setTimeout> | undefined;
    let announcedField: Element | undefined;

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
      else el.removeAttribute("aria-describedby");
    };

    const announceError = (el: HTMLElement) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const errorEl = document.getElementById(errorId);
      if (!errorEl) return;
      const label =
        (el as HTMLInputElement).labels?.[0]?.textContent?.trim() || "";
      const errText = errorEl.textContent?.trim() || "";
      clearTimeout(announceTimer);
      announcer.textContent = "";
      announcedField = el;
      announceTimer = setTimeout(() => {
        announcer.textContent = label ? `${label}: ${errText}` : errText;
      }, 450);
    };

    const syncAria = (el: HTMLElement, announce = false) => {
      if (!el.matches("input, select, textarea")) return;
      if (el.getAttribute("name") === "companyWebsite") return;

      const control = el as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      const state = dirtyState.get(control);
      const isInvalid = supportsUserInvalid
        ? control.matches(":user-invalid")
        : Boolean(state?.hasBlurred && !control.validity.valid);

      if (!supportsUserInvalid && state?.hasBlurred) {
        control.classList.toggle("user-invalid-fallback", !control.validity.valid);
        control.classList.toggle("user-valid-fallback", control.validity.valid);
      }

      if (isInvalid) {
        if (announce && !announced.has(control)) {
          announceError(control);
          announced.add(control);
        }
        control.setAttribute("aria-invalid", "true");
        linkError(control, true);
        flagged.add(control);
      } else if (flagged.has(control) || control.getAttribute("aria-invalid") !== "true") {
        control.setAttribute("aria-invalid", "false");
        linkError(control, false);
        flagged.delete(control);
        announced.delete(control);
        if (announcedField === control) {
          clearTimeout(announceTimer);
          announcer.textContent = "";
        }
      }
    };

    form
      .querySelectorAll<HTMLElement>("input:not([name='companyWebsite']), select, textarea")
      .forEach((el) => syncAria(el));

    const onBlur = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.matches("input, select, textarea")) return;
      const st = dirtyState.get(target) || { hasInteracted: false, hasBlurred: false };
      st.hasBlurred = true;
      dirtyState.set(target, st);
      syncAria(target, true);
    };

    const onInput = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.matches("input, select, textarea")) return;
      const st = dirtyState.get(target) || { hasInteracted: false, hasBlurred: false };
      st.hasInteracted = true;
      dirtyState.set(target, st);
      if (target.hasAttribute("aria-invalid")) syncAria(target, false);
    };

    const onChange = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.matches("input, select, textarea")) return;
      const st = dirtyState.get(target) || { hasInteracted: false, hasBlurred: false };
      st.hasInteracted = true;
      st.hasBlurred = true;
      dirtyState.set(target, st);
      syncAria(target, true);
    };

    const onInvalid = (e: Event) => {
      const target = e.target as HTMLElement;
      dirtyState.set(target, { hasInteracted: true, hasBlurred: true });
      announced.add(target);
      syncAria(target, false);
    };

    form.addEventListener("blur", onBlur, true);
    form.addEventListener("input", onInput);
    form.addEventListener("change", onChange, true);
    form.addEventListener("invalid", onInvalid, true);

    return () => {
      clearTimeout(announceTimer);
      form.removeEventListener("blur", onBlur, true);
      form.removeEventListener("input", onInput);
      form.removeEventListener("change", onChange, true);
      form.removeEventListener("invalid", onInvalid, true);
      announcer.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          category,
          message,
          companyWebsite,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setSubmitError(data.error || "No se pudo enviar el mensaje. Revisa los campos.");
      } else {
        setSubmittedForSignal(resetSignal);
        setResult({ delivery: data.delivery, mailtoUrl: data.mailtoUrl });
      }
    } catch {
      setSubmitError("Error de red al enviar el formulario. Intenta nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Hola equipo de Glyph Agency, les escribo desde su web (${category}).`
      )}`
    : null;

  return (
    <section
      id="contacto"
      className="bg-[#fafafa] px-4 pt-12 pb-20 sm:px-6 lg:px-8 lg:pb-24"
    >
      <div
        className="grain-surface mx-auto max-w-[1200px] rounded-[32px] p-6 shadow-[0_24px_70px_rgba(255,132,0,0.18)] sm:p-10 lg:p-14"
        style={{
          background:
            "linear-gradient(135deg, #ffc157 0%, #ff8400 42%, #ff8ee5 78%, #d559ff 100%)",
        }}
      >
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="text-[#18181b] lg:col-span-5">
            <span className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[#18181b] shadow-2xs">
              Glyph Agency · Agenda abierta
            </span>
            <SplitHeadline
              as="h2"
              text="¿Listo para impulsar tu negocio?"
              className="mt-5 text-[clamp(2rem,4.2vw,3.15rem)] font-semibold tracking-[-0.03em] leading-[1.0] text-[#18181b]"
            />
            <p className="mt-4 text-sm leading-relaxed text-[#18181b]/85 sm:text-base">
              Cuéntanos qué necesitas ordenar en tu operación o impulsar en tus
              redes sociales y web. Te respondemos directamente con una propuesta
              clara y sin vueltas.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black"
                >
                  Escribir por WhatsApp
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
              <a
                href={AGENCY.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors ${
                  whatsappUrl
                    ? "bg-white/90 text-[#18181b] hover:bg-white"
                    : "bg-[#171717] text-white hover:bg-black"
                }`}
              >
                LinkedIn · Software
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
              <a
                href={AGENCY.danielaLinkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2.5 text-xs font-semibold text-[#18181b] transition-colors hover:bg-white"
              >
                LinkedIn · Mercadeo
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rounded-[26px] border border-white/70 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:col-span-7">
            {activeResult ? (
              <div className="space-y-4 py-6 text-left">
                <div className="inline-flex size-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="size-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-[#18181b]">
                  {activeResult.delivery === "resend"
                    ? "Mensaje enviado correctamente"
                    : "Consulta lista — elige cómo enviárnosla directo"}
                </h3>
                <p className="text-sm leading-relaxed text-[#52525b]">
                  {activeResult.delivery === "resend"
                    ? "Gracias por escribir a Glyph Agency. Revisaremos tu consulta y te responderemos muy pronto."
                    : "Tu mensaje quedó validado correctamente. Puedes enviarlo ahora por LinkedIn, WhatsApp o abrir tu app de correo."}
                </p>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {activeResult.mailtoUrl ? (
                    <a
                      href={activeResult.mailtoUrl}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-5 py-2.5 text-xs font-semibold text-white"
                    >
                      <Mail className="size-3.5" aria-hidden="true" />
                      Abrir en mi correo
                    </a>
                  ) : null}
                  {whatsappUrl ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-5 py-2.5 text-xs font-semibold text-white"
                    >
                      Enviar por WhatsApp
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                  <a
                    href={AGENCY.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-5 py-2.5 text-xs font-semibold text-white"
                  >
                    LinkedIn · Software
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={AGENCY.danielaLinkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-xs font-semibold text-[#18181b]"
                  >
                    LinkedIn · Mercadeo
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedForSignal(null);
                      setResult(null);
                      onMessageChange("");
                    }}
                    className="rounded-full bg-[#f3f3f4] px-4 py-2.5 text-xs font-semibold text-[#18181b] hover:bg-zinc-200"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="visually-hidden" aria-hidden="true">
                  <label htmlFor="companyWebsite">Sitio web</label>
                  <input
                    id="companyWebsite"
                    name="companyWebsite"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#18181b]"
                    >
                      Nombre
                    </label>
                    <span id="contact-name-hint" className="block text-[11px] text-[#737373]">
                      Tu nombre o el de tu empresa
                    </span>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      aria-describedby="contact-name-hint"
                      data-error="contact-name-error"
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="field-control mt-1 w-full rounded-xl border border-zinc-200 bg-[#fafafa] px-3.5 py-2.5 text-sm text-[#18181b] placeholder:text-zinc-400"
                    />
                    <div id="contact-name-error" className="error-msg">
                      <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
                      <span>Ingresa tu nombre (mínimo 2 caracteres).</span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#18181b]"
                    >
                      Correo electrónico
                    </label>
                    <span id="contact-email-hint" className="block text-[11px] text-[#737373]">
                      Formato: nombre@empresa.com
                    </span>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      aria-describedby="contact-email-hint"
                      data-error="contact-email-error"
                      placeholder="tu@correo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="field-control mt-1 w-full rounded-xl border border-zinc-200 bg-[#fafafa] px-3.5 py-2.5 text-sm text-[#18181b] placeholder:text-zinc-400"
                    />
                    <div id="contact-email-error" className="error-msg">
                      <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
                      <span>Ingresa un correo válido como nombre@empresa.com.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-category"
                    className="block text-xs font-semibold text-[#18181b]"
                  >
                    ¿Qué solución estás buscando?
                  </label>
                  <select
                    id="contact-category"
                    name="category"
                    value={category}
                    onChange={(e) => onCategoryChange(e.target.value as HeroCategory)}
                    className="field-control mt-1.5 w-full rounded-xl border border-zinc-200 bg-[#fafafa] px-3.5 py-2.5 text-sm text-[#18181b]"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#18181b]"
                  >
                    Cuéntanos sobre tu negocio o proyecto
                  </label>
                  <span id="contact-message-hint" className="block text-[11px] text-[#737373]">
                    Mínimo 15 caracteres con el objetivo principal.
                  </span>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    minLength={15}
                    aria-describedby="contact-message-hint"
                    data-error="contact-message-error"
                    placeholder="Ej: Queremos gestionar nuestras redes y pauta en Meta Ads, o implementar un sistema de ventas e inventario..."
                    value={message}
                    onChange={(e) => onMessageChange(e.target.value)}
                    className="field-control mt-1 w-full resize-y rounded-xl border border-zinc-200 bg-[#fafafa] px-3.5 py-2.5 text-sm text-[#18181b] placeholder:text-zinc-400"
                  />
                  <div id="contact-message-error" className="error-msg">
                    <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
                    <span>Escribe al menos 15 caracteres para entender tu idea.</span>
                  </div>
                </div>

                {submitError ? (
                  <p role="alert" className="rounded-xl bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-700">
                    {submitError}
                  </p>
                ) : null}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <p className="text-[11px] text-[#737373]">
                    Respuesta directa · Venezuela (UTC-4).
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-black disabled:opacity-60"
                  >
                    <Send className="size-3.5" aria-hidden="true" />
                    {submitting ? "Enviando..." : "Enviar consulta"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
