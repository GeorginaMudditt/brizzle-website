import "../Modal.css";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
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
        <h2>À propos de votre professeur</h2>
        <p>Details about Georgina ...</p>
      </div>
    </>
  );
}
