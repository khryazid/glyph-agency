"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import { PROJECTS, type ProjectItem, type ProjectTab } from "@/data/portfolio";
import { SplitHeadline } from "./SplitHeadline";

interface ProjectsShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
}

const TABS: { id: ProjectTab; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "gestion", label: "Sistemas de Gestión" },
  { id: "web-marketing", label: "Web, Redes y Meta Ads" },
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
            text="Soluciones reales para crecer y ordenar"
            className="text-[clamp(2rem,4.5vw,3.35rem)] font-semibold tracking-[-0.03em] leading-[1.02] text-[#18181b]"
          />
          <p className="mt-4 max-w-2xl text-base text-[#52525b]">
            Sistemas de ventas e inventario, gestión clínica, webs corporativas,
            Community Management y campañas en Meta Ads pensadas para negocios.
          </p>

          <div
            role="tablist"
            aria-label="Filtrar soluciones por tipo"
            className="no-scrollbar mt-8 flex max-w-full items-center gap-5 overflow-x-auto border-b border-zinc-200/90 px-1 sm:gap-7"
          >
            {TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={(e) => {
                    setActiveTab(tab.id);
                    e.currentTarget.scrollIntoView({
                      block: "nearest",
                      inline: "nearest",
                      ...({ container: "nearest" } as unknown as ScrollIntoViewOptions),
                    });
                  }}
                  className={`relative flex-none whitespace-nowrap pb-3 text-sm font-medium transition-colors ${
                    isSelected
                      ? "text-[#18181b]"
                      : "text-[#737373] hover:text-[#18181b]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

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
                <div className="relative z-10 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#18181b] shadow-2xs backdrop-blur-sm">
                    {project.tab === "web-marketing" ? (
                      <Sparkles className="size-3 text-[#ff8400]" aria-hidden="true" />
                    ) : (
                      <Briefcase className="size-3 text-zinc-700" aria-hidden="true" />
                    )}
                    {project.category}
                  </span>
                </div>

                {/* Mockup blanco centrado */}
                <div className="relative z-10 my-5 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-md backdrop-blur-sm">
                  <div className="mb-3 flex items-center justify-between border-b border-zinc-100 pb-2">
                    <span className="text-xs font-semibold text-[#18181b]">
                      {project.shortLabel}
                    </span>
                    <span className="text-[11px] font-medium text-[#737373]">
                      {project.metrics[0]?.value}
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

                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feat) => (
                      <span
                        key={feat}
                        className="rounded-full bg-white/85 px-2.5 py-0.5 text-[11px] font-medium text-[#18181b]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-[#1d1d1d]/85 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-colors group-hover:bg-black">
                    Ver solución
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
