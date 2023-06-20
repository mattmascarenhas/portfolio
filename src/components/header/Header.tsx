"use client";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = headerRef.current
      ? (headerRef.current as HTMLDivElement).offsetHeight
      : 0;
    const offset = section ? section.offsetTop - headerHeight : 0;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <div
      className={`header_container ${
        scrolled ? "header_container_scrolled" : ""
      }`}
    >
      <a href="/">
        <div className="header_logo">
          <Logo fill={`${scrolled ? `#ffffff` : "#303030"}`} />
          <h1>Matheus Mascarenhas</h1>
        </div>
      </a>

      <ul className="header_lista">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
          >
            ínicio
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
          >
            portfólio
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("experiencia")}
        >
          <Link
            activeClass="active"
            to="experiencia"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
          >
            experiência
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            activeClass="active"
            to="tecnologias"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
          >
            tecnologias
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
          >
            sobre
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}
