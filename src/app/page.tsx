import Experiencia from "@/components/sections/Experiencia";
import Inicio from "@/components/sections/Inicio";
import Portfolio from "@/components/sections/Portfolio";
import Sobre from "@/components/sections/Sobre";
import Tecnologias from "@/components/sections/Tecnologias";
import { useEffect, useRef } from "react";

export default function Home() {
  // const navigationRef = useRef(null);
  // const backToTopButtonRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     showNavOnScroll();
  //     showBackToTopButtonOnScroll();

  //     activateMenuAtCurrentSection(homeRef.current);
  //     activateMenuAtCurrentSection(servicesRef.current);
  //     activateMenuAtCurrentSection(aboutRef.current);
  //     activateMenuAtCurrentSection(contactRef.current);
  //   };

  //   const showNavOnScroll = () => {
  //     if (window.scrollY > 0) {
  //       navigationRef.current.classList.add('scroll');
  //     } else {
  //       navigationRef.current.classList.remove('scroll');
  //     }
  //   };

  //   const showBackToTopButtonOnScroll = () => {
  //     if (window.scrollY > 550) {
  //       backToTopButtonRef.current.classList.add('show');
  //     } else {
  //       backToTopButtonRef.current.classList.remove('show');
  //     }
  //   };

  //   const activateMenuAtCurrentSection = (section) => {
  //     const targetLine = window.scrollY + window.innerHeight / 2;

  //     const sectionTop = section.offsetTop;
  //     const sectionHeight = section.offsetHeight;
  //     const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  //     const sectionEndsAt = sectionTop + sectionHeight;
  //     const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  //     const sectionBoundaries =
  //       sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  //     const sectionId = section.getAttribute('id');
  //     const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  //     menuElement.classList.remove('active');
  //     if (sectionBoundaries) {
  //       menuElement.classList.add('active');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Chama a função para atualizar o estado inicial

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div>
      <section id="inicio">
        <Inicio />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="experiencia">
        <Experiencia />
      </section>
      <section id="tecnologias">
        <Tecnologias />
      </section>
      <section id="sobre">
        <Sobre />
      </section>
    </div>
  );
}
