import React from "react";

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className={`toast ${toast.show ? "show" : ""}`} id="toast" role="alert">
      <i className={toast.icon || "fa-solid fa-circle-check"}></i>
      <span>{toast.message}</span>
    </div>
  );
}
