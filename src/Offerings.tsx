import "./Offerings.css";
import { Link } from "react-router-dom";
import kids from "./assets/kids-lesson.jpg";
import adults from "./assets/adult-learning.jpg";
import online from "./assets/online-lesson.jpg";
import application from "./assets/application.jpg";

export default function Offerings() {
  return (
    <div className="Offerings">
      <h1>Trouver un programme</h1>
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
      </div>
    </div>
  );
}
