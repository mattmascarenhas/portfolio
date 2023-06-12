"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (e: any, sectionId: any) => {
    e.preventDefault();
    scrollToSection(sectionId);
    router.push(`/#${sectionId}`);
  };

  return (
    <div
      className={`header_container ${
        scrolled ? "header_container_scrolled" : ""
      }`}
    >
      <Link href="/">
        <div className="header_logo">
          <Logo fill={scrolled ? "#e7f6f2" : "#2c3333"} />
          <h1>Matheus Mascarenhas</h1>
        </div>
      </Link>

      <ul className="header_lista container1">
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#inicio" onClick={(e) => handleLinkClick(e, "inicio")}>
            ínicio
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a
            href="#experiencia"
            onClick={(e) => handleLinkClick(e, "experiencia")}
          >
            experiência
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a
            href="#tecnologias"
            onClick={(e) => handleLinkClick(e, "tecnologias")}
          >
            tecnologias
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#sobre" onClick={(e) => handleLinkClick(e, "sobre")}>
            sobre
          </a>
        </motion.li>
      </ul>
    </div>
  );
}
