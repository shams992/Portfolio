import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="nav-logo" onClick={handleScrollToTop}>
          <span className="logo-bracket">&lt;</span>Shams
          <span className="logo-accent">.Bashir</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <p>Built with React.js, Vite &amp; Firebase • Engineered for Performance.</p>

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
          &copy; {currentYear} Shams Bashir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
