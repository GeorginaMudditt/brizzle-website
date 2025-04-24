import "../Modal.css";
import { useNavigate } from "react-router-dom";
import { FaPerson } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { HiDesktopComputer } from "react-icons/hi";

export default function OnlinePage() {
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
        <h2>Cours en ligne</h2>
        <p className="modal-text kids-text">
          <FaPerson className="icon" />
          Cours individuel
        </p>
        <p className="modal-text kids-text">
          <FaRegClock className="icon" />
          Cours d'une heure, horaires flexibles disponibles
        </p>
        <p className="modal-text kids-text">
          <HiDesktopComputer className="icon" />
          En ligne (Google Meet)
        </p>
        <p className="modal-text kids-text">
          <FaEuroSign className="icon" />
          40 € par heure
        </p>
        <h3>Réserver un cours</h3>
        <p className="modal-text">
          Vous pouvez réserver autant ou aussi peu de cours particuliers que
          vous le souhaitez, à un horaire qui vous convient. J’ai de nombreux
          créneaux disponibles en journée les lundis, mardis, jeudis et
          vendredis, et quelques créneaux en soirée et le week-end.
        </p>
        <p className="modal-text">
          J'offre une réduction de 25 % aux étudiants réservant au moins dix
          cours d'une heure. Ainsi, dix cours réservés ensemble coûteront 300 €
          (au lieu de 400 € si réservés un par un).
        </p>
        <p className="modal-text">
          <a href="mailto:hello@brizzle-english.com?subject=Réservation de cours en ligne">
            Contactez-moi
          </a>{" "}
          pour réserver ou pour toute vos questions supplémentaires.
        </p>
        <h3>Contenu des cours</h3>
        <p className="modal-text">
          Ces cours sont adaptés à vos besoins. Si vous souhaitez travailler une
          compétence particulière (par exemple, l'expression orale, la lecture
          ou la grammaire), nous pourrons nous concentrer principalement sur cet
          aspect.
        </p>
        <p className="modal-text">
          Je peux également vous aider à préparer un examen, comme le brevet, le
          bac ou l’IELTS.
        </p>
        <p className="modal-text">
          Si vous avez des besoins spécifiques, je peux concevoir des cours en
          fonction de votre métier ou de vos centres d'intérêt, par exemple
          l'anglais pour l'industrie du vin ou l'anglais pour le voyage.
        </p>
        <a
          href="https://calendly.com/hello-brizzle-english/cours-d-anglais-en-ligne"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button no-margin">
            Réserver un cours en ligne
          </button>
        </a>
      </div>
    </>
  );
}
