import "./Header.css";
import logo from "./assets/brizzle-slogan.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import square from "./assets/brizzle-insta-square.png";
import hero from "./assets/hero.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="top-bar">
        <img src={square} alt="Brizzle square logo" className="square-logo" />
        <div className="email-container">
          <FaEnvelope className="email-icon" />
          <a href="mailto:hello@brizzle-english.com">
            <div className="email-address">hello@brizzle-english.com</div>
          </a>
        </div>

        <div className="social-media-container">
          <FaFacebook className="email-icon" />
          <a
            href="https://www.facebook.com/profile.php?id=61574983478329"
            target="_blank"
            rel="noreferrer"
          >
            <div className="email-address">Brizzle Facebook</div>
          </a>
        </div>
      </div>
      <div className="header-container">
        <img className="hero" src={hero} alt="Brizzle hero" />
      </div>
    </div>
  );
}
