import Link from "next/link";
import Logo from "./Logo";

export function Header() {
  return (
    <div className="header_container">
      <Link href="/">
        <div className="header_logo">
          <Logo />
          <h1>Matheus Mascarenhas</h1>
        </div>
      </Link>
      <ul className="header_lista container1">
        <li>
          <Link href="#">ínicio</Link>
        </li>
        <li>
          <Link href="#portfolio">portfólio</Link>
        </li>
        <li>
          <Link href="#experiencia">experiência</Link>
        </li>
        <li>
          <Link href="#tecnologias">tecnologias</Link>
        </li>
        <li>
          <Link href="#sobre">sobre</Link>
        </li>
      </ul>
    </div>
  );
}
