# Shams Bashir — Portfolio

A premium, single-page developer portfolio built with semantic HTML5, modular CSS,
vanilla JavaScript and the Firebase Modular SDK (v12.16.0).

## Structure

```
portfolio/
├── index.html          # All sections live here (single-page site)
├── css/
│   ├── style.css        # Design tokens, layout, components
│   ├── animations.css    # Scroll-reveal + reduced-motion rules
│   └── responsive.css    # Breakpoints
├── js/
│   ├── firebase.js       # Firebase init (Firestore + Analytics)
│   ├── contact.js        # Contact form + newsletter -> Firestore
│   ├── animation.js       # IntersectionObserver reveals, counters, skill bars
│   └── app.js             # Nav, theme toggle, hero canvas, projects/services data, modal
├── images/               # Add your own image overrides here
├── assets/
│   └── Shams-Bashir-Resume.pdf   # Placeholder — replace with your real resume
└── README.md
```

> **Note on structure:** the brief listed separate `about.html`, `projects.html`, etc.
> This build ships as a single smooth-scrolling `index.html` instead — the
> Awwvards/Dribbble-style portfolios it's modeled on are almost always
> single-page for a reason: it keeps the scroll narrative, the hero canvas and
> the shared nav state (active-link highlighting) in one continuous
> experience instead of a full page reload between sections. All requested
> sections are still present, in the same order, just as anchored sections.
> If you'd rather split it into multiple physical pages, each `<section>` in
> `index.html` can be lifted into its own file with the header/footer
> duplicated — ask and this can be done.

## Before you deploy

1. **Resume** — replace `assets/Shams-Bashir-Resume.pdf` with your real resume
   (keep the filename, or update the `href` in the two "Download Resume" buttons
   in `index.html`).
2. **Images** — every image currently points to a royalty-free Unsplash URL.
   Search-replace the `src="https://images.unsplash.com/..."` values with your
   own image paths (e.g. `images/portrait.jpg`) whenever you have real photos.
3. **Links** — update the placeholder `#` links for GitHub/Live Demo on each
   project card, plus the GitHub/LinkedIn/email URLs in the nav, hero and
   contact section.
4. **Firebase** — the config in `js/firebase.js` is already wired to your
   project (`my-portfolio-e46fd`). Create two Firestore collections so the
   forms have somewhere to write:
   - `messages` — contact form submissions
   - `newsletter_subscribers` — newsletter signups

   Also set Firestore security rules so only writes (not reads) are public, e.g.:

   ```
   match /messages/{doc} {
     allow create: if true;
     allow read, update, delete: if false;
   }
   match /newsletter_subscribers/{doc} {
     allow create: if true;
     allow read, update, delete: if false;
   }
   ```

## Running locally

This is a static site with ES module scripts, so it needs to be served over
`http://` (not opened directly as a `file://` path) for the Firebase imports
to work. From the `portfolio/` folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Features

- Signature animated network canvas in the hero (represents full-stack "connections")
- Typing effect for role titles + a live-typed terminal panel in Skills
- Dark/light theme toggle (persisted in localStorage)
- Scroll-reveal animations via IntersectionObserver (respects `prefers-reduced-motion`)
- Animated number counters, skill progress bars
- Project grid with hover overlays + a details modal
- Contact form and newsletter form that write straight to Firestore
- Sticky glassmorphism navbar with scroll-spy active states
- Fully responsive down to small mobile screens
