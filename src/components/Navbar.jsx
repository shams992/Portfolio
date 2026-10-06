import React, { useState, useEffect } from "react";

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Contact", href: "#contact", id: "contact" }
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
        <div className="container nav-inner">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <span className="logo-bracket">&lt;</span>Shams
            <span className="logo-accent">.Bashir</span>
            <span className="logo-bracket">/&gt;</span>
          </a>

          <nav className="nav-links" id="navLinks">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              id="themeToggle"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              <i className={theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
            </button>
            <a
              href="/Shams-Bashir-Resume.pdf"
              download="Shams-Bashir-Resume.pdf"
              className="btn btn-ghost nav-resume"
            >
              <i className="fa-solid fa-arrow-down"></i> Resume
            </a>
            <button
              className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
              id="hamburger"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} id="mobileMenu">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Shams-Bashir-Resume.pdf"
          download="Shams-Bashir-Resume.pdf"
          className="btn btn-primary mobile-resume-btn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <i className="fa-solid fa-arrow-down"></i> Download Resume
        </a>
      </div>
    </>
  );
}
