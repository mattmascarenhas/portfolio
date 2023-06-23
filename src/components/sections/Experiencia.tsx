import AspasIcon from "@/components/icons/Aspas";
import CsharpIcon from "@/components/icons/Csharp";
import CssIcon from "@/components/icons/Css";
import HtmlIcon from "@/components/icons/Html";
import JavaScriptIcon from "@/components/icons/Javascript";
import ReactIcon from "@/components/icons/React";

export function Experiencia() {
  return (
    <div className="containerExp">
      <div className="h1Exp">
        <h1>
          Experiência <span>Profissional</span>
        </h1>
      </div>
      <div className="cardsExp">
        <div className="card1">
          <h1>Freelancer</h1>
          <h2>Criação de sistema para escritório de advocácia</h2>
          <h2>Duração: 9 meses</h2>
          <h2>Tecnologias utilizadas</h2>
          <div className="iconsExp">
            <ReactIcon />
            <HtmlIcon />
            <CssIcon />
            <JavaScriptIcon />
            <img src="node.png" alt="" width={55} />
            <img src="mysql.png" alt="" width={60} />
          </div>
        </div>
        <div className="card2">
          <h1>Freelancer</h1>
          <h2>Api para escritório de advocácia em Asp.net</h2>
          <h2>Duração: 1 mês</h2>
          <h2>Tecnologias utilizadas</h2>
          <div className="iconsExp">
            <CsharpIcon />
            <img src="aspnet.png" alt="" width={90} />
            <img src="sqlserver.png" alt="" width={180} />
          </div>
        </div>
      </div>
      <div className="footerExp">
        <AspasIcon />
        <h2 className="h2FooterExp">
          "Uma mente que se abre a uma nova ideia, jamais voltará ao seu tamanho
          original."
        </h2>
        <h1 className="h1FooterExp"> ~Albert Einstein</h1>
      </div>
    </div>
  );
}

export default Experiencia;
