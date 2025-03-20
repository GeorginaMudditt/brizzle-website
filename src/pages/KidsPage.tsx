import "../Modal.css";
import { useNavigate } from "react-router-dom";

export default function KidsPage() {
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
        <h2>Cours en groupe pour enfants de 6 à 11 ans</h2>
        <p>Details about kids' lessons ...</p>
      </div>
    </>
  );
}
