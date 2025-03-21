import "../Modal.css";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpeg";

export default function ProfilePage() {
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
        <h2>À propos de votre professeur</h2>
        <img
          src={profile}
          className="profile-pic"
          alt="Georgina, your teacher"
        />
        <p className="modal-text">
          Je m'appelle Georgina et je suis une native anglaise originaire de
          Bristol, dans le sud-ouest de l'Angleterre. J'habite à Carcès, dans la
          région du Var en France, depuis 2020 avec mon mari français et nos
          deux enfants.
          <br />
          <br />
          Je suis enseignante diplômée d'ESOL (English to Speakers of Other
          Languages) depuis 2008 et j'ai plus de 10 ans d'expérience en classe,
          enseignant l'anglais à des enfants, adolescents et adultes de diverses
          nationalités en Australie et au Royaume-Uni. Je possède une
          certification CELTA (Certificate in English Language Teaching to
          Adults) obtenue au Milner College à Perth, en Australie, ainsi qu'une
          licence en français et en écriture de l'Edith Cowan University,
          également à Perth.
          <br />
          <br />
          Je suis passionnée par l'enseignement de l'anglais et j'aime rendre
          les leçons captivantes, interactives et pertinentes. Je suis flexible
          et m'adapte aux besoins des élèves, je communique clairement leurs
          progrès et je suis patiente et supportive, permettant aux apprenants
          de développer leurs compétences confortablement et à leur propre
          rythme.
        </p>
      </div>
    </>
  );
}
