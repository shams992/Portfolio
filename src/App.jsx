import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CursorGlow from "./components/CursorGlow";
import Toast from "./components/Toast";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("sb-theme") || "dark";
  });

  const [activeSection, setActiveSection] = useState("home");
  const [toast, setToast] = useState({ show: false, message: "", icon: "" });

  // Theme synchronization with HTML document
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("sb-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  // Toast trigger helper
  const showToast = useCallback((message, icon = "fa-solid fa-circle-check") => {
    setToast({ show: true, message, icon });
    const timer = setTimeout(() => {
      setToast({ show: false, message, icon: "" });
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "skills", "projects", "services", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          if (scrollY >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      <CursorGlow />
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero theme={theme} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Stats />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      <BackToTop />
      <Toast toast={toast} />
    </div>
  );
}
