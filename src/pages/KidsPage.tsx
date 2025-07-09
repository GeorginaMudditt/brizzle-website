import "../Modal.css";
import { useNavigate } from "react-router-dom";
import { FaChild } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
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
        {/* <h3>Inscriptions ouvertes : L’Été avec Brizzle</h3>
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
        <p className="modal-text kids-text">
          <TiStopwatch className="icon" />
          Inscriptions ouvertes jusqu’au 8 juillet 2025
        </p>
        <p className="modal-text kids-text">
          <TbHexagonNumber1 className="icon" />
          Étape 1 : Consultez les informations ci-dessous – et n’hésitez pas à
          m’écrire par e-mail si vous avez des questions.
        </p>
        <p className="modal-text kids-text">
          <TbHexagonNumber2 className="icon" />
          Étape 2 : Inscrivez votre enfant en cliquant sur le lien ci-dessous.
          Si vous inscrivez plusieurs enfants, merci de remplir un formulaire
          différent pour chaque enfant.
        </p>
        <p className="modal-text kids-text">
          <TbHexagonNumber3 className="icon" />
          Étape 3 : Vous recevrez un e-mail de confirmation peu après
          l’inscription, puis votre facture vous sera envoyée après le 8
          juillet.
        </p>
        <a
          href="https://ulrwcortyhassmytkcij.supabase.co/storage/v1/object/public/brizzle-logos//summer-flyer.png"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button">En savoir plus</button>
        </a>
        <a href="https://tally.so/r/m69kKJ" target="_blank" rel="noreferrer">
          <button className="button no-margin">S'inscrire</button>
        </a> */}
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

        <h3>À venir : Nouvelles classes pour la rentrée</h3>
        <h4>Cours en groupe pour les enfants de 4 à 11 ans</h4>
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
          Jeudis 16h45 à 17h45 (École Petit Bois, Carcès): CP à CE2
        </p>
        <p className="modal-text kids-text">
          <FaCalendarAlt className="icon" />
          Vendredis 16h45 à 17h45 : CE2 à CM2
        </p>
        <p className="modal-text kids-text">
          <FaChalkboardTeacher className="icon" />
          13 ou 14 semaines de cours, de septembre à décembre 2025
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
