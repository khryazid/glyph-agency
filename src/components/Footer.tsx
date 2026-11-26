"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { AGENCY } from "@/data/portfolio";
import { GlyphLockup } from "./GlyphLogo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200/80 bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#top"
              aria-label="Volver al inicio — Glyph Agency"
              className="inline-flex items-center"
            >
              <GlyphLockup tone="light" markClassName="size-8" textClassName="text-xl" />
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#52525b]">
              Agencia digital liderada por sus cofundadores Khristian Ali y
              Daniela Quiroz. Software a medida, webs comerciales, redes
              sociales y Meta Ads para negocios.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
              Explorar
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#18181b]">
              <li><a href="#proyectos" className="hover:underline">Soluciones</a></li>
              <li><a href="#proceso" className="hover:underline">Cómo trabajamos</a></li>
              <li><a href="#servicios" className="hover:underline">Servicios</a></li>
              <li><a href="#equipo" className="hover:underline">Equipo</a></li>
              <li><a href="#faq" className="hover:underline">Preguntas</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
              Soluciones
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#18181b]">
              <li><a href="#proyectos" className="hover:underline">Redes Sociales & Meta Ads</a></li>
              <li><a href="#proyectos" className="hover:underline">GlyphCore B2B (Distribuidoras)</a></li>
              <li><a href="#proyectos" className="hover:underline">Glyphix (Clínicas y Salud)</a></li>
              <li><a href="#proyectos" className="hover:underline">Sistema POS & Inventario</a></li>
              <li><a href="#proyectos" className="hover:underline">AeroLex Global & Webs</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
              Conecta
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#18181b]">
              <li>
                <a href={AGENCY.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn · Khristian
                </a>
              </li>
              <li>
                <a href={AGENCY.danielaLinkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn · Daniela
                </a>
              </li>
              <li>
                <a href={AGENCY.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={AGENCY.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  GitHub <ArrowUpRight className="size-3.5 text-zinc-400" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:underline">
                  Contacto directo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200/75 pt-6 text-xs text-[#737373]">
          <p>© {new Date().getFullYear()} {AGENCY.name}. Todos los derechos reservados.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#f3f3f4] px-3.5 py-2 text-xs font-medium text-[#18181b] transition-colors hover:bg-zinc-200"
          >
            Volver arriba
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
