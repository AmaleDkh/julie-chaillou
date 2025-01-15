// Component
import SocialMedia from "../SocialMedia/SocialMedia";

// Style
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © 2024 JULIE VIDÉASTE | TOUS DROITS RÉSERVÉS
      </p>
      <SocialMedia classNameForVersion="footer-version" />
    </footer>
  );
}

export default Footer;
