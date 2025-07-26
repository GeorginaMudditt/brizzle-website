import "../Modal.css";
import { useNavigate } from "react-router-dom";
import applicatiion from "../assets/brizzle-app-screenshot.png";

export default function ApplicationPage() {
  const navigate = useNavigate();

  function closeModal() {
    setTimeout(() => navigate("/"), 0);
  }

  return (
    <>
      <div className="modal-overlay" onClick={() => navigate("/")} />
      <div className="modal">
        <button onClick={closeModal} className="close-modal">
          &times;
        </button>
        <h2>Application de vocabulaire Brizzle</h2>
        <img
          src={applicatiion}
          className="app-pic"
          alt="Screenshot of mobile app"
        />
        <p className="modal-text">
          Je suis en train de développer une application de vocabulaire en
          anglais qui sera disponible à l'achat sur le Google Play Store et
          l'Apple App Store en 2026.
          <br />
          <br /> L'application comportera 6 niveaux de langue différents
          conformément au{" "}
          <a
            href="https://rm.coe.int/16802fc3a8"
            target="_blank"
            rel="noreferrer"
          >
            Cadre Européen Commun de Référence pour les Langues (CECRL)
          </a>
          .
          <br />
        </p>
      </div>
    </>
  );
}
