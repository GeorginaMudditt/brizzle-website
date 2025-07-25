import "../Modal.css";
import { useNavigate } from "react-router-dom";
import { FaPerson } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function AdultsPage() {
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
        <h2>L'anglais pour adultes </h2>
        <p className="modal-text kids-text">
          <FaPerson className="icon" />
          Cours particuliers pour 1, 2, 3 ou 4 personnes
        </p>
        <p className="modal-text kids-text">
          <FaRegClock className="icon" />
          Horaires flexibles disponibles
        </p>
        <p className="modal-text kids-text">
          <FaLocationDot className="icon" />
          Chemin Notre Dame, 83570 Carcès
        </p>
        <p className="modal-text kids-text">
          <FaEuroSign className="icon" />
          40 € par heure (Le prix par heure ne change pas en fonction du nombre
          de personnes)
        </p>
        <h3>Réserver un cours</h3>
        <p className="modal-text">
          Vous pouvez réserver autant ou aussi peu de cours particuliers que
          vous le souhaitez, à un horaire qui vous convient. J’ai de nombreux
          créneaux disponibles en journée les lundis, mardis, jeudis et
          vendredis, et quelques créneaux en soirée et le week-end.
        </p>
        <p className="modal-text reduction">
          Je propose une réduction de 25 % pour ceux qui réservent 10 heures.
          Ainsi, un bloc de 10 heures coûte 300 €.
        </p>
        <p className="modal-text">
          <a href="mailto:hello@brizzle-english.com?subject=Reservation de cours individuels">
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
          Je peux également vous aider à préparer un examen, comme l’IELTS.
        </p>
        <p className="modal-text">
          Si vous avez des besoins spécifiques, je peux concevoir des cours en
          fonction de votre métier ou de vos centres d'intérêt, par exemple
          l'anglais pour l'industrie du vin ou l'anglais pour le voyage.
        </p>
      </div>
    </>
  );
}
