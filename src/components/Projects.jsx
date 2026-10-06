import React, { useState } from "react";
import { projectsData, projectCategories } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Main featured project
  const featuredProject = projectsData.find((p) => p.id === "baloch-export-hub");

  // Filtered projects
  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Featured") return p.featured;
    return p.category === activeCategory;
  });

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Portfolio Showcase</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of production web applications, digital commerce platforms, and tools I've engineered.
          </p>
        </div>

        {/* ================= MAIN FEATURED SPOTLIGHT: BALOCH EXPORT HUB ================= */}
        {featuredProject && (
          <div className="featured-spotlight">
            <div className="featured-spotlight-content">
              <span className="featured-badge-pill">
                <i className="fa-solid fa-star"></i> Flagship / Main Project
              </span>
              <h3 className="featured-spotlight-title">{featuredProject.title}</h3>
              <p className="featured-spotlight-tagline">{featuredProject.tagline}</p>
              <p className="featured-spotlight-desc">{featuredProject.desc}</p>

              <div className="featured-highlights">
                {featuredProject.highlights.map((item, idx) => (
                  <div key={idx} className="featured-highlight-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="featured-tech-row">
                {featuredProject.tech.map((t, idx) => (
                  <span key={idx} className="featured-tech-pill">{t}</span>
                ))}
              </div>

              <div className="featured-actions">
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Platform
                </a>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelectedProject(featuredProject)}
                >
                  <i className="fa-solid fa-circle-info"></i> Project Details
                </button>
              </div>
            </div>

            <div
              className="featured-spotlight-media"
              onClick={() => setSelectedProject(featuredProject)}
              title="Click to view details"
            >
              <div className="featured-browser-frame">
                <div className="project-browser-bar">
                  <div className="browser-dots">
                    <span className="b-dot red"></span>
                    <span className="b-dot yellow"></span>
                    <span className="b-dot green"></span>
                  </div>
                  <span className="browser-url">https://baloch-export-hub.vercel.app</span>
                </div>
                <div className="featured-img-container">
                  <img
                    src={featuredProject.img}
                    alt="Baloch Export Hub - Digital Commerce Platform"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="projects-filter">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`project-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="project-grid" id="projectGrid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
