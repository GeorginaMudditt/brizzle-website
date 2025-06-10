import "./Header.css";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import square from "./assets/brizzle-insta-square.png";
import hero from "./assets/hero4.png";

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
        </div>
      </div>
      <div className="header-container">
        <img className="hero" src={hero} alt="Brizzle hero" />
      </div>
    </div>
  );
}
