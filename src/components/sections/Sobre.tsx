import GitHubIcon from "@/components/icons/Github";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/Linkedin";

export function Sobre() {
  return (
    <div className="continerSobrePrincipal">
      <div className="h1Exp">
        <h1>
          Matheus <span>Mascarenhas</span>
        </h1>
        <div className="containerSobre">
          <div className="circle">
            <img src="avatar.png" alt="" />
          </div>
          <div style={{ marginTop: "50px" }}>
            <p>
              Sou desenvolvedor Full Stack, graduado em engenharia civil e
              pós-graduado em Análise e Desenvolvimento de Programas, e em
              Projetos de Aplicativos Móveis Multiplataforma. Possuo alguns
              trabalhos, onde neles utilizo o React para o Front-End, Asp.net ou
              Node.js para o Back-End e SQL Server no banco de dados.
            </p>
          </div>
        </div>
        <div className="iconsSocialMedia" style={{ marginTop: "180px" }}>
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
    </div>
  );
}

export default Sobre;
