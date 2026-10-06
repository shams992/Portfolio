import React, { useState } from "react";
import { sendContactMessage, subscribeNewsletter } from "../firebase/firebase";

export default function Contact({ showToast }) {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactNote, setContactNote] = useState({ text: "", type: "" });

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterNote, setNewsletterNote] = useState({ text: "", type: "" });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setContactNote({
        text: "Please fill in every field before sending.",
        type: "error"
      });
      return;
    }

    setContactLoading(true);
    setContactNote({ text: "", type: "" });

    try {
      await sendContactMessage({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim()
      });

      setContactNote({
        text: "Thanks! Your message has been sent — I'll reply soon.",
        type: "success"
      });
      showToast("Message sent successfully!", "fa-solid fa-circle-check");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setContactNote({
        text: "Couldn't send to Firestore right now. Please reach out via WhatsApp.",
        type: "error"
      });
      showToast("Couldn't send message", "fa-solid fa-triangle-exclamation");
    } finally {
      setContactLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setNewsletterLoading(true);
    setNewsletterNote({ text: "", type: "" });

    try {
      await subscribeNewsletter(newsletterEmail.trim());
      setNewsletterNote({
        text: "Subscribed! Welcome aboard.",
        type: "success"
      });
      showToast("Subscribed to newsletter!", "fa-solid fa-circle-check");
      setNewsletterEmail("");
    } catch (err) {
      console.error("Error subscribing:", err);
      setNewsletterNote({
        text: "Couldn't subscribe right now — try again later.",
        type: "error"
      });
      showToast("Subscription failed", "fa-solid fa-triangle-exclamation");
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Great</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, a role to fill, or want to collaborate? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Newsletter */}
          <div className="contact-info">
            <p className="contact-lead">
              I'm open to freelance contracts, full-time positions, and collaborations on ambitious digital initiatives.
            </p>

            <div className="contact-lines">
              <a
                className="contact-line"
                href="https://wa.me/923158750992"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <div>
                  <span>WhatsApp</span>
                  <strong>0315 8750992</strong>
                </div>
              </a>

              <a
                className="contact-line"
                href="mailto:shamsu4in@gmail.com"
              >
                <i className="fa-regular fa-envelope"></i>
                <div>
                  <span>Email</span>
                  <strong>shamsu4in@gmail.com</strong>
                </div>
              </a>

              <a
                className="contact-line"
                href="https://github.com/shams992"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                <div>
                  <span>GitHub</span>
                  <strong>github.com/shams992</strong>
                </div>
              </a>

              <a
                className="contact-line"
                href="https://linkedin.com/shamsbashir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
                <div>
                  <span>LinkedIn</span>
                  <strong>linkedin.com/in/shamsbashir</strong>
                </div>
              </a>
            </div>

            {/* Newsletter Box */}
            <div className="newsletter-box">
              <h4>Developer Newsletter</h4>
              <p>Occasional notes on new projects, modern web engineering, and things I learn.</p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  name="newsletterEmail"
                  placeholder="you@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterLoading}
                  aria-label="Subscribe"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
              {newsletterNote.text && (
                <p className={`form-note show ${newsletterNote.type}`}>
                  {newsletterNote.text}
                </p>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            id="contactForm"
            onSubmit={handleContactSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-name">Name</label>
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cf-email">Email</label>
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cf-subject">Subject</label>
              <input
                type="text"
                id="cf-subject"
                name="subject"
                placeholder="What is your inquiry regarding?"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows="5"
                placeholder="Tell me about your project, timeline, or requirements..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary btn-block ${contactLoading ? "loading" : ""}`}
              id="contactSubmit"
              disabled={contactLoading}
            >
              <span className="btn-label">
                <i className="fa-regular fa-paper-plane"></i> Send Message
              </span>
              <span className="btn-loader"></span>
            </button>

            {contactNote.text && (
              <p className={`form-note show ${contactNote.type}`}>
                {contactNote.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
