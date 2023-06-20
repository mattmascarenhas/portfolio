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
        <section style={{ minHeight: "100vh", minWidth: "98vw" }} id="inicio">
          <Inicio />
        </section>
        <section
          style={{
            minHeight: "100vh",
            minWidth: "98vw",
            backgroundColor: "#ffffff",
          }}
          id="portfolio"
        >
          <Portfolio />
        </section>
        <section
          style={{ minHeight: "100vh", minWidth: "98vw" }}
          id="experiencia"
        >
          <Experiencia />
        </section>
        <section
          style={{
            minHeight: "100vh",
            minWidth: "98vw",
            backgroundColor: "#ffffff",
          }}
          id="tecnologias"
        >
          <Tecnologias />
        </section>
        <section style={{ minHeight: "100vh", minWidth: "98vw" }} id="sobre">
          <Sobre />
        </section>
      </PageWrapper>
    </div>
  );
}
