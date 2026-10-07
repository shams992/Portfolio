import React from "react";

export default function Experience() {
  const experiences = [
    {
      icon: "fa-brands fa-react",
      role: "Frontend Developer",
      meta: "Balochistan, Pakistan • 8 Months",
      desc: "Built responsive web interfaces using React, JavaScript and modern UI tools."
    },
    {
      icon: "fa-solid fa-laptop-code",
      role: "Freelance Web Developer",
      meta: "2023 — Present",
      desc: "Building websites and web applications for businesses and organizations."
    },
    {
      icon: "fa-solid fa-layer-group",
      role: "BalochDev",
      meta: "Working • Ongoing",
      desc: "Working on modern web, digital tools, and cultural products like Baloch Export Hub."
    }
  ];

  const educations = [
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Intermediate",
      year: "2020",
      desc: "Higher secondary education in science and pre-engineering."
    },
    {
      icon: "fa-solid fa-graduation-cap",
      title: "BS English Language & Literature",
      year: "2025",
      desc: "University undergraduate degree focusing on linguistic analysis and communication."
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Web & App Development",
      year: "2026",
      desc: "Full stack software engineering specialization and modern web architecture."
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Career &amp; Learning</span>
          <h2 className="section-title">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">
            A concise overview of my professional development track and academic foundation.
          </p>
        </div>

        <div className="exp-edu-grid">
          {/* Experience Column */}
          <div className="exp-edu-col">
            <div className="exp-col-header">
              <div className="exp-col-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3 className="exp-col-title">Experience</h3>
            </div>

            <div className="exp-cards-list">
              {experiences.map((item, idx) => (
                <div key={idx} className="exp-card">
                  <div className="exp-card-header">
                    <div className="exp-card-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="exp-card-titles">
                      <h4 className="exp-card-role">{item.role}</h4>
                      <span className="exp-card-meta">{item.meta}</span>
                    </div>
                  </div>
                  <p className="exp-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="exp-edu-col">
            <div className="exp-col-header">
              <div className="exp-col-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="exp-col-title">Education</h3>
            </div>

            <div className="exp-cards-list">
              {educations.map((item, idx) => (
                <div key={idx} className="exp-card">
                  <div className="exp-card-header">
                    <div className="exp-card-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="exp-card-titles">
                      <h4 className="exp-card-role">{item.title}</h4>
                      <span className="exp-card-meta">{item.year}</span>
                    </div>
                  </div>
                  <p className="exp-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
