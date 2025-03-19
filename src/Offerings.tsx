import "./Offerings.css";
import georgina from "./assets/profile.jpeg";

export default function Offerings() {
  return (
    <div className="Offerings">
      <h2>Présentation</h2>
      <div className="offerings-container">
        <div class-name="georgina-image">
          <img
            className="georgina-pic"
            src={georgina}
            alt="Georgina profile picture"
          />
        </div>
        <p className="georgina-intro">
          Mon nom est Georgina et je suis une locutrice native anglaise
          originaire de Bristol, dans le sud-ouest de l'Angleterre. Je vis à
          Carcès, dans la région du Var en France, depuis 2020 avec mon mari
          français et nos deux enfants.
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
          <br />À mes débuts en France, je travaillais à distance pour une
          équipe chargée de produire du matériel d’évaluation en anglais.
          Lorsque j'ai été licenciée pour raisons économiques, j’ai eu
          l'opportunité d'effectuer une reconversion professionnelle et de me
          former en tant que développeuse front-end.
          <br />
          <br />
          Je combine désormais ces deux aspects – ma vaste expérience en
          enseignement et ma nouvelle passion pour la technologie – dans un
          projet ambitieux visant à développer une application de vocabulaire en
          anglais ainsi qu’un cours en ligne destiné aux apprenants français.
          J’espère que les six niveaux de l’application (A1-C2) seront prêts
          d’ici fin 2025 et que les six niveaux du cours en ligne seront
          finalisés d’ici fin 2026.
          <br />
          <br />
          En attendant, je propose également des cours d’anglais en présentiel
          pour les enfants, adolescents et adultes à Carcès.
        </p>
      </div>
    </div>
  );
}
