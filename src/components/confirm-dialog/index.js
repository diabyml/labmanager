import React from "react";

import "./style.scss";

function ConfirmDialog({ title, content, cancelText, confirmText, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="content p-lg shadow-xl radius-lg">Dialog content</div>
    </div>
  );
}

export default ConfirmDialog;
