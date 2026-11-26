"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Coins,
  FileText,
  Megaphone,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  WifiOff,
} from "lucide-react";
import {
  CAPABILITY_BADGES,
  PROJECTS,
  SCALE_CATEGORY_PILLS,
  type HeroCategory,
} from "@/data/portfolio";
import { SplitHeadline } from "./SplitHeadline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScalePortalSectionProps {
  onPickCategory: (category: HeroCategory) => void;
}

const CAPABILITY_ICONS = [
  WifiOff,
  Sparkles,
  Megaphone,
  Coins,
  FileText,
  ShieldCheck,
];

export function ScalePortalSection({ onPickCategory }: ScalePortalSectionProps) {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const [pillIdx, setPillIdx] = useState(0);
  const [pillPaused, setPillPaused] = useState(false);

  useEffect(() => {
    if (pillPaused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const id = setInterval(() => {
      setPillIdx((prev) => (prev + 1) % SCALE_CATEGORY_PILLS.length);
    }, 2600);
    return () => clearInterval(id);
  }, [pillPaused]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.65,
          },
        });

        tl.to(
          ".scale-portal-core",
          { scale: 3.4, duration: 0.55, ease: "power2.inOut" },
          0
        )
          .to(
            ".scale-phase-a-copy",
            { opacity: 0, y: -24, duration: 0.35, ease: "power2.out" },
            0.08
          )
          .fromTo(
            ".scale-phase-b",
            { opacity: 0, scale: 0.96 },
            { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" },
            0.35
          );
      }
    );

    mm.add(
      "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
      () => {
        const archStack = el.querySelector(".scale-arch-stack");
        const copyBlock = el.querySelector(".scale-phase-a-copy");
        const badges = gsap.utils.toArray<HTMLElement>(".scale-cap-badge", el);

        if (archStack) {
          gsap.fromTo(
            archStack,
            { scale: 0.92, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.65,
              ease: "power2.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: archStack,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        if (badges.length && copyBlock) {
          gsap.fromTo(
            badges,
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.4,
              ease: "power2.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: copyBlock,
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      }
    );

    return () => mm.revert();
  }, []);

  const currentPill = SCALE_CATEGORY_PILLS[pillIdx];

  return (
    <section
      id="capacidades"
      ref={wrapperRef}
      className="relative bg-[#fafafa] lg:h-[200vh]"
    >
      <div className="relative flex min-h-[760px] flex-col justify-between overflow-hidden lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]">
        {/* FASE A: Arcos concéntricos + 6 beneficios */}
        <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-14 sm:px-6 lg:py-16">
          <div
            aria-hidden="true"
            className="scale-arch-stack relative flex h-[320px] w-[280px] items-end justify-center sm:h-[420px] sm:w-[400px]"
          >
            <div
              className="grain-surface arch-shape absolute inset-0 shadow-lg"
              style={{
                background:
                  "linear-gradient(180deg, #ffc157 0%, #ff8400 60%, #ff8ee5 100%)",
              }}
            />
            <div
              className="grain-surface arch-shape absolute inset-x-7 top-8 bottom-0"
              style={{
                background:
                  "linear-gradient(180deg, #ff8ee5 0%, #d559ff 100%)",
              }}
            />
            <div className="scale-portal-core arch-shape absolute inset-x-16 top-16 bottom-0 bg-[#141417] shadow-2xl" />
          </div>

          <div className="scale-phase-a-copy relative z-10 mt-6 flex w-full max-w-3xl flex-col items-center text-center lg:-mt-10">
            <div className="grid w-full max-w-[340px] auto-rows-fr grid-cols-1 gap-2.5 sm:max-w-xl sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-3">
              {CAPABILITY_BADGES.map((cap, idx) => {
                const Icon = CAPABILITY_ICONS[idx % CAPABILITY_ICONS.length];
                return (
                  <div
                    key={cap.label}
                    className="scale-cap-badge flex h-full w-full items-center gap-2.5 rounded-2xl border border-zinc-200/90 bg-white/95 px-3.5 py-2.5 shadow-sm backdrop-blur-sm"
                  >
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#171717] text-white">
                      <Icon className="size-3.5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-semibold text-[#18181b]">
                        {cap.label}
                      </p>
                      <p className="text-[10px] text-[#737373]">{cap.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <SplitHeadline
              as="h2"
              text="Pensado para hacer crecer tu negocio"
              className="mt-7 text-[clamp(1.85rem,3.8vw,2.9rem)] font-semibold tracking-[-0.03em] text-[#18181b]"
            />
          </div>
        </div>

        {/* FASE B: Escena piedra cálida con píldora interactiva */}
        <div className="scale-phase-b relative flex flex-col items-center justify-center bg-[#f4f3ef] px-4 py-14 text-center sm:py-16 lg:absolute lg:inset-0 lg:z-20 lg:opacity-0">
          <div
            aria-hidden="true"
            className="pointer-events-none mx-auto mb-8 grid w-full max-w-4xl grid-cols-2 gap-3 opacity-95 sm:grid-cols-3 lg:grid-cols-6"
          >
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="rounded-xl border border-zinc-200/80 bg-white p-2.5 text-left shadow-xs"
              >
                <span
                  className="grain-surface arch-shape mb-1.5 inline-block h-4 w-3.5"
                  style={{ background: proj.gradient }}
                />
                <p className="truncate text-[11px] font-semibold text-[#18181b]">
                  {proj.title}
                </p>
                <p className="truncate text-[10px] text-[#737373]">
                  {proj.shortLabel}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#737373]">
            Visibilidad · Orden · Crecimiento
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 text-[clamp(1.7rem,4vw,3.1rem)] font-semibold tracking-[-0.03em] text-[#18181b] sm:gap-3">
            <span>Con nosotros puedes impulsar</span>
            <div className="inline-flex items-center gap-2">
              <button
                key={currentPill.label}
                type="button"
                onClick={() => {
                  setPillIdx((prev) => (prev + 1) % SCALE_CATEGORY_PILLS.length);
                }}
                title="Haz clic para cambiar de opción"
                className="pill-swap-in rounded-full px-5 py-1.5 transition-transform hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: currentPill.bg, color: currentPill.text }}
              >
                {currentPill.label}
              </button>
              <button
                type="button"
                onClick={() => setPillPaused((prev) => !prev)}
                aria-label={
                  pillPaused
                    ? "Reanudar cambio de categorías"
                    : "Pausar cambio de categorías"
                }
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-zinc-300/90 bg-white/90 text-[#18181b] shadow-2xs transition-colors hover:bg-white"
              >
                {pillPaused ? (
                  <Play className="size-3.5" aria-hidden="true" />
                ) : (
                  <Pause className="size-3.5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <p className="mt-4 max-w-lg text-sm text-[#52525b] sm:text-base">
            Desde llevar tus redes sociales con Meta Ads hasta ordenar toda tu
            caja, clientes e inventario en un sistema a la medida.
          </p>

          <button
            type="button"
            onClick={() => onPickCategory(currentPill.category)}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-black"
          >
            Cotizar {currentPill.label} →
          </button>
        </div>
      </div>
    </section>
  );
}
