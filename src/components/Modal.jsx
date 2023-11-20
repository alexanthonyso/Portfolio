import React from "react";
import "../styles/components/modal.css";

const Modal = ({ isOpen, onClose, content, title }) => { // Ajout de la prop `content`
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        {title}
        {/* Rendu du contenu dynamique */}
        {content}
      </div>
    </div>
  );
};

export default Modal;
