"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const NAV_LINKS = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#servicios", label: "Servicios" },
  { href: "#faq", label: "FAQ" },
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
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#18181b]"
          >
            <span
              aria-hidden="true"
              className="portal-gradient-core arch-shape inline-block h-6 w-5 shrink-0 shadow-xs"
            />
            <span>{PROFILE.name}</span>
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
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-[#f3f3f4] px-4 py-2 text-xs font-medium text-[#18181b] transition-colors hover:bg-zinc-200/80"
            >
              GitHub
              <ArrowUpRight className="size-3.5 text-zinc-500" aria-hidden="true" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-[#171717] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-black"
            >
              Iniciar proyecto
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
              <div className="mt-2 flex items-center gap-2.5 pt-2 border-t border-zinc-100">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-[#f3f3f4] px-4 py-2.5 text-xs font-medium text-[#18181b]"
                >
                  GitHub
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-[#171717] px-4 py-2.5 text-xs font-medium text-white"
                >
                  Iniciar proyecto
                </a>
              </div>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
