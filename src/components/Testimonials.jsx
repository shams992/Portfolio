import React from "react";
import { testimonialsData } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Kind Words</span>
          <h2 className="section-title">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            Feedback from founders, engineering leads, and teams I've collaborated with.
          </p>
        </div>

        <div className="testi-grid">
          {testimonialsData.map((item, idx) => (
            <div key={idx} className="testi-card">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p>"{item.quote}"</p>
              <div className="testi-author">
                <img
                  src={item.avatar}
                  alt={item.author}
                  loading="lazy"
                />
                <div>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
