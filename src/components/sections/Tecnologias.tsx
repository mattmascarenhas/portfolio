import AngularIcon from "@/components/icons/Angular";
import CsharpIcon from "@/components/icons/Csharp";
import CssIcon from "@/components/icons/Css";
import HtmlIcon from "@/components/icons/Html";
import JavaIcon from "@/components/icons/Java";
import JavaScriptIcon from "@/components/icons/Javascript";
import ReactIcon from "@/components/icons/React";
import TypescriptIcon from "@/components/icons/Typescript";

export function Tecnologias() {
  return (
    <div className="containerTec">
      <div className="h1Tec">
        <h1>
          <span>Tecnologias</span> Utilizadas
        </h1>
      </div>
      <div className="tecAtual">
        <div className="h1Exp">
          <h3>
            Atualmente <span>desenvolvendo</span>
          </h3>
        </div>
        <div className="iconsTec">
          <TypescriptIcon />
          <ReactIcon />
          <HtmlIcon />
          <CssIcon />
          <CsharpIcon />
          <img src="aspnet.png" alt="" width={120} />
          <img src="sqlserver.png" alt="" width={280} />
        </div>
      </div>
      <div>
        <div className="h1Exp">
          <h3>
            <span>Utilizadas</span> anteriormente
          </h3>
        </div>
        <div className="iconsTec">
          <JavaScriptIcon />
          <img src="node.png" alt="" width={80} />
          <AngularIcon />
          <JavaIcon />
          <img src="mysql.png" alt="" width={90} />
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
