"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUp, Sparkles } from "lucide-react";
import {
  HERO_CATEGORY_PILLS,
  HERO_TYPEWRITER_EXAMPLES,
  PROJECTS,
  type HeroCategory,
  type ProjectItem,
} from "@/data/portfolio";
import { SplitHeadline } from "./SplitHeadline";

interface HeroSectionProps {
  onStartProject: (payload: { category: HeroCategory; brief: string }) => void;
  onSelectProject: (project: ProjectItem) => void;
}

const FLOATING_CARD_POSITIONS = [
  "top-10 left-4 xl:left-10 -rotate-3",
  "top-48 left-2 xl:left-6 rotate-2",
  "bottom-12 left-6 xl:left-14 -rotate-2",
  "top-12 right-4 xl:right-10 rotate-3",
  "top-48 right-2 xl:right-6 -rotate-2",
  "bottom-12 right-6 xl:right-14 rotate-2",
];

export function HeroSection({ onStartProject, onSelectProject }: HeroSectionProps) {
  const stageRef = useRef<HTMLElement | null>(null);
  const [portalOpen, setPortalOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<HeroCategory>("SaaS B2B");
  const [brief, setBrief] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [typedText, setTypedText] = useState("");

  // Efecto typewriter para sugerencias de proyecto en español
  useEffect(() => {
    if (brief.length > 0 || isFocused) return;

    let exampleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = HERO_TYPEWRITER_EXAMPLES[exampleIdx];
      if (!deleting) {
        charIdx += 1;
        setTypedText(current.slice(0, charIdx));
        if (charIdx >= current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1800);
          return;
        }
        timeoutId = setTimeout(tick, 34);
      } else {
        charIdx -= 2;
        if (charIdx <= 0) {
          charIdx = 0;
          deleting = false;
          exampleIdx = (exampleIdx + 1) % HERO_TYPEWRITER_EXAMPLES.length;
          setTypedText("");
          timeoutId = setTimeout(tick, 320);
          return;
        }
        setTypedText(current.slice(0, charIdx));
        timeoutId = setTimeout(tick, 18);
      }
    };

    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, [brief, isFocused]);

  // Animación de entrada del Hero + tarjetas flotantes 3D
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el.querySelectorAll(".hero-float-card"),
        { opacity: 0, y: 26, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.08,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        el.querySelector(".hero-composer"),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, delay: 0.25, ease: "power3.out" }
      );
    });

    return () => mm.revert();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const fallbackBrief =
      brief.trim() ||
      typedText.trim() ||
      `Hola Khristian, me interesa conversar sobre un proyecto de ${selectedCategory}.`;
    onStartProject({ category: selectedCategory, brief: fallbackBrief });
  };

  return (
    <section
      id="top"
      ref={stageRef}
      className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden bg-[#fafafa] px-4 py-14 sm:px-6 lg:py-20"
    >
      {/* Resplandor editorial suave detrás del portal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-[380px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,87,0.55) 0%, rgba(255,142,229,0.45) 45%, rgba(213,89,255,0.22) 75%, transparent 100%)",
        }}
      />

      {/* Collage periférico 3D en escritorio (flancos izquierdo y derecho sin invadir el centro) */}
      <div
        aria-hidden="false"
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] lg:block"
        style={{ perspective: "1100px" }}
      >
        {PROJECTS.slice(0, 6).map((project, idx) => (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelectProject(project)}
            className={`hero-float-card pointer-events-auto absolute ${FLOATING_CARD_POSITIONS[idx]} group hidden w-48 rounded-xl border border-zinc-200/80 bg-white/90 p-2.5 text-left shadow-[0_12px_30px_rgba(24,24,27,0.06)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] xl:block`}
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span
                className="grain-surface arch-shape inline-block h-5 w-4 shrink-0"
                style={{ background: project.gradient }}
              />
              <span className="truncate text-[11px] font-medium text-zinc-500">
                {project.shortLabel}
              </span>
            </div>
            <p className="truncate text-xs font-semibold text-[#18181b] group-hover:text-black">
              {project.title}
            </p>
            <p className="mt-0.5 truncate text-[11px] text-[#737373]">
              {project.metrics[0]?.value} · {project.stack[0]}
            </p>
          </button>
        ))}
      </div>

      {/* Centro protagonista */}
      <div className="relative z-10 mx-auto flex w-full max-w-[660px] flex-col items-center text-center">
        {/* Portal 3D interactivo */}
        <button
          type="button"
          onClick={() => setPortalOpen((prev) => !prev)}
          data-open={portalOpen}
          aria-label="Portal interactivo de Khristian Ali"
          className="hero-portal-trigger hero-portal-scene group mb-6 flex flex-col items-center focus-visible:rounded-2xl"
        >
          <div className="relative h-20 w-16 p-1 rounded-t-full rounded-b-[4px] border border-zinc-300/80 bg-white shadow-sm">
            <div className="portal-gradient-core arch-shape relative h-full w-full overflow-hidden">
              <div
                aria-hidden="true"
                className="hero-portal-leaf arch-shape absolute inset-0 border border-white/40 bg-[#171717]/90 shadow-md"
              />
            </div>
          </div>
          <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-zinc-200/90 bg-white px-3 py-1 text-[11px] font-medium text-[#52525b] shadow-2xs">
            <Sparkles className="size-3 text-[#ff8400]" aria-hidden="true" />
            Khristian Ali · Founder @ Glyph Agency
          </span>
        </button>

        <SplitHeadline
          as="h1"
          immediate
          text="Cada idea abre un producto real."
          className="text-[clamp(2.5rem,5.5vw,4.15rem)] font-semibold tracking-[-0.03em] leading-[0.96] text-[#2f2f2f]"
        />

        <p className="mt-5 max-w-[540px] text-base leading-relaxed text-[#52525b] sm:text-[17px]">
          Diseño y lanzo software en producción: plataformas{" "}
          <span className="font-medium text-[#18181b]">SaaS offline-first</span>,
          arquitecturas multi-tenant con{" "}
          <span className="font-medium text-[#18181b]">PostgreSQL RLS</span> y
          aplicaciones con <span className="font-medium text-[#18181b]">IA</span>.
        </p>

        {/* Caja central interactiva estilo prompt */}
        <form
          onSubmit={handleSubmit}
          className="hero-composer mt-8 w-full max-w-[540px] rounded-[26px] border border-zinc-200/90 bg-white p-3.5 text-left shadow-[0_20px_55px_rgba(24,24,27,0.07)] transition-shadow focus-within:border-zinc-300 focus-within:shadow-[0_24px_65px_rgba(24,24,27,0.1)]"
        >
          <label htmlFor="hero-brief" className="sr-only">
            Cuéntame qué quieres construir
          </label>
          <div className="relative min-h-[62px]">
            <textarea
              id="hero-brief"
              rows={2}
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => {
                if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                  handleSubmit();
                }
              }}
              aria-label="Cuéntame qué quieres construir"
              className="w-full resize-none bg-transparent px-1.5 pt-1 text-[14px] leading-[22px] text-[#171717] focus:outline-none"
            />
            {brief.length === 0 && !isFocused ? (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 px-1.5 pt-1 text-[14px] leading-[22px] text-[#737373]"
              >
                <span>{typedText}</span>
                <span className="caret-blink ml-0.5 inline-block h-4 w-[1.5px] translate-y-[2px] bg-[#18181b]" />
              </div>
            ) : null}
            {brief.length === 0 && isFocused ? (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 px-1.5 pt-1 text-[14px] leading-[22px] text-[#a1a1aa]"
              >
                Cuéntame qué producto, sistema o equipo quieres impulsar...
              </div>
            ) : null}
          </div>

          <div className="mt-2.5 flex items-center justify-between gap-2 pt-2 border-t border-zinc-100">
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Tipo de proyecto">
              {HERO_CATEGORY_PILLS.map((pill) => {
                const active = selectedCategory === pill;
                return (
                  <button
                    key={pill}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedCategory(pill)}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors sm:px-3 sm:py-1.5 sm:text-xs ${
                      active
                        ? "bg-[#171717] text-white"
                        : "border border-zinc-200/80 bg-[#fafafa] text-[#52525b] hover:bg-zinc-100 hover:text-[#18181b]"
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>

            <button
              type="submit"
              aria-label="Ir al formulario con mi idea"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#171717] text-white transition-transform hover:scale-105 hover:bg-black active:scale-95"
            >
              <ArrowUp className="size-4" aria-hidden="true" />
            </button>
          </div>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-[#737373]">
          <span>Venezuela · UTC-4</span>
          <span aria-hidden="true">·</span>
          <a href="#proyectos" className="font-medium text-[#18181b] underline decoration-zinc-300 underline-offset-4 hover:decoration-[#18181b]">
            Explorar los 6 casos destacados
          </a>
        </div>
      </div>
    </section>
  );
}
