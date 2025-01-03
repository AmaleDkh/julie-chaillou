// Next element
import Link from "next/link";

// Style
import "./Button.scss";

interface ButtonProps {
  link: string;
  text: string;
}

function Button({ link, text }: ButtonProps) {
  return (
    <Link href={link} className="button">
      {text}
    </Link>
  );
}

export default Button;
