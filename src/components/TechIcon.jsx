import React from "react";

export default function TechIcon({ name, size = 32, className = "" }) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `tech-svg-icon ${className}`
  };

  switch (name?.toLowerCase()) {
    case "react":
    case "react.js":
      return (
        <svg {...iconProps} viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "javascript":
    case "javascript (es6+)":
    case "js":
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6.5 17.8c.8.5 1.8.8 2.7.8 1.4 0 2.2-.7 2.2-2.1v-6.9h-2.1v6.8c0 .5-.3.8-.8.8-.4 0-.8-.1-1.1-.3l-.9.9zm8.1.1c1.2.6 2.6.9 4 .9 3.2 0 4.9-1.6 4.9-4.1 0-2.2-1.3-3.4-3.6-4.2-1.4-.5-2.2-.9-2.2-1.6 0-.6.5-1.1 1.6-1.1 1 0 2 .3 2.7.7l.8-1.5c-.8-.5-1.9-.8-3.3-.8-2.8 0-4.6 1.6-4.6 3.8 0 2.1 1.4 3.3 3.7 4.1 1.4.5 2.1 1 2.1 1.7 0 .8-.7 1.3-1.9 1.3-1.2 0-2.5-.4-3.4-1l-.8 1.9z"
            fill="#000"
          />
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M4 8.5h6v1.8H7.9V18H6.1v-7.7H4V8.5zm9 5.8c.8.5 1.7.8 2.6.8 1.2 0 1.9-.5 1.9-1.3 0-.8-.6-1.2-2.1-1.8-1.9-.7-3.1-1.6-3.1-3.2 0-1.8 1.5-3.1 3.8-3.1 1.2 0 2.2.3 3 .7l-.7 1.6c-.7-.4-1.5-.6-2.3-.6-1.1 0-1.8.5-1.8 1.2 0 .7.6 1.1 2.1 1.7 2 .8 3.1 1.8 3.1 3.3 0 1.9-1.5 3.2-4 3.2-1.4 0-2.6-.4-3.5-.9l.7-1.5z"
            fill="#fff"
          />
        </svg>
      );

    case "tailwind css":
    case "tailwindcss":
    case "tailwind":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.63C13.67 10.63 15.1 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.63-1.18-1.2-2.61-2.57-5.51-2.57zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.63 1.18 1.2 2.61 2.57 5.51 2.57 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.63-1.18-1.2-2.61-2.57-5.51-2.57z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "html5":
    case "html5 & semantic web":
    case "html":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#E34F26" />
          <path d="M12 3.8v16.4l5.9-1.5 1.3-14.9H12z" fill="#EF652A" />
          <path
            d="M12 8.3h-4.3l.3 3.4h4v-3.4zm0 6.6l-.1.02-2.4-.6-.2-1.8H7.3l.3 3.6 4.4 1.2v-2.4zm0-6.6v3.4h2.2l-.2 2.3-2 .5v2.4l4.4-1.2.6-7.4H12z"
            fill="#fff"
          />
        </svg>
      );

    case "css3":
    case "css3 & modern layouts":
    case "css":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#1572B6" />
          <path d="M12 3.8v16.4l5.9-1.5 1.3-14.9H12z" fill="#33A9DC" />
          <path
            d="M12 8.3h-4.3l.3 3.4h4v-3.4zm0 6.6l-.1.02-2.4-.6-.2-1.8H7.3l.3 3.6 4.4 1.2v-2.4zm0-6.6v3.4h2.2l-.2 2.3-2 .5v2.4l4.4-1.2.6-7.4H12z"
            fill="#fff"
          />
        </svg>
      );

    case "bootstrap 5":
    case "bootstrap":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#7952B3" />
          <path
            d="M7 6.5h4.6c1.8 0 3 .9 3 2.3 0 1-.6 1.7-1.5 2 1.2.3 1.9 1.2 1.9 2.4 0 1.6-1.3 2.6-3.3 2.6H7V6.5zm2.3 3.8h2.1c.7 0 1.2-.4 1.2-1 0-.6-.5-1-1.2-1H9.3v2zm0 3.8h2.3c.8 0 1.4-.4 1.4-1.1 0-.7-.6-1.1-1.4-1.1H9.3v2.2z"
            fill="#fff"
          />
        </svg>
      );

    case "node.js":
    case "node":
    case "nodejs":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5l8.5 4.9v9.8L12 22l-8.5-4.8V7.4L12 2.5z"
            fill="#5FA04E"
          />
          <path
            d="M12 6.5c-3 0-4.5 1.5-4.5 3.5 0 2.2 1.8 2.8 3.5 3.2 1.5.3 2 .6 2 1.3 0 .8-.8 1.2-1.9 1.2-1.2 0-2.3-.4-3-1v2.3c.9.4 2 .6 3.1.6 3.2 0 4.7-1.5 4.7-3.7 0-2.3-1.8-2.9-3.6-3.3-1.4-.3-1.9-.6-1.9-1.2 0-.7.7-1.1 1.7-1.1 1 0 2 .3 2.7.8V7.3c-.8-.5-1.8-.8-2.8-.8z"
            fill="#fff"
          />
        </svg>
      );

    case "express.js":
    case "express":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.08)" stroke="#8BA0AC" strokeWidth="1.5" />
          <path
            d="M7 8h3.5c1.4 0 2.2.8 2.2 2 0 1-.6 1.7-1.5 1.9 1 .2 1.7 1 1.7 2.1 0 1.4-1 2.2-2.5 2.2H7V8zm1.8 3.3h1.5c.5 0 .9-.3.9-.8s-.4-.8-.9-.8H8.8v1.6zm0 3.4h1.7c.6 0 1-.3 1-.9 0-.6-.4-.9-1-.9H8.8v1.8zm6.4-6.7l2.8 4-2.8 4h2.2l1.7-2.6 1.7 2.6h2.2l-2.8-4 2.8-4h-2.2l-1.7 2.6-1.7-2.6h-2.2z"
            fill="#C7D3DA"
          />
        </svg>
      );

    case "rest apis":
    case "rest apis & integration":
    case "api":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="5" width="20" height="14" rx="3" stroke="#6FE3C9" strokeWidth="1.8" />
          <path d="M7 12h10M13 8l4 4-4 4" stroke="#6FE3C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "supabase":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M13.2 22.8c-.8.8-2.1.2-2-.9l.9-8.4H3.8c-1.3 0-2-1.5-1.2-2.4L11.8 1.2c.8-.8 2.1-.2 2 .9l-.9 8.4h8.3c1.3 0 2 1.5 1.2 2.4L13.2 22.8z"
            fill="url(#supabase-grad)"
          />
          <defs>
            <linearGradient id="supabase-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3ECF8E" />
              <stop offset="1" stopColor="#1E8A5E" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "mongodb":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 1.5c-.2 0-.3.1-.4.2C10.7 3.3 5 10.3 5 14.8c0 4.1 3.1 7.2 7 7.2s7-3.1 7-7.2c0-4.5-5.7-11.5-6.6-13.1-.1-.1-.2-.2-.4-.2z"
            fill="#47A248"
          />
          <path
            d="M12 2.2v19.4c3.4-.3 6.1-3.2 6.1-6.8 0-4-4.8-10.4-6.1-12.6z"
            fill="#499D4A"
          />
          <path
            d="M12 21.6c-.3 0-.5.2-.5.5v.4c0 .3.2.5.5.5s.5-.2.5-.5v-.4c0-.3-.2-.5-.5-.5z"
            fill="#fff"
          />
        </svg>
      );

    case "cloud firestore":
    case "firestore":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6.5C4 4.5 7.6 3 12 3s8 1.5 8 3.5v11c0 2-3.6 3.5-8 3.5s-8-1.5-8-3.5v-11z"
            fill="#FFA611"
            opacity="0.2"
          />
          <path
            d="M20 6.5c0 1.9-3.6 3.5-8 3.5s-8-1.6-8-3.5C4 4.6 7.6 3 12 3s8 1.6 8 3.5z"
            fill="#FFCA28"
          />
          <path
            d="M4 12c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5"
            stroke="#FFA611"
            strokeWidth="1.8"
          />
          <path
            d="M4 17.5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5"
            stroke="#FFA611"
            strokeWidth="1.8"
          />
        </svg>
      );

    case "firebase authentication":
    case "firebase auth":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l7.5 3.3v5.9c0 5-3.3 9.6-7.5 10.8-4.2-1.2-7.5-5.8-7.5-10.8V5.3L12 2z"
            fill="#FFCA28"
            opacity="0.25"
            stroke="#FFCA28"
            strokeWidth="1.6"
          />
          <path
            d="M12 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-3 8c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5v.5H9v-.5z"
            fill="#FFA611"
          />
        </svg>
      );

    case "firebase storage":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M19.4 15a4.5 4.5 0 00-1.4-8.8 6 6 0 00-11.5 1.8A4 4 0 007 16h12.4z"
            fill="#F58220"
            opacity="0.3"
            stroke="#F58220"
            strokeWidth="1.6"
          />
          <path
            d="M12 11v6m0-6l-2 2m2-2l2 2"
            stroke="#FFCA28"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "git & version control":
    case "git":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.7 10.7l-8.4-8.4c-.4-.4-1-.4-1.4 0l-1.4 1.4 2.8 2.8c.4-.1.8 0 1.1.3.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-2.7-2.7v5.6c.3.2.5.5.5.9 0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1c0-.4.2-.7.5-.9V7.9c-.3-.2-.5-.5-.5-.9 0-.4.2-.8.5-.9L6.5 4.6 2.3 8.8c-.4.4-.4 1 0 1.4l8.4 8.4c.4.4 1 .4 1.4 0l9.6-9.6c.4-.4.4-1 0-1.4z"
            fill="#F05032"
          />
        </svg>
      );

    case "github":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case "vs code & cursor ai":
    case "vs code":
    case "vscode":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M17.8 2.2l-9.4 8.7L4.2 7.7 2 8.9l4.5 3.6L2 16.1l2.2 1.2 4.2-3.2 9.4 8.7L22 21.2V3.8l-4.2-1.6zm.2 4.7v11.2l-5.8-4.8 5.8-6.4z"
            fill="#007ACC"
          />
        </svg>
      );

    case "vite":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.5 4.5L12.7 20.4c-.3.5-.9.5-1.2 0L2.5 4.5c-.3-.6.1-1.3.8-1.2l8.4 1.7 8.5-1.7c.6-.1 1.1.6.8 1.2z"
            fill="url(#vite-grad)"
          />
          <path
            d="M13.8 3.5l-6.4 7.2 4.1.3-3.1 7.2 7.8-8.8-4.3-.3 3.6-5.6h-1.7z"
            fill="#FFD62E"
          />
          <defs>
            <linearGradient id="vite-grad" x1="2.5" y1="3.5" x2="21.5" y2="20.4" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "responsive & mobile-first":
    case "responsive":
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="#6FE3C9" strokeWidth="1.8" />
          <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" stroke="#6FE3C9" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg {...iconProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="#6FE3C9"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
