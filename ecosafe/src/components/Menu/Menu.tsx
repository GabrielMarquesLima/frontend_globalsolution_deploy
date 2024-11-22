import Link from "next/link";


export default function Menu() {
  return (
    <nav className="menu-navbar">
      <ul className="menu-list">
        <li>
          <Link href="/" className="menu-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/pontos-descartes" className="menu-link">
            Pontos de Descarte
          </Link>
        </li>
        <li>
          <Link href="/agendar-descartes" className="menu-link">
            Agendar
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="menu-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/sobre" className="menu-link">
            Sobre Nós
          </Link>
        </li>
      </ul>
    </nav>
  );
}
