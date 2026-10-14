import React from "react";

export default function ProjectCard({ project, onOpenModal }) {
  const hasLiveDemo = Boolean(project.demo && project.demo !== "#");

  const handleCardClick = (e) => {
    if (hasLiveDemo) {
      window.open(project.demo, "_blank", "noopener,noreferrer");
    } else {
      onOpenModal(project);
    }
  };

  return (
    <article
      className="project-card"
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      title={hasLiveDemo ? `Open ${project.title} live website` : `View ${project.title} details`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick(e);
        }
      }}
    >
      <div className="project-media">
        <div className="project-browser-bar">
          <div className="browser-dots">
            <span className="b-dot red"></span>
            <span className="b-dot yellow"></span>
            <span className="b-dot green"></span>
          </div>
          <span className="browser-url">
            {project.urlTag || `${project.id}.app`}
          </span>
        </div>

        <div className="project-img-wrapper">
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
          />
          {project.status ? (
            <span className="project-status-badge">
              <span className="dot-live"></span> {project.status}
            </span>
          ) : (
            <span className="project-status-badge">{project.badge}</span>
          )}

          <div className="project-overlay">
            <button
              type="button"
              className="overlay-btn"
              title="View Details"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(project);
              }}
            >
              <i className="fa-solid fa-expand"></i>
            </button>

            {project.demo && project.demo !== "#" && (
              <a
                className="overlay-btn"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            )}

            {project.code && (
              <a
                className="overlay-btn"
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                title="Source Code"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fa-brands fa-github"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-info">
        <h3>
          {project.title}
          {hasLiveDemo && (
            <i
              className="fa-solid fa-arrow-up-right-from-square"
              style={{
                fontSize: "0.72em",
                marginLeft: "8px",
                opacity: 0.65,
                verticalAlign: "middle"
              }}
              aria-hidden="true"
            />
          )}
        </h3>
        <p>
          {project.desc.length > 95
            ? `${project.desc.slice(0, 95)}...`
            : project.desc}
        </p>

        <div className="project-badges">
          {project.tech.map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
