// ============================================================
// Firebase initialization (Modular SDK v12.16.0, official CDN)
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";

// Replace with your own Firebase project config if you fork this site.
const firebaseConfig = {
  apiKey: "AIzaSyAtOwVMUN46jLJGuft_-NTnmFoln6-Yhvc",
  authDomain: "my-portfolio-e46fd.firebaseapp.com",
  projectId: "my-portfolio-e46fd",
  storageBucket: "my-portfolio-e46fd.firebasestorage.app",
  messagingSenderId: "554909838402",
  appId: "1:554909838402:web:71bcfd9c0bc99bc3bb11db",
  measurementId: "G-5CEHZLSE6H"
};

let app, db, analytics;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);

  // Analytics only works in a real browser context with support — guard it.
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => { /* analytics unsupported in this environment — safe to ignore */ });

  window.__firebaseReady = true;
} catch (err) {
  console.error("Firebase failed to initialize:", err);
  window.__firebaseReady = false;
}

// Expose db on window so non-module scripts (contact.js is a module too,
// but this keeps things resilient if the load order ever changes) can use it.
window.__db = db;

export { app, db, analytics };
