// Next element
import Link from "next/link";

// Style
import "./SocialMedia.scss";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

function SocialMedia() {
  return (
    <div className="social-media-icons">
      <a href="mailto:">
        <FontAwesomeIcon
          icon={faEnvelopeOpen}
          aria-label="M'envoyer un mail"
          className="social-media-icons__link icon"
        />
      </a>
      <Link
        href=""
        target="_blank"
        aria-label="Ouvrir mon LinkedIn"
        className="social-media-icons__link"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
      </Link>
      <Link
        href=""
        target="_blank"
        aria-label="Ouvrir mon Instagram"
        className="social-media-icons__link"
      >
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </Link>
    </div>
  );
}

export default SocialMedia;
