"use client";

import { useState } from "react";
import { ArrowRight, Lock, Sparkles } from "lucide-react";
import { PROJECTS, type ProjectItem, type ProjectTab } from "@/data/portfolio";
import { SplitHeadline } from "./SplitHeadline";

interface ProjectsShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
}

const TABS: { id: ProjectTab; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "saas", label: "SaaS & Sistemas" },
  { id: "ai-oss", label: "IA & Open Source" },
];

export function ProjectsShowcase({ onSelectProject }: ProjectsShowcaseProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>("all");

  const filtered =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tab === activeTab);

  return (
    <section
      id="proyectos"
      className="bg-[#fafafa] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <SplitHeadline
            as="h2"
            text="¿Qué he construido?"
            className="text-[clamp(2rem,4.5vw,3.35rem)] font-semibold tracking-[-0.03em] leading-[1.02] text-[#18181b]"
          />
          <p className="mt-4 max-w-xl text-base text-[#52525b]">
            Sistemas SaaS privados en producción y proyectos Open Source auditables.
            Haz clic en cualquier arco para abrir el análisis técnico completo.
          </p>

          {/* Tabs estilo subrayado minimalista */}
          <div
            role="tablist"
            aria-label="Filtrar proyectos por categoría"
            className="mt-8 flex items-center gap-6 border-b border-zinc-200/90"
          >
            {TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-3 text-sm font-medium transition-colors ${
                    isSelected
                      ? "text-[#18181b]"
                      : "text-[#737373] hover:text-[#18181b]"
                  }`}
                >
                  {tab.label}
                  {isSelected ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[#18181b]"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grilla de tarjetas en forma de Arco */}
        <div
          role="tabpanel"
          className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <article key={project.id} className="group flex flex-col">
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="grain-surface arch-shape relative flex min-h-[430px] w-full flex-col justify-between p-6 pt-10 text-left shadow-[0_14px_38px_rgba(24,24,27,0.06)] transition-transform duration-300 hover:-translate-y-1.5"
                style={{ background: project.gradient }}
              >
                {/* Badge superior */}
                <div className="relative z-10 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#18181b] shadow-2xs backdrop-blur-sm">
                    {project.repoUrl ? (
                      <Sparkles className="size-3 text-[#ff8400]" aria-hidden="true" />
                    ) : (
                      <Lock className="size-3 text-zinc-700" aria-hidden="true" />
                    )}
                    {project.category}
                  </span>
                </div>

                {/* Mockup blanco incrustado en el centro del arco */}
                <div className="relative z-10 my-5 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-md backdrop-blur-sm">
                  <div className="mb-3 flex items-center justify-between border-b border-zinc-100 pb-2">
                    <span className="text-xs font-semibold text-[#18181b]">
                      {project.shortLabel}
                    </span>
                    <span className="font-mono text-[10px] text-[#737373]">
                      {project.stack[0]}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {project.mockupLines.map((line) => (
                      <div
                        key={line.title}
                        className="flex items-center justify-between gap-2 rounded-xl bg-[#fafafa] px-2.5 py-2"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-xs font-semibold text-[#18181b]">
                            {line.title}
                          </p>
                          <p className="truncate text-[11px] text-[#737373]">
                            {line.subtitle}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-white">
                          {line.stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botón glass oscuro flotante en la base del arco */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/80 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#18181b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-[#1d1d1d]/85 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-colors group-hover:bg-black">
                    Ver caso
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </button>

              <div className="mt-4 px-1">
                <h3 className="text-xl font-semibold tracking-tight text-[#18181b]">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#52525b]">
                  {project.tagline}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
