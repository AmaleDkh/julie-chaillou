// Next element
import Link from "next/link";

// Style
import "./SocialMedia.scss";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

type socialMediaProps = {
  classNameForVersion: string;
};

function SocialMedia({ classNameForVersion }: socialMediaProps) {
  return (
    <div className={`social-media-icons ${classNameForVersion}`}>
      <Link
        href=""
        target="_blank"
        aria-label="Ouvrir mon Instagram"
        className="social-media-icons__link"
      >
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </Link>
      <Link
        href=""
        target="_blank"
        aria-label="Ouvrir mon TitTok"
        className="social-media-icons__link"
      >
        <FontAwesomeIcon icon={faTiktok} className="icon" />
      </Link>
    </div>
  );
}

export default SocialMedia;
