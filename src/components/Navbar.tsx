"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GlyphLockup } from "./GlyphLogo";

const NAV_LINKS = [
  { href: "#proyectos", label: "Soluciones" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#equipo", label: "Equipo" },
  { href: "#faq", label: "Preguntas" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-[#171717] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <header className="sticky top-0 z-40 border-b border-zinc-200/75 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            aria-label="Glyph Agency — Ir al inicio"
            className="flex items-center"
          >
            <GlyphLockup tone="light" markClassName="size-7" textClassName="text-base" />
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#52525b] transition-colors hover:text-[#18181b]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <a
              href="#proyectos"
              className="inline-flex items-center rounded-full bg-[#f3f3f4] px-4 py-2 text-xs font-medium text-[#18181b] transition-colors hover:bg-zinc-200/80"
            >
              Ver casos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-[#171717] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-black"
            >
              Cotizar proyecto
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-9 items-center justify-center rounded-full bg-[#f3f3f4] text-[#18181b] md:hidden"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-zinc-200/75 bg-white px-4 py-4 md:hidden">
            <nav aria-label="Navegación móvil" className="flex flex-col gap-3">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-1.5 text-sm font-medium text-[#18181b] hover:bg-zinc-100"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2.5 border-t border-zinc-100 pt-2">
                <a
                  href="#proyectos"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-[#f3f3f4] px-4 py-2.5 text-xs font-medium text-[#18181b]"
                >
                  Ver casos
                </a>
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-[#171717] px-4 py-2.5 text-xs font-medium text-white"
                >
                  Cotizar proyecto
                </a>
              </div>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
