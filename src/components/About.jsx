import React from "react";

export default function About() {
  const infoItems = [
    { label: "Name", value: "Shams Dev" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Experience", value: "8 Months Experience" },
    { label: "Education", value: "BS — English Language & Literature" },
    { label: "Core Focus", value: "React.js, Node.js & Firebase" },
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
                  Currently building <strong>Baloch Export Hub</strong> &amp; contributing at <strong>BalochDev</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="about-lead">
              Hello, I'm <strong>Shams Dev</strong>, a passionate Full Stack Web &amp; App
              Developer dedicated to engineering modern, responsive, and high-performance
              digital products.
            </p>
            <p>
              I specialize in creating attractive user interfaces, interactive web
              experiences, and scalable backend solutions using modern React.js, Node.js,
              and Firebase. I have developed multiple production-grade projects ranging
              from regional commerce platforms like <strong>Baloch Export Hub</strong> to
              offline management tools and real-time interactive applications.
            </p>
            <p>
              I continuously master contemporary web technologies and strive to build software
              that is elegant, fast, and remarkably user-friendly — code that performs as
              smoothly as it looks.
            </p>

            <div className="about-info-grid">
              {infoItems.map((item, idx) => (
                <div key={idx} className="info-item">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="about-cta-group">
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
      </div>
    </section>
  );
}
