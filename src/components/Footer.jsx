import React from "react";

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="nav-logo" onClick={handleScrollToTop}>
          Shams<span className="logo-accent">.Dev</span>
        </a>

        <div className="footer-social">
          <a
            href="https://github.com/shams992"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/shamsbashir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:shamsu4in@gmail.com"
            aria-label="Email"
          >
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a
            href="https://wa.me/923158750992"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <p className="footer-copy">
          &copy; 2026 Shams Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
