import React, { useState, useEffect, useRef } from "react";
import { skillCategories, skillsData, terminalLines } from "../data/skills";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [terminalText, setTerminalText] = useState("");
  const terminalRef = useRef(null);
  const hasTypedRef = useRef(false);

  // Filter skills based on selected category tab
  const filteredSkills = selectedCategory === "all"
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  // Interactive Terminal Typing Effect
  useEffect(() => {
    const el = terminalRef.current;
    if (!el || hasTypedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTypedRef.current) {
          hasTypedRef.current = true;
          let lineIdx = 0;
          let charIdx = 0;

          function typeNext() {
            if (lineIdx >= terminalLines.length) return;
            const currentLine = terminalLines[lineIdx];

            setTerminalText(
              terminalLines.slice(0, lineIdx).join("\n") +
              (lineIdx > 0 ? "\n" : "") +
              currentLine.slice(0, charIdx)
            );

            if (charIdx < currentLine.length) {
              charIdx++;
              setTimeout(typeNext, 20);
            } else {
              lineIdx++;
              charIdx = 0;
              setTimeout(typeNext, 220);
            }
          }

          typeNext();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Technical Proficiency</span>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Modern full-stack technologies I use to build performant, accessible, and scalable web applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-controls">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Redesigned Skill Cards Grid */}
        <div className="skills-cards-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  <i className={skill.icon}></i>
                </div>
                <span className="skill-badge">{skill.badge}</span>
              </div>

              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>

              <div className="skill-card-bottom">
                <div className="skill-level-row">
                  <span>{skill.level}</span>
                  <strong>{skill.percent}%</strong>
                </div>
                <div className="skill-progress-bar">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Terminal Box */}
        <div className="terminal-wrapper" ref={terminalRef}>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">shams@balochdev: ~/portfolio-stack</span>
            </div>
            <pre className="terminal-body">
              {terminalText}
              <span className="terminal-cursor"></span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
