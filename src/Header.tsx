import "./Header.css";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import square from "./assets/brizzle-insta-square.png";
import hero from "./assets/hero5.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="top-bar">
        <div className="email-container">
          <a href="mailto:hello@brizzle-english.com">
            <FaEnvelope className="email-icon" />
          </a>
        </div>
        <img src={square} alt="Brizzle square logo" className="square-logo" />
        <div className="social-media-container">
          <a
            href="https://www.facebook.com/profile.php?id=61574983478329"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="email-icon" />
          </a>
          <a
            href="https://www.instagram.com/brizzleenglish/"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareInstagram className="email-icon" />
          </a>
        </div>
      </div>
      <div className="header-container">
        <img className="hero" src={hero} alt="Brizzle hero" />
      </div>
    </div>
  );
}
