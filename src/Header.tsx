import "./Header.css";
import clifton from "./assets/clifton-suspension-houses.jpg";
import logo from "./assets/brizzle-fb-cover.png";
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
      <img
        className="clifton-header"
        src={clifton}
        alt="Clifton Suspension Bridge"
      />
      <img className="logo" src={logo} alt="Brizzle square logo" />
      <div className="slogan">
        Progressez en anglais, à votre rythme et en vous amusant !
      </div>
    </div>
  );
}
