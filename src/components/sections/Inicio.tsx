import Link from "next/link";
import FullStackDeveloper from "../FullStackDeveloper";
import GitHubIcon from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";
import InstagramIcon from "../icons/Instagram";

export function Inicio() {
  return (
    <div className="container">
      <div className="gridLeft">
        <FullStackDeveloper />
        <div className="buttonDistance">
          <button className="button">
            <Link href="/portfolio" style={{ color: "#e7f6f2" }}>
              Conheça meu portfólio
            </Link>
          </button>
        </div>
        <div className="iconsSocialMedia">
          <a href="https://github.com/mattmascarenhas">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mattmascarenhas/">
            <LinkedinIcon />
          </a>
          <a href="https://www.instagram.com/mattmascarenhas/">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="gridRight">
        <img src="img1.png" alt="" className="imgHome" />
      </div>
    </div>
  );
}

export default Inicio;
