import "./Header.css";
import logo from "./assets/brizzle-slogan.jpg";
import { FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <div className="Header">
      <div className="top-bar">
        <div className="email-container">
          <FaEnvelope className="email-icon" />
          <a href="mailto:hello@brizzle-english.com">
            <div className="email-address">hello@brizzle-english.com</div>
          </a>
        </div>
      </div>
      <div className="header-container">
        <div>
          <img className="logo" src={logo} alt="Brizzle square logo" />
        </div>
        <div>
          <h2 className="title">Cours d'anglais</h2>
          <h2 className="title">83570 Carcès</h2>
        </div>
      </div>
    </div>
  );
}
