// React element
import Link from "next/link";

// Style
import "./SocialMediaContact.scss";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function SocialMediaContact() {
  return (
    <div className="social-media-contact-icons">
      <a href="mailto:">
        <FontAwesomeIcon
          icon={faEnvelopeOpen}
          aria-label="M'envoyer un mail"
          className="social-media-contact-icons__link contact-icon"
        />
      </a>
      <Link
        href=""
        target="_blank"
        aria-label="Accéder à mon compte Instagram"
        className="social-media-contact-icons__link"
      >
        <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
      </Link>
      <Link
        href=""
        target="_blank"
        aria-label="Accéder à mon compte TikTok"
        className="social-media-contact-icons__link"
      >
        <FontAwesomeIcon icon={faTiktok} className="contact-icon" />
      </Link>
      <Link
        href=""
        target="_blank"
        aria-label="Accéder à mon compte Youtube"
        className="social-media-contact-icons__link"
      >
        <FontAwesomeIcon icon={faYoutube} className="contact-icon" />
      </Link>
    </div>
  );
}

export default SocialMediaContact;
