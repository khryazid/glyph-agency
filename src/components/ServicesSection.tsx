"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROFILE, SERVICE_CARDS, type HeroCategory } from "@/data/portfolio";
import { SplitHeadline } from "./SplitHeadline";

interface ServicesSectionProps {
  onSelectService: (payload: { category: HeroCategory; brief: string }) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="servicios"
      className="bg-[#ffffff] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <SplitHeadline
            as="h2"
            text="Empieza claro. Avanza con respaldo directo."
            className="text-[clamp(2rem,4.4vw,3.35rem)] font-semibold tracking-[-0.03em] leading-[1.02] text-[#18181b]"
          />
          <p className="mt-4 text-base text-[#52525b]">
            Ya sea ordenando la operación diaria de tu empresa, lanzando tu web
            comercial o automatizando tareas repetitivas.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {SERVICE_CARDS.map((card) => (
            <article
              key={card.id}
              className="flex flex-col justify-between rounded-[28px] border border-zinc-200/80 bg-[#fafafa] p-4 shadow-[0_10px_30px_rgba(24,24,27,0.03)]"
            >
              <div>
                {card.variant === "templates" ? (
                  <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-[22px] bg-[#ecebe7] p-5">
                    <div className="relative h-full w-full">
                      <div className="absolute top-3 left-2 w-44 -rotate-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                        <p className="text-[10px] font-semibold text-zinc-400">
                          DISTRIBUIDORAS
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#18181b]">
                          Pedidos, rutas y cobranzas
                        </p>
                        <div className="mt-2 h-1.5 w-20 rounded-full bg-[#ff8400]" />
                      </div>
                      <div className="absolute right-2 bottom-3 w-48 rotate-2 rounded-xl border border-zinc-200 bg-white p-3.5 shadow-md">
                        <p className="text-[10px] font-semibold text-zinc-400">
                          CONTROL DE NEGOCIO
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#18181b]">
                          Ventas · Crédito · Reportes PDF
                        </p>
                        <div className="mt-2.5 flex gap-1.5">
                          <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-white">
                            Sin internet
                          </span>
                          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-700">
                            Multimoneda
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {card.variant === "ai" ? (
                  <div
                    className="grain-surface relative flex h-60 items-center justify-center rounded-[22px] p-5"
                    style={{
                      background:
                        "linear-gradient(145deg, #ff9b21 0%, #ff7300 100%)",
                    }}
                  >
                    <div className="relative z-10 w-full rounded-2xl border border-white/60 bg-white p-4 shadow-lg">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-[11px] font-semibold text-fuchsia-950">
                          <Sparkles className="size-3" aria-hidden="true" />
                          Lectura de facturas
                        </span>
                        <span className="rounded-full bg-lime-100 px-2.5 py-0.5 text-[11px] font-semibold text-lime-950">
                          Atención 24/7
                        </span>
                      </div>
                      <p className="mt-3 text-xs text-[#52525b]">
                        Automatiza cotizaciones, inventario, citas y reportes
                        diarios sin transcribir a mano...
                      </p>
                      <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-2.5">
                        <span className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-[10px] font-medium text-[#18181b]">
                          WhatsApp + PDF
                        </span>
                        <span className="rounded-full bg-[#171717] px-2.5 py-0.5 text-[10px] font-medium text-white">
                          Ahorro real
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}

                {card.variant === "founder" ? (
                  <div
                    className="grain-surface relative flex h-60 items-end justify-center gap-2.5 overflow-hidden rounded-[22px] px-4 pt-6 pb-0"
                    style={{
                      background:
                        "linear-gradient(145deg, #d56bff 0%, #b845f5 100%)",
                    }}
                  >
                    <div className="relative z-10 mb-5 hidden rounded-xl bg-white/90 px-2.5 py-2 text-[10px] font-semibold text-[#18181b] shadow-sm sm:block">
                      Glyph Agency
                    </div>

                    <div className="arch-shape relative z-10 h-48 w-36 overflow-hidden border-2 border-white/80 bg-zinc-900 shadow-xl">
                      <Image
                        src="/khristian.jpg"
                        alt={`Retrato de ${PROFILE.name}`}
                        fill
                        sizes="144px"
                        className="object-cover"
                      />
                    </div>

                    <div className="relative z-10 mb-5 hidden rounded-xl bg-white/90 px-2.5 py-2 text-[10px] font-semibold text-[#18181b] shadow-sm sm:block">
                      Trato directo
                    </div>
                  </div>
                ) : null}

                <div className="px-2 pt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-[#18181b]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#52525b]">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="px-2 pt-5 pb-2">
                <button
                  type="button"
                  onClick={() =>
                    onSelectService({
                      category: card.presetCategory,
                      brief: card.presetBrief,
                    })
                  }
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black"
                >
                  {card.ctaLabel}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
