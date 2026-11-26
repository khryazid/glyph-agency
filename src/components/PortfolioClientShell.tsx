"use client";

import { useState } from "react";
import type { HeroCategory, ProjectItem } from "@/data/portfolio";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { ProjectsShowcase } from "./ProjectsShowcase";
import { CaseStudyDialog } from "./CaseStudyDialog";
import { ProcessSection } from "./ProcessSection";
import { ScalePortalSection } from "./ScalePortalSection";
import { ServicesSection } from "./ServicesSection";
import { FaqSection } from "./FaqSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export function PortfolioClientShell() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [contactCategory, setContactCategory] =
    useState<HeroCategory>("Sistema a Medida");
  const [contactMessage, setContactMessage] = useState("");
  const [resetSignal, setResetSignal] = useState(0);

  const jumpToContact = (payload: { category: HeroCategory; brief: string }) => {
    setContactCategory(payload.category);
    setContactMessage(payload.brief);
    setResetSignal((v) => v + 1);
    const target = document.getElementById("contacto");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <main id="contenido">
        <HeroSection
          onStartProject={jumpToContact}
          onSelectProject={(project) => setActiveProject(project)}
        />
        <ProjectsShowcase onSelectProject={(project) => setActiveProject(project)} />
        <ProcessSection />
        <ScalePortalSection
          onPickCategory={(category) =>
            jumpToContact({
              category,
              brief: `Hola Khristian, me gustaría conversar sobre implementar ${
                category === "Automatización e IA"
                  ? "automatizaciones con inteligencia artificial"
                  : category === "Web Comercial"
                  ? "una web comercial de alto impacto"
                  : "un sistema a medida"
              } para mi negocio.`,
            })
          }
        />
        <ServicesSection onSelectService={jumpToContact} />
        <FaqSection />
        <ContactSection
          category={contactCategory}
          message={contactMessage}
          onCategoryChange={setContactCategory}
          onMessageChange={setContactMessage}
          resetSignal={resetSignal}
        />
      </main>
      <Footer />
      <CaseStudyDialog
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestSimilar={jumpToContact}
      />
    </>
  );
}
