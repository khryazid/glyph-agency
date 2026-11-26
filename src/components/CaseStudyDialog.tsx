"use client";

import { useEffect, useRef } from "react";
import { Briefcase, CheckCircle2, X } from "lucide-react";
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
      if (
        !("closedBy" in HTMLDialogElement.prototype) &&
        pressedOutside &&
        isOutside(e)
      ) {
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
    project?.id === "redes-meta-ads"
      ? "Redes y Meta Ads"
      : project?.tab === "web-marketing"
      ? "Web Comercial"
      : "Sistema a Medida";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      {...({ closedby: "any" } as Record<string, string>)}
      className="case-study-dialog m-auto max-h-[88dvh] w-[min(760px,calc(100vw-2rem))] overflow-y-auto rounded-[28px] border border-zinc-200/80 bg-white p-0 text-left text-[#18181b] shadow-[0_32px_90px_rgba(0,0,0,0.28)]"
    >
      {project ? (
        <div>
          <div
            className="grain-surface relative flex flex-col justify-between gap-4 px-6 pt-7 pb-6 text-[#18181b] sm:px-8"
            style={{ background: project.gradient }}
          >
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#18181b] shadow-2xs">
                <Briefcase className="size-3" aria-hidden="true" />
                {project.category} · {project.shortLabel}
              </span>

              <button
                type="button"
                autoFocus
                onClick={() => dialogRef.current?.close()}
                aria-label="Cerrar detalle de la solución"
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
                  El Reto del Negocio
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#27272a]">
                  {project.problem}
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200/80 bg-[#fafafa] p-4">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                  La Solución Construida
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#27272a]">
                  {project.solution}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Qué Resuelve en la Práctica
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
                Capacidades Incluidas
              </h2>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {project.features.map((feat) => (
                  <span
                    key={feat}
                    className="rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-medium text-[#27272a]"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200/80 pt-5">
              <span className="text-xs text-[#737373]">
                Propuesta y demostración personalizada para tu empresa.
              </span>

              <button
                type="button"
                onClick={() => {
                  const brief = `Hola equipo de Glyph Agency, nos gustó la solución ${project.title} y queremos ver cómo adaptarla para nuestro negocio.`;
                  dialogRef.current?.close();
                  onRequestSimilar({ category: targetCategory, brief });
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black"
              >
                Quiero algo similar para mi negocio →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
