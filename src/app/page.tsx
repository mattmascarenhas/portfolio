"use client";
import PageWrapper from "@/components/PageWrapper";
import ScrollWrapper from "@/components/ScrollWrapper";
import Experiencia from "@/components/sections/Experiencia";
import Inicio from "@/components/sections/Inicio";
import Portfolio from "@/components/sections/Portfolio";
import Sobre from "@/components/sections/Sobre";
import Tecnologias from "@/components/sections/Tecnologias";

export default function Home() {
  return (
    <div className="">
      <PageWrapper>
        <section id="inicio" className="sections">
          <Inicio />
        </section>
        <section className="sectionsWhite" id="portfolio">
          <Portfolio />
        </section>
        <section className="sections" id="experiencia">
          <Experiencia />
        </section>
        <section className="sectionsWhite" id="tecnologias">
          <Tecnologias />
        </section>
        <section className="sections" id="sobre">
          <Sobre />
        </section>
      </PageWrapper>
    </div>
  );
}
