import "./Offerings.css";
import { Link } from "react-router-dom";
import kids from "./assets/children.jpg";
import adults from "./assets/adult-learning.jpg";
import books from "./assets/child-books.jpg";
import application from "./assets/application.jpg";

export default function Offerings() {
  return (
    <div className="Offerings">
      <h1>Cours d'anglais</h1>
      <h2>
        Inscriptions pour la rentrée 2025 sont désormais ouvertes !<br />{" "}
        <Link to="/kids">En savoir plus.</Link>
      </h2>
      <div className="offerings-container">
        <Link to="/kids" className="card">
          <img src={kids} className="card-img-top" alt="Kids lessons" />
          <div className="card-body">
            <p className="card-text">Enfants</p>
          </div>
        </Link>
        <Link to="/adults" className="card">
          <img src={adults} className="card-img-top" alt="Adult lessons" />
          <div className="card-body">
            <p className="card-text">Adultes</p>
          </div>
        </Link>
      </div>
      <h1>Ressources pour apprendre l'anglais</h1>
      <div className="offerings-container">
        <Link to="/books" className="card">
          <img
            src={books}
            className="card-img-top children-reading"
            alt="Books to buy"
          />
          <div className="card-body">
            <p className="card-text">Livres</p>
          </div>
        </Link>
        <Link to="/application" className="card">
          <img
            src={application}
            className="card-img-top"
            alt="Family using mobile app"
          />
          <div className="card-body">
            <p className="card-text">App</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
