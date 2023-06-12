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
    <div>
      <PageWrapper>
        <section style={{ height: "98vh", width: "98vw" }} id="inicio">
          <Inicio />
        </section>
        <section style={{ height: "98vh", width: "98vw" }} id="portfolio">
          <Portfolio />
        </section>
        <section style={{ height: "98vh", width: "98vw" }} id="experiencia">
          <Experiencia />
        </section>
        <section style={{ height: "98vh", width: "98vw" }} id="tecnologias">
          <Tecnologias />
        </section>
        <section style={{ height: "98vh", width: "98vw" }} id="sobre">
          <Sobre />
        </section>
      </PageWrapper>
    </div>
  );
}
