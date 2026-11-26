"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";
import { PROCESS_STEPS } from "@/data/portfolio";
import { SplitHeadline } from "./SplitHeadline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".process-panel", el);
      panels.forEach((panel, idx) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top 52%",
          end: "bottom 48%",
          onEnter: () => setActiveIndex(idx),
          onEnterBack: () => setActiveIndex(idx),
        });
      });
    });

    return () => mm.revert();
  }, []);

  const handleStepClick = (idx: number) => {
    setActiveIndex(idx);
    const panel = sectionRef.current?.querySelector<HTMLElement>(
      `[data-process-panel="${idx}"]`
    );
    panel?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="bg-[#efefef] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 max-w-2xl">
          <SplitHeadline
            as="h2"
            text="De la idea a producción sin fricción"
            className="text-[clamp(2rem,4.4vw,3.35rem)] font-semibold tracking-[-0.03em] leading-[1.02] text-[#18181b]"
          />
          <p className="mt-4 text-base text-[#52525b]">
            Un método de ingeniería probado en plataformas reales multi-tenant: menos
            improvisación, cero sorpresas al escalar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Columna izquierda sticky con 4 pasos */}
          <div className="lg:col-span-5">
            <div className="space-y-3 lg:sticky lg:top-28">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleStepClick(idx)}
                    className={`group w-full rounded-2xl p-4 text-left transition-all duration-200 ${
                      isActive
                        ? "bg-white shadow-[0_12px_32px_rgba(24,24,27,0.06)]"
                        : "hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-baseline gap-3">
                        <span
                          className={`font-mono text-xs font-semibold ${
                            isActive ? "text-[#ff8400]" : "text-[#a1a1aa]"
                          }`}
                        >
                          {step.number}
                        </span>
                        <h3
                          className={`text-lg font-semibold tracking-tight transition-colors ${
                            isActive ? "text-[#18181b]" : "text-[#71717a]"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <span
                        aria-hidden="true"
                        className={`mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isActive
                            ? "bg-[#171717] text-white"
                            : "bg-zinc-200/70 text-zinc-500"
                        }`}
                      >
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>

                    <p
                      className={`mt-2 pl-7 text-sm leading-relaxed transition-colors ${
                        isActive ? "text-[#52525b]" : "text-[#a1a1aa]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Columna derecha con marcos de degradado granulado y mockups blancos */}
          <div className="space-y-7 lg:col-span-7">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.id}
                data-process-panel={idx}
                className="process-panel grain-surface rounded-[28px] p-6 shadow-[0_16px_45px_rgba(24,24,27,0.06)] sm:p-9"
                style={{ background: step.gradient }}
              >
                <div className="relative z-10 rounded-2xl border border-white/70 bg-white/95 p-6 shadow-md backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs font-medium text-[#18181b]">
                      <span>{step.number}</span>
                      <span>·</span>
                      <span>{step.badge}</span>
                    </span>
                    <span className="rounded-full bg-[#171717] px-3 py-1 text-xs font-medium text-white">
                      {step.mockupTag}
                    </span>
                  </div>

                  <h4 className="mt-5 text-xl font-semibold tracking-tight text-[#18181b]">
                    {step.mockupTitle}
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {step.mockupBullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 rounded-xl bg-[#fafafa] px-3.5 py-2.5 text-sm text-[#27272a]"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-[#18181b]"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
