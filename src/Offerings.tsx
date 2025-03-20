import "./Offerings.css";
import kids from "./assets/kids-lesson.jpg";
import adults from "./assets/adult-learning.jpg";
import profile from "./assets/profile.jpeg";
import clifton from "./assets/clifton-suspension-houses.jpg";
import online from "./assets/online-lesson.jpg";
import application from "./assets/application.jpg";

export default function Offerings() {
  return (
    <div className="Offerings">
      <div className="offerings-container">
        <div className="card">
          <img src={kids} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Cours en groupe pour enfants</p>
          </div>
        </div>
        <div className="card">
          <img src={adults} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Cours individuels pour adolescents et adultes
            </p>
          </div>
        </div>
        <div className="card">
          <img src={online} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Cours en ligne</p>
          </div>
        </div>
        <div className="card">
          <img src={application} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Application de vocabulaire Brizzle</p>
          </div>
        </div>
        <div className="card">
          <img src={profile} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">À propos de votre professeur</p>
          </div>
        </div>
        <div className="card">
          <img src={clifton} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
