// ============================================================
// Contact form + Newsletter -> Firestore
// ============================================================
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { app } from "./firebase.js";

const db = getFirestore(app);

function showNote(el, message, type) {
  el.textContent = message;
  el.className = `form-note ${type}`;
}

function showToast(message, icon = "fa-solid fa-circle-check") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerHTML = `<i class="${icon}"></i><span>${message}</span>`;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 3600);
}

// ---------- Contact form ----------
const contactForm = document.getElementById("contactForm");
const contactNote = document.getElementById("contactNote");
const contactSubmit = document.getElementById("contactSubmit");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("cf-name").value.trim();
    const email = document.getElementById("cf-email").value.trim();
    const subject = document.getElementById("cf-subject").value.trim();
    const message = document.getElementById("cf-message").value.trim();

    if (!name || !email || !subject || !message) {
      showNote(contactNote, "Please fill in every field before sending.", "error");
      return;
    }

    contactSubmit.classList.add("loading");
    contactSubmit.disabled = true;
    showNote(contactNote, "", "");

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        subject,
        message,
        createdAt: serverTimestamp(),
        source: "portfolio-contact-form"
      });

      showNote(contactNote, "Thanks! Your message has been sent — I'll reply soon.", "success");
      showToast("Message sent successfully");
      contactForm.reset();
    } catch (err) {
      console.error("Error sending message:", err);
      showNote(contactNote, "Something went wrong. Please try again or reach out on WhatsApp.", "error");
      showToast("Couldn't send message", "fa-solid fa-triangle-exclamation");
    } finally {
      contactSubmit.classList.remove("loading");
      contactSubmit.disabled = false;
    }
  });
}

// ---------- Newsletter form ----------
const newsletterForm = document.getElementById("newsletterForm");
const newsletterNote = document.getElementById("newsletterNote");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[name="newsletterEmail"]');
    const email = emailInput.value.trim();
    if (!email) return;

    const button = newsletterForm.querySelector("button");
    button.disabled = true;

    try {
      await addDoc(collection(db, "newsletter_subscribers"), {
        email,
        subscribedAt: serverTimestamp(),
        source: "portfolio-newsletter"
      });
      showNote(newsletterNote, "Subscribed! Welcome aboard.", "success");
      newsletterForm.reset();
    } catch (err) {
      console.error("Error subscribing:", err);
      showNote(newsletterNote, "Couldn't subscribe right now — try again later.", "error");
    } finally {
      button.disabled = false;
    }
  });
}
