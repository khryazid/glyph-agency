"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, CheckCircle2, Lock, X } from "lucide-react";
import type { HeroCategory, ProjectItem } from "@/data/portfolio";

interface CaseStudyDialogProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (payload: { category: HeroCategory; brief: string }) => void;
}

export function CaseStudyDialog({
  project,
  onClose,
  onRequestSimilar,
}: CaseStudyDialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [project]);

  // Fallback para light-dismiss en navegadores sin closedBy nativo (p. ej. Safari)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = "";
      onClose();
    };
    dialog.addEventListener("close", handleClose);

    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (!("closedBy" in HTMLDialogElement.prototype)) {
        pressedOutside = isOutside(e);
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!("closedBy" in HTMLDialogElement.prototype) && pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener("pointerdown", handlePointerDown);
    dialog.addEventListener("pointerup", handlePointerUp);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("pointerdown", handlePointerDown);
      dialog.removeEventListener("pointerup", handlePointerUp);
    };
  }, [onClose]);

  const titleId = project ? `case-study-title-${project.id}` : "case-study-title";

  const targetCategory: HeroCategory =
    project?.tab === "ai-oss" ? "App con IA" : "SaaS B2B";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      {...({ closedby: "any" } as Record<string, string>)}
      className="case-study-dialog m-auto max-h-[88dvh] w-[min(760px,calc(100vw-2rem))] overflow-y-auto rounded-[28px] border border-zinc-200/80 bg-white p-0 text-left text-[#18181b] shadow-[0_32px_90px_rgba(0,0,0,0.28)]"
    >
      {project ? (
        <div>
          {/* Cabecera con degradado editorial */}
          <div
            className="grain-surface relative flex flex-col justify-between gap-4 px-6 pt-7 pb-6 text-[#18181b] sm:px-8"
            style={{ background: project.gradient }}
          >
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#18181b] shadow-2xs">
                {!project.repoUrl ? <Lock className="size-3" aria-hidden="true" /> : null}
                {project.category} · {project.shortLabel}
              </span>

              <button
                type="button"
                autoFocus
                onClick={() => dialogRef.current?.close()}
                aria-label="Cerrar detalle del proyecto"
                className="inline-flex size-9 items-center justify-center rounded-full bg-[#171717]/85 text-white backdrop-blur-sm transition-colors hover:bg-black"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="relative z-10">
              <h1
                id={titleId}
                className="text-2xl font-semibold tracking-tight text-[#18181b] sm:text-3xl"
              >
                {project.title}
              </h1>
              <p className="mt-1.5 max-w-xl text-sm font-medium text-[#18181b]/85 sm:text-base">
                {project.tagline}
              </p>
            </div>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            {/* Métricas clave */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-zinc-200/80 bg-[#fafafa] px-4 py-3"
                >
                  <p className="text-xs font-medium text-[#737373]">{m.label}</p>
                  <p className="mt-0.5 text-base font-semibold text-[#18181b]">{m.value}</p>
                </div>
              ))}
            </div>

            <p className="text-[15px] leading-relaxed text-[#3f3f46]">{project.summary}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200/80 bg-[#fafafa] p-4">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                  El Problema
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#27272a]">
                  {project.problem}
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200/80 bg-[#fafafa] p-4">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                  Solución & Arquitectura
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#27272a]">
                  {project.solution}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Aspectos Técnicos Clave
              </h2>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#27272a]">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-[#18181b]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Stack Utilizado
              </h2>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-[#27272a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200/80 pt-5">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#f3f3f4] px-4 py-2.5 text-xs font-semibold text-[#18181b] transition-colors hover:bg-zinc-200"
                >
                  Ver repositorio en GitHub
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-[#737373]">
                  <Lock className="size-3.5" aria-hidden="true" />
                  Repositorio privado comercial — demo técnica disponible bajo solicitud
                </span>
              )}

              <button
                type="button"
                onClick={() => {
                  const brief = `Hola Khristian, vi el caso de ${project.title} y me gustaría conversar sobre un proyecto o solución similar.`;
                  dialogRef.current?.close();
                  onRequestSimilar({ category: targetCategory, brief });
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black"
              >
                Construir algo similar →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
