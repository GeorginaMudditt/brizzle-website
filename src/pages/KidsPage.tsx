import "../Modal.css";
import { useNavigate } from "react-router-dom";
import { FaChild } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

export default function KidsPage() {
  const navigate = useNavigate();

  function closeModal() {
    setTimeout(() => navigate("/"), 0);
  }

  return (
    <div>
      <div className="modal-overlay" onClick={() => navigate("/")} />
      <div className="modal">
        <button onClick={closeModal} className="close-modal">
          &times;
        </button>
        <h2>Cours en groupe pour enfants de 6 à 11 ans</h2>
        <p>
          Les inscriptions sont désormais closes pour les cours du trimestre
          d'été. Je publierai bientôt les détails des programmes des vacances
          d'été et des cours collectifs débutant en septembre. Envoyez-moi un
          e-mail pour manifester votre intérêt.
        </p>
        <p className="modal-text kids-text">
          <FaChild className="icon" />
          Maximum de 8 enfants par groupe
        </p>
        <p className="modal-text kids-text">
          <FaRegClock className="icon" />
          Cours d'une heure
        </p>
        {/* <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Les détails des cours de septembre arrivent bientôt
        </p> */}
        <p className="modal-text kids-text">
          <FaLocationDot className="icon" />
          83570 Carcès
        </p>
        <p className="modal-text kids-text">
          <FaRegSmile className="icon" />
          Cours ludiques et interactifs
        </p>
        <p className="modal-text kids-text">
          <FaChalkboardTeacher className="icon" />
          Apprenez avec une professeure native d'anglais
        </p>
      </div>
    </div>
  );
}
