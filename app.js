// ============================================================
// Shams Bashir Portfolio — core interactions
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------------- Preloader ---------------- */
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("hidden"), 400);
  });
  // Fallback in case the load event already fired
  setTimeout(() => preloader.classList.add("hidden"), 2500);

  /* ---------------- Navbar scroll state ---------------- */
  const navbar = document.getElementById("navbar");
  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");
  const navLinks = document.querySelectorAll("[data-nav]");
  const sections = document.querySelectorAll("section[id]");

  function onScroll() {
    const scrollY = window.scrollY;
    navbar.classList.toggle("scrolled", scrollY > 40);
    backToTop.classList.toggle("visible", scrollY > 500);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;

    let current = "home";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 140;
      if (scrollY >= top) current = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------------- Mobile menu ---------------- */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    })
  );

  /* ---------------- Theme toggle ---------------- */
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");
  const savedTheme = localStorage.getItem("sb-theme");
  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeIcon.className = "fa-solid fa-sun";
  }
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      themeIcon.className = "fa-solid fa-moon";
      localStorage.setItem("sb-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeIcon.className = "fa-solid fa-sun";
      localStorage.setItem("sb-theme", "light");
    }
  });

  /* ---------------- Cursor glow ---------------- */
  const cursorGlow = document.getElementById("cursorGlow");
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  if (!isTouch) {
    window.addEventListener("mousemove", (e) => {
      cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  } else {
    cursorGlow.style.display = "none";
  }

  /* ---------------- Typed role text ---------------- */
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Firebase Developer",
    "JavaScript Developer",
    "UI/UX Enthusiast",
    "Web Designer"
  ];
  const typedEl = document.getElementById("typedRole");
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();

  /* ---------------- Terminal typing effect ---------------- */
  const terminalLines = [
    "$ whoami",
    "shams_bashir — full stack developer",
    "",
    "$ cat stack.json",
    "{",
    '  "frontend": ["JavaScript", "Bootstrap 5", "CSS Grid"],',
    '  "backend": ["Firebase Auth", "Firestore", "REST APIs"],',
    '  "current": "Soroz AI @ BalochDev"',
    "}",
    "",
    "$ status --check",
    "✓ Build passing  ✓ UI polished  ✓ Ready to ship"
  ];
  const terminalBody = document.getElementById("terminalBody");
  if (terminalBody) {
    let lineIdx = 0, charIdx = 0;
    function typeTerminal() {
      if (lineIdx >= terminalLines.length) return;
      const line = terminalLines[lineIdx];
      terminalBody.textContent = terminalLines.slice(0, lineIdx).join("\n") + (lineIdx > 0 ? "\n" : "") + line.slice(0, charIdx);
      if (charIdx < line.length) {
        charIdx++;
        setTimeout(typeTerminal, 18);
      } else {
        lineIdx++;
        charIdx = 0;
        setTimeout(typeTerminal, 220);
      }
    }
    const terminalObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeTerminal();
          terminalObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    terminalObserver.observe(terminalBody);
  }

  /* ---------------- Projects data + render ---------------- */
  const projects = [
    {
      title: "Shams Luxury Watches",
      desc: "A luxury watch showcase website with an elegant, editorial UI designed to make every timepiece feel premium — refined typography, generous whitespace and cinematic product photography.",
      img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript"],
      demo: "#", code: "#"
    },
    {
      title: "LuxWatches",
      desc: "A premium watch e-commerce experience with a responsive shopping flow — product filtering, cart interactions and a checkout journey built for conversion.",
      img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop",
      tech: ["JavaScript", "Bootstrap 5", "Firebase"],
      demo: "#", code: "#"
    },
    {
      title: "MaintainIQ – AI Maintenance Management Platform",
      desc: "An AI-powered maintenance and asset management platform that gives every asset a digital identity through QR codes. Features issue reporting, maintenance history, Firebase authentication, real-time database, and an interactive admin dashboard.",
      img: "./images/maintainiq.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Firestore", "QR Code"],
      demo: "https://shams992.github.io/MaintainIQ/", code: "https://github.com/Shams992/MaintainIQ"
    },
    {
      title: "Quiz App",
      desc: "An interactive quiz application with a login system, category selection, countdown timer, live leaderboard and score tracking, all backed by a Firebase database.",
      img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1000&auto=format&fit=crop",
      tech: ["Firebase", "JavaScript", "Auth"],
      demo: "https://shams992.github.io/Quiz_app/index.html", code: "https://github.com/Shams992/Quiz_app"
    },
    {
      title: "Helplytics AI",
      desc: "An AI-powered community support platform connecting people with the help and resources they need, with a clean, accessible interface.",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
      tech: ["JavaScript", "Firebase", "AI Integration"],
      demo: "https://shams992.github.io/Helplytics-AI/", code: "https://github.com/Shams992/Helplytics-AI"
    },
    {
      title: "Soroz AI",
      desc: "My current contribution project under BalochDev — building frontend features, UI/UX improvements and Firebase-backed functionality for an AI-driven platform.",
      img: "./images/sorozaiii.png",
      tech: ["JavaScript", "Firebase", "UI/UX"],
      demo: "https://zahirok-ai-frontend-bwhlov9xg-jaberb281-arts-projects.vercel.app/dashboard", code: "#"
    }
  ];

  const projectGrid = document.getElementById("projectGrid");
  projectGrid.innerHTML = projects.map((p, i) => `
    <article class="project-card" data-index="${i}" style="animation-delay:${i * 80}ms">
      <div class="project-media">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="project-overlay">
          <span class="overlay-btn open-modal" data-index="${i}" aria-label="View details"><i class="fa-solid fa-expand"></i></span>
          <a class="overlay-btn" href="${p.demo}" target="_blank" rel="noopener" aria-label="Live demo" onclick="event.stopPropagation()"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          <a class="overlay-btn" href="${p.code}" target="_blank" rel="noopener" aria-label="GitHub" onclick="event.stopPropagation()"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.desc.slice(0, 78)}${p.desc.length > 78 ? "…" : ""}</p>
        <div class="project-badges">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");

  /* ---------------- Project modal ---------------- */
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalTech = document.getElementById("modalTech");
  const modalLinks = document.getElementById("modalLinks");
  const modalClose = document.getElementById("modalClose");

  function openModal(i) {
    const p = projects[i];
    modalImg.src = p.img;
    modalImg.alt = p.title;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modalTech.innerHTML = p.tech.map((t) => `<span>${t}</span>`).join("");
    modalLinks.innerHTML = `
      <a class="btn btn-primary" href="${p.demo}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
      <a class="btn btn-outline" href="${p.code}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> View Code</a>
    `;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
  projectGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return;
    if (e.target.closest("a")) return;
    openModal(Number(card.dataset.index));
  });
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  /* ---------------- Services data + render ---------------- */
  const services = [
    { icon: "fa-solid fa-code", title: "Full Stack Development", desc: "End-to-end web applications — from responsive UI to a scalable Firebase-powered backend." },
    { icon: "fa-solid fa-display", title: "Frontend Development", desc: "Pixel-perfect, accessible interfaces built with modern JavaScript, HTML5 and CSS3." },
    { icon: "fa-solid fa-server", title: "Backend Development", desc: "Reliable data models, authentication flows and REST integrations that scale with your product." },
    { icon: "fa-solid fa-fire", title: "Firebase Integration", desc: "Auth, Firestore, Storage and Analytics — wired up cleanly and production-ready." },
    { icon: "fa-solid fa-bolt", title: "Landing Pages", desc: "High-converting, fast-loading landing pages designed to make a strong first impression." },
    { icon: "fa-solid fa-id-badge", title: "Portfolio Websites", desc: "Distinctive personal portfolios that showcase your work the way it deserves to be seen." },
    { icon: "fa-solid fa-cart-shopping", title: "E-Commerce Websites", desc: "Full shopping experiences — catalogs, carts and checkout flows built for real customers." },
    { icon: "fa-solid fa-chart-line", title: "Dashboard Development", desc: "Data-rich dashboards with clear visual hierarchy and real-time Firestore data." },
    { icon: "fa-solid fa-pen-ruler", title: "UI/UX Design", desc: "Thoughtful, user-first design systems that make products feel effortless to use." }
  ];
  const servicesGrid = document.getElementById("servicesGrid");
  servicesGrid.innerHTML = services.map((s, i) => `
    <div class="service-card" style="animation-delay:${i * 60}ms">
      <div class="service-icon"><i class="${s.icon}"></i></div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join("");
  servicesGrid.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  /* ---------------- Network canvas (hero signature element) ---------------- */
  const canvas = document.getElementById("networkCanvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  const hero = document.querySelector(".hero");

  function resizeCanvas() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.8
    }));
  }

  function drawNetwork() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const linkDist = 140;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < linkDist) {
          ctx.strokeStyle = `rgba(111, 227, 201, ${0.16 * (1 - dist / linkDist)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
    particles.forEach((p) => {
      ctx.fillStyle = "rgba(148, 180, 193, 0.55)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(drawNetwork);
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    resizeCanvas();
    drawNetwork();
    window.addEventListener("resize", resizeCanvas);
  }
});
