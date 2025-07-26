import "../Modal.css";
import { useNavigate } from "react-router-dom";
import bookCover from "../assets/book-cover.png";

export default function BooksPage() {
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
        <h2>Livres : "Tilio and Theo"</h2>
        <img
          src={bookCover}
          className="app-pic"
          alt="Screenshot of book cover"
        />
        <p className="modal-text">
          Excellente nouvelle : le premier tome de ma série de livres pour
          enfants arrive bientôt !
        </p>
        <p className="modal-text">
          Rejoignez Tilio, un jeune garçon français de Carcès, dans ses
          aventures avec son nouvel ami anglais Theo.
        </p>
        <p className="modal-text">
          Écrit principalement en anglais avec quelques dialogues en français,
          ce livre présente un vocabulaire et une grammaire anglais simples de
          niveau A1/A2 débutant, accompagnés d'images attrayantes, ce qui le
          rend parfait pour les enfants de 6 ans et plus (et leurs parents !)
          pour apprendre l'anglais.
        </p>
        <p className="modal-text">
          Si vous n'êtes pas à l'aise pour lire à votre enfant en anglais, ou si
          vous voulez simplement vérifier la prononciation de certains mots, il
          existe également une version audio du livre - il suffit de scanner le
          code QR à l'intérieur de la couverture du livre.
        </p>
        <p className="modal-text">
          Au prix de seulement 10 euros, "Book 1 : The dream" sera disponible en
          septembre 2025. Précommandez votre exemplaire en{" "}
          <a href="mailto:hello@brizzle-english.com?subject=Précommander le livre 1 de Tilio and Theo">
            m'envoyant un email
          </a>
          .
        </p>
      </div>
    </>
  );
}
