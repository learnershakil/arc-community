// src/components/Modal.js
import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null; // Don't render if show is false

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "black",
    backgroundOpacity: "0.5",
    border: "1px solid gray",
    padding: "20px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "500px",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  },
};

export default Modal;
