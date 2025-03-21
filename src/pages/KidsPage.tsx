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
    setTimeout(() => navigate("/"), 0); // Delay navigation slightly
  }

  return (
    <>
      <div className="modal-overlay" onClick={() => navigate("/")} />
      <div className="modal">
        <button onClick={closeModal} className="close-modal">
          &times;
        </button>
        <h2>Cours en groupe pour enfants de 6 à 11 ans</h2>
        <p className="modal-text">
          <FaChild className="icon" />
          Maximum de 5 enfants par groupe
        </p>
        <p className="modal-text">
          <FaRegClock className="icon" />
          Cours d'une heure 16h45 à 17h45, d'avril 2025 à juillet 2025
        </p>
        <p className="modal-text">
          <FaLocationDot className="icon" />
          83570 Carcès
        </p>
        <p className="modal-text">
          <FaRegSmile className="icon" />
          Cours ludiques et interactifs
        </p>
        <p className="modal-text">
          <FaChalkboardTeacher className="icon" />
          Apprenez avec une locutrice native
        </p>
        <p className="question modal-text">Groupe 1</p>
        <p className="modal-text">
          <IoMdSchool className="icon" />
          CP, CE1 & CE2
        </p>
        <p className="modal-text">
          <FaCalendarAlt className="icon" />
          Mardis (11 semaines)
          <button className="button">Voir les dates</button>
        </p>
        <p className="modal-text">
          <FaEuroSign className="icon" />
          110€ par enfant
        </p>
        <button className="button no-margin">Inscription : Groupe 1</button>
        <p className="question modal-text">Groupe 2</p>
        <p className="modal-text">
          <IoMdSchool className="icon" />
          CP, CE1 & CE2
        </p>
        <p className="modal-text">
          <FaCalendarAlt className="icon" />
          Jeudis (8 semaines)
          <button className="button">Voir les dates</button>
        </p>
        <p className="modal-text">
          <FaEuroSign className="icon" />
          80€ par enfant
        </p>
        <button className="button no-margin">Inscription : Groupe 2</button>
        <p className="question modal-text">Groupe 3</p>
        <p className="modal-text">
          <IoMdSchool className="icon" />
          CM1 & CM2
        </p>
        <p className="modal-text">
          <FaCalendarAlt className="icon" />
          Vendredis (9 semaines)
          <button className="button">Voir les dates</button>
        </p>
        <p className="modal-text">
          <FaEuroSign className="icon" />
          90€ par enfant
        </p>
        <button className="button no-margin">Inscription : Groupe 3</button>
      </div>
    </>
  );
}
