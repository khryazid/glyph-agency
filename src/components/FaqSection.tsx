"use client";

import { useState } from "react";
import { FAQ_ITEMS, PROFILE } from "@/data/portfolio";
import { SplitHeadline } from "./SplitHeadline";

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <section
      id="faq"
      className="bg-[#ffffff] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Columna izquierda sticky */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SplitHeadline
              as="h2"
              text="Preguntas frecuentes"
              className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em] leading-[1.05] text-[#18181b]"
            />
            <p className="mt-4 text-sm leading-relaxed text-[#52525b] sm:text-base">
              Detalles sobre cómo trabajo, repositorios privados vs. Open Source,
              tiempos de entrega y modalidad remota.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#18181b] underline decoration-zinc-300 underline-offset-4 hover:decoration-[#18181b]"
              >
                Escribir por LinkedIn
              </a>
              <span aria-hidden="true" className="text-zinc-300">
                /
              </span>
              <a
                href="#contacto"
                className="font-medium text-[#18181b] underline decoration-zinc-300 underline-offset-4 hover:decoration-[#18181b]"
              >
                Ir al formulario
              </a>
            </div>
          </div>
        </div>

        {/* Columna derecha acordeón */}
        <div className="divide-y divide-zinc-200/80 border-y border-zinc-200/80 lg:col-span-7">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            return (
              <div
                key={item.id}
                className={`transition-colors ${
                  isOpen ? "bg-[#f4f3ef]" : "bg-transparent hover:bg-zinc-50/80"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-base font-semibold tracking-tight text-[#18181b]">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex size-6 shrink-0 items-center justify-center text-sm text-[#18181b]"
                    >
                      {isOpen ? "•" : "◦"}
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <div
                    id={panelId}
                    className="px-5 pb-5 text-sm leading-relaxed text-[#52525b] sm:text-[15px]"
                  >
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
