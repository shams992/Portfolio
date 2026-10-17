import React, { useState, useEffect } from "react";
import SDLogo from "./SDLogo";

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 25);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home", icon: "fa-solid fa-house" },
    { label: "About", href: "#about", id: "about", icon: "fa-regular fa-user" },
    { label: "Experience", href: "#experience", id: "experience", icon: "fa-solid fa-briefcase" },
    { label: "Skills", href: "#skills", id: "skills", icon: "fa-solid fa-code" },
    { label: "Projects", href: "#projects", id: "projects", icon: "fa-solid fa-layer-group" },
    { label: "Services", href: "#services", id: "services", icon: "fa-solid fa-cube" },
    { label: "Contact", href: "#contact", id: "contact", icon: "fa-regular fa-paper-plane" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="container nav-container">
          <div className="nav-capsule">
            <a
              href="#home"
              className="nav-brand"
              onClick={(e) => handleLinkClick(e, "#home")}
              aria-label="Shams Dev Home"
            >
              <SDLogo size={36} />
              <div className="brand-text">
                <span className="brand-name">
                  Shams<span className="brand-dot">.Dev</span>
                </span>
                <span className="brand-tagline">
                  <span className="live-pulse"></span>
                  Available
                </span>
              </div>
            </a>

            <nav className="nav-links" id="navLinks" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="nav-active-pill" />}
                  </a>
                );
              })}
            </nav>

            <div className="nav-actions">
              <button
                className="theme-toggle"
                id="themeToggle"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                onClick={toggleTheme}
              >
                <i className={theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
              </button>

              <a
                href="/Shams-Dev-Resume.pdf"
                download="Shams-Dev-Resume.pdf"
                className="btn-nav-action"
                title="Download CV"
              >
                <i className="fa-solid fa-arrow-down-to-line"></i>
                <span className="nav-resume-text">Resume</span>
              </a>

              <button
                className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
                id="hamburger"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop for mobile */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} id="mobileMenu">
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <div className="mobile-brand">
              <SDLogo size={32} />
              <span>Shams.Dev</span>
            </div>
            <span className="mobile-badge">
              <span className="live-pulse"></span> Available
            </span>
          </div>

          <div className="mobile-nav-list">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <i className={link.icon}></i>
                <span>{link.label}</span>
                {activeSection === link.id && <i className="fa-solid fa-check mobile-check"></i>}
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <a
              href="/Shams-Dev-Resume.pdf"
              download="Shams-Dev-Resume.pdf"
              className="btn btn-primary btn-block mobile-resume-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
