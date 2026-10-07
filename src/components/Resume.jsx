import React, { useState } from "react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("all");

  const experiences = [
    {
      role: "Contributing Software Engineer",
      company: "BalochDev",
      period: "2024 — Present",
      status: "Ongoing",
      type: "Full-Stack Development",
      location: "Remote / Balochistan",
      description:
        "Active contributing engineer developing modern web applications, localization tools, and digital commerce platforms for Balochi cultural heritage and regional enterprise.",
      highlights: [
        "Architected and deployed Baloch Export Hub — an international digital showcase connecting regional artisans with global markets.",
        "Engineered scalable React.js frontend interfaces paired with Supabase PostgreSQL and secure authentication.",
        "Designed reusable, responsive component systems ensuring cross-browser performance and fluid mobile experiences."
      ],
      tech: ["React.js", "Tailwind CSS", "Supabase", "JavaScript (ES6+)", "REST APIs"]
    },
    {
      role: "Full Stack Web Developer",
      company: "Freelance & Independent Projects",
      period: "2024 — Present",
      status: "Active",
      type: "Client Solutions",
      location: "Remote",
      description:
        "Designing, engineering, and launching production-ready web applications, productivity software, and custom business portals.",
      highlights: [
        "Engineered MaintainIQ — an AI-assisted asset and QR maintenance platform with real-time Firestore database synchronization.",
        "Built Offline Tailor Management system — a local-first management system eliminating paper logbooks with zero-latency storage.",
        "Shipped interactive e-commerce shopping experiences (LuxWatches) with dynamic filtering and checkout flows."
      ],
      tech: ["Node.js", "Express.js", "Firebase", "Cloud Firestore", "Bootstrap 5", "Vite"]
    }
  ];

  const educations = [
    {
      degree: "Bachelor of Science (BS) — English Language & Literature",
      institution: "University Level Studies",
      period: "Undergraduate Program",
      badge: "Academic Degree",
      description:
        "Comprehensive academic training in linguistic analysis, structured communication, critical thinking, and advanced technical writing — instrumental in architecting clear software documentation and collaborating effectively."
    },
    {
      degree: "Full Stack Software Engineering & Web Architecture",
      institution: "Autonomous Engineering & Project Mastery",
      period: "2024 — Continuous",
      badge: "Software Engineering",
      description:
        "Intensive, hands-on engineering track mastering modern JavaScript/TypeScript, React ecosystem, Node.js backend systems, relational & NoSQL databases (Supabase, Firebase, MongoDB), and cloud deployment."
    },
    {
      degree: "BalochDev Community & Tech Apprenticeship",
      institution: "BalochDev Open Engineering",
      period: "Ongoing Collaboration",
      badge: "Professional Mentorship",
      description:
        "Active peer programming, code reviews, and architectural problem-solving alongside skilled software engineers building regional digital infrastructure."
    }
  ];

  const skillGroups = [
    {
      category: "Frontend Engineering",
      icon: "fa-solid fa-code",
      skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "Bootstrap 5", "Responsive UI"]
    },
    {
      category: "Backend & APIs",
      icon: "fa-solid fa-server",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Middleware Design", "JSON Schema", "HTTP Protocols"]
    },
    {
      category: "Cloud & Databases",
      icon: "fa-solid fa-database",
      skills: ["Supabase (PostgreSQL)", "Cloud Firestore", "Firebase Auth", "Firebase Storage", "MongoDB"]
    },
    {
      category: "Tools & Workflows",
      icon: "fa-solid fa-wrench",
      skills: ["Git & Version Control", "GitHub", "Vite Bundler", "VS Code & Cursor AI", "Performance Auditing"]
    }
  ];

  return (
    <section className="section resume-section" id="resume">
      <div id="experience" style={{ position: "relative", top: "-100px" }}></div>
      <div className="resume-bg-glow"></div>

      <div className="container">
        <div className="section-head light">
          <span className="section-tag">Curriculum Vitae</span>
          <h2 className="section-title">
            Resume &amp; <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional software engineering track record, educational foundation, and core technical proficiencies.
          </p>

          <div className="resume-head-actions">
            <a
              href="/Shams-Dev-Resume.pdf"
              download="Shams-Dev-Resume.pdf"
              className="btn btn-primary"
            >
              <i className="fa-solid fa-download"></i> Download CV
            </a>
            <a
              href="/Shams-Dev-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i> View Resume
            </a>
          </div>
        </div>

        {/* Tab Controls for Filtering Modules */}
        <div className="resume-nav-tabs">
          <button
            className={`resume-tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <i className="fa-solid fa-list-check"></i> Complete CV
          </button>
          <button
            className={`resume-tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            <i className="fa-solid fa-briefcase"></i> Experience
          </button>
          <button
            className={`resume-tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <i className="fa-solid fa-graduation-cap"></i> Education
          </button>
          <button
            className={`resume-tab-btn ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            <i className="fa-solid fa-microchip"></i> Core Competencies
          </button>
        </div>

        {/* Layout Grid */}
        <div className="resume-grid-layout">
          {/* EXPERIENCE SECTION */}
          {(activeTab === "all" || activeTab === "experience") && (
            <div className="resume-module">
              <div className="resume-module-header">
                <div className="resume-module-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div>
                  <h3 className="resume-module-title">Work Experience</h3>
                  <p className="resume-module-subtitle">Production engineering &amp; real-world software shipping</p>
                </div>
              </div>

              <div className="resume-timeline">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="resume-timeline-card">
                    <div className="resume-card-top">
                      <div>
                        <div className="resume-badge-row">
                          <span className="resume-type-badge">{exp.type}</span>
                          <span className="resume-status-badge">
                            <span className="dot-live"></span> {exp.status}
                          </span>
                        </div>
                        <h4 className="resume-role-title">{exp.role}</h4>
                        <div className="resume-company-meta">
                          <strong className="resume-company-name">{exp.company}</strong>
                          <span className="resume-meta-divider">•</span>
                          <span className="resume-period">
                            <i className="fa-regular fa-calendar"></i> {exp.period}
                          </span>
                          <span className="resume-meta-divider">•</span>
                          <span className="resume-location">
                            <i className="fa-solid fa-location-dot"></i> {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="resume-card-desc">{exp.description}</p>

                    <div className="resume-highlights">
                      <strong>Key Achievements &amp; Responsibilities:</strong>
                      <ul>
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx}>
                            <i className="fa-solid fa-check"></i>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="resume-tech-pills">
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="resume-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION SECTION */}
          {(activeTab === "all" || activeTab === "education") && (
            <div className="resume-module">
              <div className="resume-module-header">
                <div className="resume-module-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <h3 className="resume-module-title">Education &amp; Credentials</h3>
                  <p className="resume-module-subtitle">Academic degree &amp; specialized software training</p>
                </div>
              </div>

              <div className="education-cards-grid">
                {educations.map((edu, idx) => (
                  <div key={idx} className="education-card">
                    <div className="edu-card-top">
                      <span className="edu-badge">{edu.badge}</span>
                      <span className="edu-period">
                        <i className="fa-regular fa-clock"></i> {edu.period}
                      </span>
                    </div>
                    <h4 className="edu-title">{edu.degree}</h4>
                    <p className="edu-institution">
                      <i className="fa-solid fa-building-columns"></i> {edu.institution}
                    </p>
                    <p className="edu-desc">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CORE SKILLS & TECHNOLOGIES */}
          {(activeTab === "all" || activeTab === "skills") && (
            <div className="resume-module">
              <div className="resume-module-header">
                <div className="resume-module-icon">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <div>
                  <h3 className="resume-module-title">Core Skills &amp; Technologies</h3>
                  <p className="resume-module-subtitle">Key engineering competencies categorized by stack</p>
                </div>
              </div>

              <div className="core-skills-matrix">
                {skillGroups.map((group, idx) => (
                  <div key={idx} className="skill-matrix-card">
                    <div className="skill-matrix-head">
                      <i className={group.icon}></i>
                      <h4>{group.category}</h4>
                    </div>
                    <div className="skill-matrix-tags">
                      {group.skills.map((s, sIdx) => (
                        <span key={sIdx} className="matrix-tag">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Highlighted Resume Action Banner */}
        <div className="resume-cta-banner">
          <div className="resume-cta-content">
            <div className="resume-cta-icon">
              <i className="fa-solid fa-file-invoice"></i>
            </div>
            <div>
              <h3>Looking for an energetic Full-Stack Engineer?</h3>
              <p>
                Download my complete curriculum vitae or view it online to inspect my project background and capabilities.
              </p>
            </div>
          </div>
          <div className="resume-cta-buttons">
            <a
              href="/Shams-Dev-Resume.pdf"
              download="Shams-Dev-Resume.pdf"
              className="btn btn-primary"
            >
              <i className="fa-solid fa-download"></i> Download CV
            </a>
            <a
              href="/Shams-Dev-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fa-solid fa-file-pdf"></i> View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
