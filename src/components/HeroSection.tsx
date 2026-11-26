"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Pause, Play, Sparkles } from "lucide-react";
import {
  HERO_CATEGORY_PILLS,
  HERO_TYPEWRITER_EXAMPLES,
  PROJECTS,
  type HeroCategory,
  type ProjectItem,
} from "@/data/portfolio";
import { SplitHeadline } from "./SplitHeadline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const [motionPaused, setMotionPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<HeroCategory>("Sistema a Medida");
  const [brief, setBrief] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [typedText, setTypedText] = useState("");

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

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const composer = el.querySelector(".hero-composer");
      if (composer) {
        gsap.fromTo(
          composer,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: 0.25,
            ease: "power3.out",
            clearProps: "transform",
          }
        );
      }
    });

    mm.add("(min-width: 1280px) and (prefers-reduced-motion: no-preference)", () => {
      const slots = gsap.utils.toArray<HTMLElement>(".hero-float-slot", el);
      if (!slots.length) return;

      gsap.fromTo(
        slots,
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

      slots.forEach((slot, idx) => {
        gsap.to(slot, {
          y: idx % 2 === 0 ? -38 : -22,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const fallbackBrief =
      brief.trim() ||
      typedText.trim() ||
      `Hola equipo de Glyph Agency, nos interesa conversar sobre una solución de ${selectedCategory} para nuestro negocio.`;
    onStartProject({ category: selectedCategory, brief: fallbackBrief });
  };

  return (
    <section
      id="top"
      ref={stageRef}
      data-motion-paused={motionPaused}
      className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden bg-[#fafafa] px-4 py-12 sm:px-6 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-[380px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,87,0.55) 0%, rgba(255,142,229,0.45) 45%, rgba(213,89,255,0.22) 75%, transparent 100%)",
        }}
      />

      {/* Collage periférico 3D en escritorio con flotación sutil y parallax */}
      <div
        aria-hidden="false"
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] xl:block"
        style={{ perspective: "1100px" }}
      >
        {PROJECTS.slice(0, 6).map((project, idx) => (
          <div
            key={project.id}
            className={`hero-float-slot pointer-events-auto absolute ${FLOATING_CARD_POSITIONS[idx]} hidden xl:block`}
          >
            <div
              className="hero-float-anim"
              style={{
                animationName: idx % 2 === 0 ? "hero-float-a" : "hero-float-b",
                animationDuration: `${5.2 + (idx % 3) * 0.7}s`,
                animationDelay: `${idx * -0.8}s`,
              }}
            >
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="hero-float-card group w-52 rounded-xl border border-zinc-200/80 bg-white/92 p-2.5 text-left shadow-[0_12px_30px_rgba(24,24,27,0.06)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03]"
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
                  {project.metrics[0]?.value} · {project.features[0]}
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Centro protagonista */}
      <div className="relative z-10 mx-auto flex w-full max-w-[680px] flex-col items-center text-center">
        <button
          type="button"
          onClick={() => setPortalOpen((prev) => !prev)}
          data-open={portalOpen}
          aria-label="Portal interactivo de Glyph Agency"
          className="hero-portal-trigger hero-portal-scene group mb-6 flex flex-col items-center focus-visible:rounded-2xl"
        >
          <div className="relative h-20 w-16 rounded-t-full rounded-b-[4px] border border-zinc-300/80 bg-white p-1 shadow-sm">
            <div className="portal-gradient-core arch-shape relative h-full w-full overflow-hidden">
              <div
                aria-hidden="true"
                className="hero-portal-leaf arch-shape absolute inset-0 border border-white/40 bg-[#171717]/90 shadow-md"
              />
            </div>
          </div>
          <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-zinc-200/90 bg-white px-3.5 py-1 text-[11px] font-medium text-[#52525b] shadow-2xs">
            <Sparkles className="size-3 text-[#ff8400]" aria-hidden="true" />
            Glyph Agency · Software & Mercadeo Digital
          </span>
        </button>

        <SplitHeadline
          as="h1"
          immediate
          text="Atrae clientes, ordena tu negocio y escala."
          className="text-[clamp(2.4rem,5.2vw,4rem)] font-semibold tracking-[-0.03em] leading-[0.98] text-[#2f2f2f]"
        />

        <p className="mt-5 max-w-[580px] text-base leading-relaxed text-[#52525b] sm:text-[17px]">
          En <span className="font-medium text-[#18181b]">Glyph Agency</span>{" "}
          unimos{" "}
          <span className="font-medium text-[#18181b]">software a medida</span>,{" "}
          <span className="font-medium text-[#18181b]">webs comerciales</span> y{" "}
          <span className="font-medium text-[#18181b]">
            redes sociales con Meta Ads
          </span>{" "}
          para atraer clientes diarios y mantener tu operación bajo control.
        </p>

        {/* Caja central interactiva */}
        <form
          onSubmit={handleSubmit}
          className="hero-composer mt-8 w-full max-w-[560px] rounded-[26px] border border-zinc-200/90 bg-white p-3.5 text-left shadow-[0_20px_55px_rgba(24,24,27,0.07)] transition-shadow focus-within:border-zinc-300 focus-within:shadow-[0_24px_65px_rgba(24,24,27,0.1)]"
        >
          <label htmlFor="hero-brief" className="sr-only">
            Cuéntanos qué necesita tu negocio
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
              aria-label="Cuéntanos qué necesita tu negocio"
              className="no-scrollbar w-full resize-none bg-transparent px-1.5 pt-1 text-[14px] leading-[22px] text-[#171717] focus:outline-none"
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
                Cuéntanos qué proceso quieres ordenar o qué campaña quieres lanzar en tu empresa...
              </div>
            ) : null}
          </div>

          <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-zinc-100 pt-2">
            <div
              className="flex flex-wrap items-center gap-1.5"
              role="group"
              aria-label="Tipo de solución"
            >
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

        <div className="mt-5 flex flex-col items-center justify-center gap-2 text-xs text-[#737373] sm:flex-row sm:flex-wrap sm:gap-3">
          <span>Venezuela · Atención Remota Internacional</span>
          <span aria-hidden="true" className="hidden sm:inline">
            ·
          </span>
          <a
            href="#proyectos"
            className="font-medium text-[#18181b] underline decoration-zinc-300 underline-offset-4 hover:decoration-[#18181b]"
          >
            Explorar nuestras 6 soluciones
          </a>
          <span aria-hidden="true" className="hidden xl:inline">
            ·
          </span>
          <button
            type="button"
            onClick={() => setMotionPaused((prev) => !prev)}
            className="inline-flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[#52525b] transition-colors hover:border-zinc-300 hover:text-[#18181b]"
          >
            {motionPaused ? (
              <>
                <Play className="size-3" aria-hidden="true" />
                <span>Reanudar</span>
              </>
            ) : (
              <>
                <Pause className="size-3" aria-hidden="true" />
                <span>Pausar movimiento</span>
              </>
            )}
          </button>
        </div>

        {/* Cinta deslizable en móvil y tablet sin barra visible */}
        <div className="mt-7 w-full max-w-[680px] xl:hidden">
          <p className="mb-1.5 text-[11px] font-medium text-[#737373]">
            Desliza nuestras 6 soluciones →
          </p>
          <div className="no-scrollbar flex snap-x snap-proximity gap-3 overflow-x-auto px-1 py-2 text-left">
            {PROJECTS.slice(0, 6).map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => onSelectProject(project)}
                className="w-[218px] shrink-0 snap-start rounded-xl border border-zinc-200/85 bg-white/95 p-3 shadow-[0_8px_22px_rgba(24,24,27,0.05)] transition-transform active:scale-[0.98]"
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
                <p className="truncate text-xs font-semibold text-[#18181b]">
                  {project.title}
                </p>
                <p className="mt-0.5 truncate text-[11px] text-[#737373]">
                  {project.metrics[0]?.value} · {project.features[0]}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
