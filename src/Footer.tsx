import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <Link to="/profile">
        <div className="footer-text">Votre Professeure</div>
      </Link>
      <div className="footer-text">
        <a
          href="https://www.facebook.com/profile.php?id=61574983478329"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/brizzleenglish/"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareInstagram />
        </a>
      </div>
      <Link to="/faq">
        <div className="footer-text">FAQ</div>
      </Link>
    </div>
  );
}
