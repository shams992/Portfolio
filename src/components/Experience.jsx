import React from "react";

export default function Experience() {
  const timelineItems = [
    {
      title: "Joined BalochDev",
      desc: "Became a contributing member, collaborating with talented engineers across modern frontend architectures and UI systems.",
      active: false
    },
    {
      title: "BalochDev Digital Initiatives",
      desc: "Actively developing responsive web components, localization tools, and Firebase-backed functionality for regional technology platforms.",
      active: false
    },
    {
      title: "Baloch Export Hub & Web Solutions",
      desc: "Architected and delivered the flagship Baloch Export Hub platform to connect regional artisans and cultural exports with global digital markets.",
      active: false
    },
    {
      title: "Ongoing — Working on BalochDev",
      desc: "Continuously creating digital tools, optimizing application performance, and engineering software focused on Balochi culture and business.",
      active: true
    }
  ];

  const responsibilities = [
    { icon: "fa-solid fa-layer-group", title: "Frontend Architecture (React.js)" },
    { icon: "fa-solid fa-server", title: "Backend & APIs (Node.js / Express)" },
    { icon: "fa-solid fa-fire", title: "Firebase & Cloud Firestore" },
    { icon: "fa-solid fa-mobile-screen", title: "Responsive & Accessible UI" },
    { icon: "fa-solid fa-wand-magic-sparkles", title: "UI/UX & Design Systems" },
    { icon: "fa-solid fa-gauge-high", title: "Performance Optimization" }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div id="balochdev" style={{ position: "relative", top: "-100px" }}></div>
      <div className="bd-bg-grid"></div>

      <div className="container">
        <div className="section-head light">
          <span className="section-tag">Where I Contribute</span>
          <h2 className="section-title">
            Experience &amp; <span className="text-gradient">BalochDev</span>
          </h2>
          <p className="section-subtitle">
            8 Months of dedicated full-stack development, shipping production web apps and regional digital products.
          </p>
        </div>

        {/* Organization Card */}
        <div className="bd-org-card">
          <div className="bd-logo" aria-hidden="true">
            BD
          </div>
          <div className="bd-org-card-content">
            <div className="bd-org-card-header">
              <h3>BalochDev</h3>
              <span className="bd-badge-ongoing">
                <span className="dot-live"></span> Working on BalochDev (Ongoing)
              </span>
              <span className="bd-badge-ongoing">
                <i className="fa-solid fa-clock-rotate-left"></i> 8 Months Experience
              </span>
            </div>
            <p>
              I am an active contributing member of BalochDev, focusing on technology,
              digital products, and solutions related to Balochi language, culture, and
              businesses alongside a collaborative team of engineers.
            </p>
          </div>
          <a
            href="https://balochdev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline light"
          >
            Visit Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>

        {/* Content Grid */}
        <div className="bd-content-grid">
          {/* Timeline */}
          <div className="bd-timeline-wrap">
            <h4 className="bd-subhead">
              <i className="fa-solid fa-timeline"></i> Development Journey
            </h4>
            <div className="bd-timeline">
              {timelineItems.map((item, idx) => (
                <div key={idx} className="tl-item">
                  <span className={`tl-dot ${item.active ? "pulse" : ""}`}></span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Responsibilities */}
          <div className="bd-contrib-wrap">
            <h4 className="bd-subhead">
              <i className="fa-solid fa-microchip"></i> Core Responsibilities &amp; Skills
            </h4>
            <div className="bd-cards">
              {responsibilities.map((resp, idx) => (
                <div key={idx} className="bd-card">
                  <i className={resp.icon}></i>
                  <span>{resp.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bd-stats">
          <div className="bd-stat">
            <span className="counter">8</span>
            <p>Months Experience</p>
          </div>
          <div className="bd-stat">
            <span className="counter">6</span>
            <p>Core Responsibility Areas</p>
          </div>
          <div className="bd-stat">
            <span className="counter">100%</span>
            <p>Commitment to Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}
