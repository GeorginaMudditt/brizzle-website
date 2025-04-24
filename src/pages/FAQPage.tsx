import "../Modal.css";
import { useNavigate } from "react-router-dom";

export default function FAQPage() {
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
        <h2>FAQ</h2>
        <p className="question modal-text">
          Où se déroulent les cours d'anglais ?
        </p>
        <p className="answer modal-text">
          Les cours se déroulent chez moi à Carcès. Après votre inscription, je
          vous enverrai l'adresse. Il y a également une option pour des cours en
          ligne via Google Meet.
        </p>
        {/* <p className="question modal-text">
          J'ai un enfant dans le groupe d'âge plus jeune (CP/CE1/CE2).
          Peut-il/elle venir aux cours le mardi et le jeudi ?
        </p>
        <p className="answer modal-text">
          Ce n'est pas recommandé, car les cours seront les mêmes le mardi et le
          jeudi. Si vous souhaitez que votre enfant ait plus de pratique pendant
          la semaine, je serai heureuse de fournir des ressources
          supplémentaires et des devoirs.
        </p> */}
        <p className="question modal-text">
          Dois-je fournir du matériel pour le cours ?
        </p>
        <p className="answer modal-text">
          Non. Tout le matériel nécessaire (par exemple, classeurs, photocopies,
          stylos) est fourni.
        </p>
        <p className="question modal-text">
          Puis-je rester avec mon enfant pendant qu'il/elle suit son cours ?
        </p>
        <p className="answer modal-text">
          Oui, vous êtes le/la bienvenu(e) pour rester avec votre enfant ou
          le/la laisser et revenir le chercher plus tard.
        </p>
        <p className="question modal-text">
          Quels sont les six niveaux de langue selon le CECRL ?
        </p>
        <p className="answer modal-text">
          Les six niveaux de langue sont A1, A2, B1, B2, C1 et C2 (avec A1 étant
          débutant et C2 étant expert). Vous pouvez trouver plus d'informations{" "}
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F34739"
            target="_blank"
            rel="noreferrer"
          >
            ici
          </a>
          .
        </p>
        <p className="question modal-text">
          Comment savoir mon niveau d'anglais ?
        </p>
        <p className="answer modal-text">
          Si vous avez déjà passé un examen d'anglais tel que l'IELTS ou le
          TOEFL, vous connaissez déjà votre niveau d'anglais. Sinon, il existe
          de nombreux tests en ligne gratuits (comme{" "}
          <a
            href="https://www.cambridgeenglish.org/fr/test-your-english/"
            target="_blank"
            rel="noreferrer"
          >
            celui-ci
          </a>
          ) qui peuvent vous donner une idée de votre niveau.
        </p>
        <p className="question modal-text">Pourquoi le nom Brizzle ? </p>
        <p className="answer modal-text">
          Je viens de{" "}
          <a href="https://visitbristol.co.uk" target="_blank" rel="noreferrer">
            Bristol
          </a>
          , dans le sud-ouest de l'Angleterre : une ville affectueusement
          surnommée « Brizzle » par ses habitants, car c'est ainsi que cela se
          prononce avec l'accent local. La ville accueille chaque été le{" "}
          <a
            href="https://www.bristolballoonfiesta.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            Bristol International Balloon Fiesta
          </a>{" "}
          : un événement de trois jours qui célèbre la ville et ses liens
          historiques avec le monde remarquable de la montgolfière. C'est
          pourquoi j'ai choisi une montgolfière comme logo.
        </p>
      </div>
    </>
  );
}
