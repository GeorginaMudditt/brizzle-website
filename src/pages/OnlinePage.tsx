import "../Modal.css";
import { useNavigate } from "react-router-dom";

export default function OnlinePage() {
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
        <h2>Cours en ligne</h2>
        <p>Details about online lessons ...</p>
      </div>
    </>
  );
}
