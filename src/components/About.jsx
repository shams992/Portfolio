import React from "react";

export default function About() {
  const infoItems = [
    { label: "Role", value: "Full Stack Developer" },
    { label: "Experience", value: "8 Months" },
    { label: "Core Focus", value: "React, Node.js & Firebase" },
    { label: "Status", value: "Available for Projects" }
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-visual">
            <div className="about-img-wrap">
              <img
                src="/images/balochdev-simple.jpg"
                alt="Modern developer workspace and clean code"
                loading="lazy"
              />
              <div className="about-img-card">
                <i className="fa-solid fa-mug-hot"></i>
                <p>
                  Building <strong>Baloch Export Hub</strong> &amp; contributing at <strong>BalochDev</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="about-lead">
              Building modern web experiences with clean code and thoughtful design.
            </p>
            <p>
              Full Stack Web &amp; App Developer focused on high-performance digital products,
              specializing in React.js, Node.js, and Firebase. I build fast, responsive interfaces
              backed by scalable architectures.
            </p>
            <p>
              Active contributor at <strong>BalochDev</strong> and engineer behind <strong>Baloch Export Hub</strong>,
              delivering production-ready solutions for commerce and regional technology.
            </p>

            <div className="about-info-grid">
              {infoItems.map((item, idx) => (
                <div key={idx} className="info-item">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="about-action-row">
              <a href="#projects" className="btn btn-primary">
                <i className="fa-solid fa-diagram-project"></i> View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fa-regular fa-paper-plane"></i> Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
