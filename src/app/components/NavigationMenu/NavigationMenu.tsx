// Next element
import Link from "next/link";

// Style
import "./NavigationMenu.scss";

function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <Link href="/projects-list" className="navigation-menu__link">
        MES PROJETS
      </Link>
      <Link href="/photos" className="navigation-menu__link">
        PHOTOS
      </Link>
      <Link href="/about" className="navigation-menu__link">
        À PROPOS
      </Link>
      <Link href="/contact" className="navigation-menu__link">
        CONTACT
      </Link>
      {/* <span className="navigation-menu__bar"></span>
      <span className="navigation-menu__bar"></span>
      <span className="navigation-menu__bar"></span> */}
    </nav>
  );
}

export default NavigationMenu;
