import React from "react";
import { servicesData } from "../data/services";

export default function Services() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">How I Can Help</span>
          <h2 className="section-title">
            Services I <span className="text-gradient">Offer</span>
          </h2>
          <p className="section-subtitle">
            Delivering modern web engineering solutions tailored to business goals, performance, and user satisfaction.
          </p>
        </div>

        <div className="services-grid" id="servicesGrid">
          {servicesData.map((s, idx) => (
            <div
              key={idx}
              className="service-card"
              onMouseMove={handleMouseMove}
            >
              <div className="service-icon">
                <i className={s.icon}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
