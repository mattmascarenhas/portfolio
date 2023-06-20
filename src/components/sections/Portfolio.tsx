export function Portfolio() {
  return (
    <div className="portContent">
      <div className="h1Exp">
        <h1>
          <span>Portifólio</span> Profissional
        </h1>
      </div>
      <div className="containerPortfolio">
        <div className="gridPortfolio">
          <a href="https://dev.to/mattmascarenhas/geradoc-b65" target="_blank">
            <img
              src="mockup-geradoc.png"
              alt="Clique para saber mais"
              className="imgPortfolio"
            />
          </a>
          <h2 style={{ margin: 0 }}>GERADOC</h2>
          <h3 style={{ margin: 10 }}>
            Sistema de advocacia para administrar clientes e petições
          </h3>
        </div>

        <div className="gridPortfolio">
          <a href="https://dev.to/mattmascarenhas/geraduo-423f" target="_blank">
            <img
              src="mockup-geraduo.png"
              alt="Clique para saber mais"
              className="imgPortfolio"
            />
          </a>
          <h2 style={{ margin: 0 }}>GERADUO</h2>
          <h3 style={{ margin: 10 }}>
            Uma plataforma inovadora para conectar jogadores apaixonados
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
