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
          Excellente nouvelle : Le premier de ma série de livres "Tilio & Theo"
          est maintenant disponible à l'achat !
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
          À seulement 9,99 € (plus 1,50 € de livraison vers la France
          métropolitaine), commandez votre exemplaire dès maintenant.
        </p>
        <a
          href="https://buy.stripe.com/4gMeV61gadKH4RCca8dQQ00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button-middle">Achetez Book 1</button>
        </a>
      </div>
    </>
  );
}
