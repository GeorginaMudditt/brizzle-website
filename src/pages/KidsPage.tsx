import "../Modal.css";
import { useNavigate } from "react-router-dom";
import { FaChild } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";

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
        <h2>L'anglais pour enfants</h2>
        <p className="modal-text kids-text">
          <FaLocationDot className="icon" />
          83570 Carcès
        </p>
        <p className="modal-text kids-text">
          <FaRegSmile className="icon" />
          Cours ludiques et interactifs
        </p>
        <h3>Disponible dès maintenant : cours particuliers</h3>
        <p className="modal-text kids-text">
          <FaChild className="icon" />
          Pour 1 ou 2 enfants, tout âge
        </p>
        <p className="modal-text kids-text">
          <FaRegClock className="icon" />
          Horaires flexibles
        </p>
        <p className="modal-text kids-text">
          <FaEuroSign className="icon" />
          40 € de l’heure
        </p>
        <p>
          <a href="mailto:hello@brizzle-english.com?subject=Demande d'informations sur les cours particuliers">
            Contactez-moi
          </a>{" "}
          pour plus d’informations.
        </p>
        <h3>À venir : L’Été avec Brizzle</h3>
        <h4>Deux semaines d’anglais pendant les vacances d’été</h4>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          28 juillet - 1 août 2025 / 4 - 8 août 2025
        </p>
        <p className="modal-text kids-text">
          <FaChild className="icon" />6 - 11 ans
        </p>
        <p className="modal-text kids-text">
          <FaChalkboardTeacher className="icon" />
          Réservez une ou deux semaines pour votre enfant
        </p>
        <p>
          <a href="mailto:hello@brizzle-english.com?subject=Demande d'informations sur l'Été avec Brizzle">
            Envoyez-moi un e-mail
          </a>{" "}
          pour être ajouté à la liste de diffusion et être parmi les premiers
          informés lorsque les détails et le programme seront disponibles à la
          réservation.
        </p>
        <h3>À venir : Nouvelles classes pour la rentrée</h3>
        <h4>Cours en groupe pour les enfants de 4 à 11 ans</h4>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Mercredis 9h15 à 10h15 : MS & GS
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Mercredis 10h30 à 11h30 : CP à CM2 (pour les enfants non scolarisés à
          Carcès)
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Jeudis 16h45 à 17h45 : CP à CE2
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Vendredis 16h45 à 17h45 : CE2 à CM2
        </p>
        <p className="modal-text kids-text">
          <FaChalkboardTeacher className="icon" />
          14 semaines de cours, de septembre à décembre 2025
        </p>
        <p>
          <a href="mailto:hello@brizzle-english.com?subject=Demande d'informations sur les nouvelles classes pour la rentrée">
            Envoyez-moi un e-mail
          </a>{" "}
          pour être ajouté à la liste de diffusion et être parmi les premiers
          informés lorsque les détails et les inscriptions seront disponibles.
        </p>
      </div>
    </div>
  );
}
