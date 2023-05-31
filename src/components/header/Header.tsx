import Logo from "./Logo";

export function Header() {
  return (
    <div className="header_container">
      <div className="header_logo">
        <Logo />
        <h1>Matheus Mascarenhas</h1>
      </div>
      <ul className="header_lista">
        <li>home</li>
        <li>portfólio</li>
        <li>experiência</li>
        <li>sobre</li>
      </ul>
    </div>
  );
}
