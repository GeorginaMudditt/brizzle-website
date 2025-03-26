import "../Modal.css";
import { useNavigate } from "react-router-dom";
import { FaChild } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";

export default function KidsPage() {
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
        <h2>Cours en groupe pour enfants de 6 à 11 ans</h2>
        <p className="modal-text kids-text">
          <FaChild className="icon" />
          Maximum de 5 enfants par groupe
        </p>
        <p className="modal-text kids-text">
          <FaRegClock className="icon" />
          Cours d'une heure 16h45 à 17h45, d'avril 2025 à juillet 2025
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Inscription jusqu'à 12 avril 2025
        </p>
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
        <h3>Groupe 1</h3>
        <a href="mailto:hello@brizzle-english.com?subject=Pré-inscription aux cours d'anglais pour enfants : Groupe 1">
          <button className="button no-margin">Pré-inscription</button>
        </a>
        <p className="modal-text kids-text">
          <IoMdSchool className="icon" />
          CP, CE1 & CE2
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Mardis (11 semaines)
          <button
            className="dates-button"
            data-dates="22 avril, 29 avril, 06 mai, 13 mai, 20 mai, 27 mai, 03 juin, 10 juin, 17 juin, 24 juin, 01 juillet"
          >
            Voir les dates
          </button>
        </p>
        <p className="modal-text kids-text">
          <FaEuroSign className="icon" />
          110€ par enfant
        </p>

        <h3>Groupe 2</h3>
        <a href="mailto:hello@brizzle-english.com?subject=Pré-inscription aux cours d'anglais pour enfants : Groupe 2">
          <button className="button no-margin">Pré-inscription</button>
        </a>
        <p className="modal-text kids-text">
          <IoMdSchool className="icon" />
          CP, CE1 & CE2
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Jeudis (8 semaines)
          <button
            className="dates-button"
            data-dates="24 avril, 15 mai, 22 mai, 05 juin, 12 juin, 19 juin, 26 juin, 03 juillet"
          >
            Voir les dates
          </button>
        </p>
        <p className="modal-text kids-text">
          <FaEuroSign className="icon" />
          80€ par enfant
        </p>

        <h3>Groupe 3</h3>
        <a href="mailto:hello@brizzle-english.com?subject=Pré-inscription aux cours d'anglais pour enfants : Groupe 3">
          <button className="button no-margin">Pré-inscription</button>
        </a>
        <p className="modal-text kids-text">
          <IoMdSchool className="icon" />
          CE2, CM1 & CM2
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Vendredis (9 semaines)
          <button
            className="dates-button"
            data-dates="25 avril, 02 mai, 09 mai, 16 mai, 23 mai, 06 juin, 20 juin, 27 juin, 04 juillet"
          >
            Voir les dates
          </button>
        </p>
        <p className="modal-text kids-text">
          <FaEuroSign className="icon" />
          90€ par enfant
        </p>
      </div>
    </>
  );
}
