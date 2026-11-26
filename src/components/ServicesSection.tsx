"use client";

import { ArrowRight, ArrowUpRight, Check, Megaphone, Sparkles } from "lucide-react";
import { COFOUNDERS, SERVICE_CARDS, type HeroCategory } from "@/data/portfolio";
import { GlyphMark } from "./GlyphLogo";
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
            text="Todo lo que tu empresa necesita para vender y organizarse."
            className="text-[clamp(2rem,4.4vw,3.35rem)] font-semibold tracking-[-0.03em] leading-[1.02] text-[#18181b]"
          />
          <p className="mt-4 text-base text-[#52525b]">
            En Glyph Agency integramos dos áreas esenciales para cualquier
            negocio: software y webs que ordenan tu operación, junto con gestión
            de redes sociales, diseño y Meta Ads que atraen clientes nuevos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {SERVICE_CARDS.map((card) => (
            <article
              key={card.id}
              className="flex flex-col justify-between rounded-[28px] border border-zinc-200/80 bg-[#fafafa] p-4 shadow-[0_10px_30px_rgba(24,24,27,0.03)]"
            >
              <div>
                {card.variant === "software" ? (
                  <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-[22px] bg-[#ecebe7] p-5">
                    <div className="relative h-full w-full">
                      <div className="absolute top-3 left-2 w-44 -rotate-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                        <p className="text-[10px] font-semibold text-zinc-400">
                          DISTRIBUIDORAS Y WEBS
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#18181b]">
                          Pedidos, rutas y páginas comerciales
                        </p>
                        <div className="mt-2 h-1.5 w-20 rounded-full bg-[#ff8400]" />
                      </div>
                      <div className="absolute right-2 bottom-3 w-48 rotate-2 rounded-xl border border-zinc-200 bg-white p-3.5 shadow-md">
                        <p className="text-[10px] font-semibold text-zinc-400">
                          CONTROL DE NEGOCIO
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#18181b]">
                          Caja · Inventario · Reportes PDF
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

                {card.variant === "marketing" ? (
                  <div
                    className="grain-surface relative flex h-60 items-center justify-center rounded-[22px] p-5"
                    style={{
                      background:
                        "linear-gradient(145deg, #ff9b21 0%, #ff7300 100%)",
                    }}
                  >
                    <div className="relative z-10 w-full rounded-2xl border border-white/60 bg-white p-4 shadow-lg">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-[11px] font-semibold text-fuchsia-950">
                          <Sparkles className="size-3" aria-hidden="true" />
                          Instagram · Facebook
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-lime-100 px-2.5 py-0.5 text-[11px] font-semibold text-lime-950">
                          <Megaphone className="size-3" aria-hidden="true" />
                          Meta Ads
                        </span>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-[#52525b]">
                        Contenido mensual constante, diseño limpio para tu marca
                        y campañas publicitarias enfocadas en consultas reales.
                      </p>
                      <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-2.5">
                        <span className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-[10px] font-medium text-[#18181b]">
                          Calendario CM
                        </span>
                        <span className="rounded-full bg-[#171717] px-2.5 py-0.5 text-[10px] font-medium text-white">
                          Diseño + Pauta
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}

                {card.variant === "agency" ? (
                  <div
                    className="grain-surface relative flex h-60 items-end justify-center gap-2.5 overflow-hidden rounded-[22px] px-4 pt-6 pb-0"
                    style={{
                      background:
                        "linear-gradient(145deg, #d56bff 0%, #b845f5 100%)",
                    }}
                  >
                    <div className="relative z-10 mb-5 hidden rounded-xl bg-white/90 px-2.5 py-2 text-[10px] font-semibold text-[#18181b] shadow-sm sm:block">
                      Web + Sistemas
                    </div>

                    <div className="arch-shape relative z-10 flex h-48 w-36 flex-col items-center justify-center border-2 border-white/80 bg-[#141417] px-3 text-center text-white shadow-xl">
                      <GlyphMark tone="dark" className="mb-2.5 size-14" />
                      <span className="font-display text-sm tracking-[-0.02em] text-white">
                        <strong className="font-semibold">Glyph</strong>{" "}
                        <span className="font-normal text-zinc-400">Agency</span>
                      </span>
                      <span className="mt-1 text-[10px] font-medium text-zinc-400">
                        Visión 360°
                      </span>
                    </div>

                    <div className="relative z-10 mb-5 hidden rounded-xl bg-white/90 px-2.5 py-2 text-[10px] font-semibold text-[#18181b] shadow-sm sm:block">
                      Redes + Meta Ads
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

        {/* Equipo fundador: sin fotografías, presentación ejecutiva de cofundadores */}
        <div
          id="equipo"
          className="mt-24 scroll-mt-24 border-t border-zinc-200/80 pt-16"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff8400]">
                Dirección y Co-fundación
              </p>
              <SplitHeadline
                as="h3"
                text="Quiénes lideran Glyph Agency"
                className="mt-2 text-[clamp(1.75rem,3.6vw,2.6rem)] font-semibold tracking-[-0.03em] leading-[1.06] text-[#18181b]"
              />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#52525b]">
              Unimos visión administrativa, estrategia de mercadeo y desarrollo
              de software para acompañarte directamente sin intermediarios.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COFOUNDERS.map((founder) => (
              <article
                key={founder.id}
                className="flex flex-col justify-between rounded-[28px] border border-zinc-200/85 bg-[#fafafa] p-6 shadow-[0_10px_30px_rgba(24,24,27,0.03)] sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        aria-hidden="true"
                        className="flex size-14 shrink-0 items-center justify-center rounded-2xl font-display text-lg font-bold tracking-tight shadow-sm"
                        style={{
                          backgroundColor: founder.accentBg,
                          color: founder.accentText,
                        }}
                      >
                        {founder.initials}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold tracking-tight text-[#18181b]">
                          {founder.name}
                        </h4>
                        <p className="mt-0.5 text-xs font-semibold text-[#52525b]">
                          {founder.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {founder.credential ? (
                    <div className="mt-4 inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-medium text-[#18181b]">
                      {founder.credential}
                    </div>
                  ) : null}

                  <p className="mt-4 text-sm leading-relaxed text-[#3f3f46]">
                    {founder.bio}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-zinc-200/75 pt-4">
                    {founder.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs font-medium text-[#18181b] sm:text-[13px]"
                      >
                        <Check
                          className="size-3.5 shrink-0 text-[#ff8400]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200/75 pt-4">
                  <span className="text-[11px] font-medium text-[#737373]">
                    {founder.specialty}
                  </span>
                  <a
                    href={founder.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-zinc-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#18181b] transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
                  >
                    LinkedIn
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
