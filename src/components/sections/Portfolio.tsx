export function Portfolio() {
  return (
    <div className="portContent">
      <div className="h1Exp">
        <h1>
          <span>Portifólio</span> Profissional
        </h1>
      </div>
      <div className="containerPortfolio">
        <div className="gridLeftPortfolio">
          <img src="mockup-geradoc.png" alt="" className="imgPortfolio" />
          <p className="description">DESCRIÇÃO DO PROJETO</p>
        </div>

        <div className="gridRightPortfolio">
          <img src="mockup-geraduo.png" alt="" className="imgPortfolio" />
          <p className="description">DESCRIÇÃO DO PROJETO</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
