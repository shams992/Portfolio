import React, { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className={`modal-overlay ${project ? "open" : ""}`}
      id="projectModal"
      onClick={onClose}
    >
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <button
          className="modal-close"
          id="modalClose"
          aria-label="Close modal"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <img
          src={project.img}
          alt={project.title}
          className="modal-img"
        />

        <div className="modal-content">
          <span className="featured-badge-pill" style={{ marginBottom: 12 }}>
            {project.badge || project.category}
          </span>
          <h3 id="modalTitle">{project.title}</h3>
          {project.tagline && (
            <p style={{ color: "var(--c-signal)", fontWeight: 500, marginBottom: 16 }}>
              {project.tagline}
            </p>
          )}

          <p>{project.detailedDesc || project.desc}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-highlights">
              {project.highlights.map((h, i) => (
                <div key={i} className="modal-highlight-item">
                  <i className="fa-solid fa-check"></i>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}

          <div className="modal-tech">
            {project.tech.map((t, idx) => (
              <span key={idx}>{t}</span>
            ))}
          </div>

          <div className="modal-links">
            {project.demo && project.demo !== "#" && (
              <a
                className="btn btn-primary"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Platform
              </a>
            )}
            {project.code && (
              <a
                className="btn btn-outline"
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i> View Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
