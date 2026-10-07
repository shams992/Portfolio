import React, { useEffect, useRef, useState } from "react";

export default function Hero({ theme }) {
  const canvasRef = useRef(null);
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "React & Node.js Developer",
    "Frontend Engineer",
    "Firebase Specialist",
    "UI/UX Enthusiast"
  ];

  // Role Typewriter Effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setTypedRole(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTypedRole(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Network Canvas Interactive Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;

      const count = Math.min(65, Math.floor((canvas.width * canvas.height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const isLight = theme === "light";
    const lineColor = isLight ? "rgba(84, 119, 146, " : "rgba(111, 227, 201, ";
    const dotColor = isLight ? "rgba(59, 77, 92, 0.45)" : "rgba(148, 180, 193, 0.55)";

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const linkDist = 135;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < linkDist) {
            const alpha = 0.16 * (1 - dist / linkDist);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="network-canvas" id="networkCanvas" />
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container hero-inner">
        <div className="hero-left">
          <p className="hero-eyebrow">
            <span className="dot-live"></span> Available for freelance &amp; collaboration
          </p>

          <h1 className="hero-title">
            Crafting Beautiful<br />
            Digital <span className="text-gradient">Experiences</span><br />
            with Modern Tech.
          </h1>

          <p className="hero-role">
            I'm Shams Dev — <span className="typed-role">{typedRole}</span>
            <span className="typed-cursor">|</span>
          </p>

          <p className="hero-desc">
            Building fast, modern, and reliable digital products with React,
            Node.js, and Firebase.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-diagram-project"></i> View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fa-regular fa-paper-plane"></i> Let's Talk
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/shams992"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/shamsbashir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:shamsu4in@gmail.com"
              aria-label="Send Email"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/923158750992"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Message"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="portrait-frame">
            <img
              src="/images/shms.png"
              alt="Shams Dev — Full Stack Web & App Developer"
              className="portrait-img"
              loading="eager"
            />
            <div className="portrait-badge portrait-badge-top">
              <i className="fa-solid fa-code"></i>
              <div>
                <strong>8+</strong>
                <span>Months Exp.</span>
              </div>
            </div>
            <div className="portrait-badge portrait-badge-bottom">
              <i className="fa-solid fa-bolt"></i>
              <div>
                <strong>6+</strong>
                <span>Projects Shipped</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down to About section">
        <span>Scroll</span>
        <i className="fa-solid fa-chevron-down"></i>
      </a>
    </section>
  );
}
