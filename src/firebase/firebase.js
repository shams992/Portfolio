// ============================================================
// Firebase configuration & Firestore initialization
// ============================================================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAtOwVMUN46jLJGuft_-NTnmFoln6-Yhvc",
  authDomain: "my-portfolio-e46fd.firebaseapp.com",
  projectId: "my-portfolio-e46fd",
  storageBucket: "my-portfolio-e46fd.firebasestorage.app",
  messagingSenderId: "554909838402",
  appId: "1:554909838402:web:71bcfd9c0bc99bc3bb11db",
  measurementId: "G-5CEHZLSE6H"
};

let app;
let db;
let analytics = null;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);

  if (typeof window !== "undefined") {
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    }).catch(() => {
      // Analytics unsupported in this environment
    });
  }
} catch (err) {
  console.error("Firebase initialization failed:", err);
}

// Helper to send contact messages
export async function sendContactMessage({ name, email, subject, message }) {
  if (!db) throw new Error("Database not initialized");
  return await addDoc(collection(db, "messages"), {
    name,
    email,
    subject,
    message,
    createdAt: serverTimestamp(),
    source: "portfolio-contact-form"
  });
}

// Helper to subscribe to newsletter
export async function subscribeNewsletter(email) {
  if (!db) throw new Error("Database not initialized");
  return await addDoc(collection(db, "newsletter_subscribers"), {
    email,
    subscribedAt: serverTimestamp(),
    source: "portfolio-newsletter"
  });
}

export { app, db, analytics };
