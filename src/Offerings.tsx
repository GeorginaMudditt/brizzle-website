import "./Offerings.css";
import { Link } from "react-router-dom";
import kids from "./assets/kids-lesson.jpg";
import adults from "./assets/adult-learning.jpg";
import blackboard from "./assets/blackboard.jpg";
import clifton from "./assets/clifton-suspension-houses.jpg";
import online from "./assets/online-lesson.jpg";
import application from "./assets/brizzle-app-screenshot.png";

export default function Offerings() {
  return (
    <div className="Offerings">
      <div className="offerings-container">
        <Link to="/kids" className="card">
          <img src={kids} className="card-img-top" alt="Kids lessons" />
          <div className="card-body">
            <p className="card-text">
              Cours en groupe pour enfants de 6 à 11 ans
            </p>
          </div>
        </Link>
        <Link to="/adults" className="card">
          <img src={adults} className="card-img-top" alt="Adult lessons" />
          <div className="card-body">
            <p className="card-text">Cours individuels pour les plus grands</p>
          </div>
        </Link>
        <Link to="/online" className="card">
          <img src={online} className="card-img-top" alt="Online lessons" />
          <div className="card-body">
            <p className="card-text">Cours en ligne</p>
          </div>
        </Link>
        <Link to="/application" className="card">
          <img
            src={application}
            className="card-img-top"
            alt="Family using mobile app"
          />
          <div className="card-body">
            <p className="card-text">Application de vocabulaire Brizzle</p>
          </div>
        </Link>
        <Link to="/profile" className="card">
          <img
            src={blackboard}
            className="card-img-top"
            alt="Georgina profile picture"
          />
          <div className="card-body">
            <p className="card-text">À propos de votre professeur</p>
          </div>
        </Link>
        <Link to="/faq" className="card">
          <img src={clifton} className="card-img-top" alt="Bristol" />
          <div className="card-body">
            <p className="card-text">FAQ</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
