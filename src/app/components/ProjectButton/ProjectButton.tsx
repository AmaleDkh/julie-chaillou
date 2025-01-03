// Next element
import Link from "next/link";

// Style
import "./ProjectButton.scss";

interface ButtonProps {
  link: string;
  text: string;
}

function ProjectButton({ link, text }: ButtonProps) {
  return (
    <Link href={link} className="project-button">
      {text}
    </Link>
  );
}

export default ProjectButton;
