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
        <p>Questions and Answers ...</p>
      </div>
    </>
  );
}
