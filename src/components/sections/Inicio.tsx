"use client";
import FullStackDeveloper from "../FullStackDeveloper";
import GitHubIcon from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";
import InstagramIcon from "../icons/Instagram";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export function Inicio() {
  return (
    <div className="container">
      <div className="gridLeft">
        <FullStackDeveloper />
        <div className="buttonDistance">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="button"
          >
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={200}
              style={{ color: "#ffffff" }}
            >
              Conheça meu portfólio
            </Link>
          </motion.button>
        </div>
        <div className="iconsSocialMedia">
          <a href="https://github.com/mattmascarenhas" target="_blank">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/mattmascarenhas/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
          <a href="https://www.instagram.com/mattmascarenhas/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="gridRight">
        <img src="img3.png" alt="" className="imgHome" />
      </div>
    </div>
  );
}

export default Inicio;
