import "../Modal.css";
import { useNavigate } from "react-router-dom";
import { FaChild } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
// import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import Planning1 from "../assets/planning-rentree-final.png";
import Planning2 from "../assets/Planning-Sept-Dec-2025.png";
// import { TiStopwatch } from "react-icons/ti";
// import { TbHexagonNumber1 } from "react-icons/tb";
// import { TbHexagonNumber2 } from "react-icons/tb";
// import { TbHexagonNumber3 } from "react-icons/tb";

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

        <h3>Stage d'anglais : Automne avec Brizzle</h3>
        <h4>
          Un programme d'anglais intensif d'une semaine pendant les vacances de
          la Toussaint
        </h4>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Lundi 27 octobre - vendredi 31 octobre 2025
        </p>
        <p className="modal-text kids-text">
          <FaRegClock className="icon" />
          9h45 - 16h15
        </p>
        <p className="modal-text kids-text">
          <FaChild className="icon" />6 - 11 ans
        </p>
        <p className="modal-text kids-text">
          <FaLocationDot className="icon" />
          Chemin Notre Dame, 83570 Carcès
        </p>
        <p className="modal-text kids-text">
          <FaEuroSign className="icon" />
          200 € par enfant pour la semaine (repas non inclus)
        </p>
        <p>
          Pour inscrire votre enfant, il vous suffit de{" "}
          <a href="https://tally.so/r/wMx24g" target="_blank" rel="noreferrer">
            remplir ce formulaire
          </a>
          . Votre réservation sera confirmée par email, puis votre facture vous
          sera envoyée plus tard (mi-octobre).
        </p>
        <p>
          Si vous souhaitez des informations supplémentaires, veuillez{" "}
          <a href="mailto:hello@brizzle-english.com?subject=Demande d'informations sur le stage d'anglais de la Toussaint">
            m'envoyer un email.
          </a>
        </p>

        <h3>Cours collectifs : Septembre à Decembre 2025</h3>
        <h4>Cours en groupe pour les enfants de 4 à 11 ans</h4>
        <p>
          Les inscriptions pour ces cours sont maintenant fermées. Veuillez{" "}
          <a href="mailto:hello@brizzle-english.com?subject=Demande d'informations sur les nouvelles classes pour janvier 2026">
            me contacter
          </a>{" "}
          si vous souhaitez exprimer votre intérêt pour les cours commençant en
          janvier 2026.
        </p>
        <img
          src={Planning1}
          alt="Planning des cours enfants"
          className="planning-image"
        />
        <img
          src={Planning2}
          alt="Planning des cours enfants"
          className="planning-image"
        />
        {/* <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Mardis 16h45 à 17h45 (École Petit Bois, Carcès) : CP à CE2 (COMPLET)
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Mercredis 9h15 à 10h15 (Oustaou Per Touti, Carcès) : MS & GS
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Mercredis 10h30 à 11h30 (Oustaou Per Touti, Carcès): CP à CM2 (pour
          les enfants non scolarisés à Carcès)
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Jeudis 16h45 à 17h45 (École Petit Bois, Carcès): CP à CE2 (COMPLET)
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Vendredis 16h45 à 17h45 (École Petit Bois, Carcès) : CE2 à CM2
        </p>
        <p className="modal-text kids-text">
          <FaChalkboardTeacher className="icon" />
          12 ou 13 semaines de cours, de septembre à décembre 2025
        </p>
        <p className="modal-text kids-text">
          <FaEuroSign className="icon" />
          120 € pour 12 semaines, 130 € pour 13 semaines
        </p>
        <p>
          Pour inscrire votre enfant, il vous suffit de{" "}
          <a href="https://tally.so/r/wdJZ2o" target="_blank" rel="noreferrer">
            remplir ce formulaire
          </a>
          . Votre réservation sera confirmée par email, puis votre facture vous
          sera envoyée plus tard (mi-septembre).
        </p>
        <p>
          Si vous souhaitez des informations supplémentaires, veuillez{" "}
          <a href="mailto:hello@brizzle-english.com?subject=Demande d'informations sur les nouvelles classes pour la rentrée">
            m'envoyer un email.
          </a>
        </p> */}

        {/* <h3>Cours particuliers</h3>
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
        </p> */}
      </div>
    </div>
  );
}
