export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database & Cloud" },
  { id: "tools", label: "Tools & Workflow" }
];

export const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    percent: 92,
    icon: "fa-brands fa-react",
    badge: "Core Stack",
    description: "Component-based architecture, React hooks, state management, custom hooks, and modern frontend application development."
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: "Advanced",
    percent: 92,
    icon: "fa-brands fa-js",
    badge: "Language",
    description: "Modern ES6+ syntax, asynchronous programming, Promises, Fetch API, DOM manipulation, and event-driven architecture."
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Proficient",
    percent: 90,
    icon: "fa-solid fa-wind",
    badge: "Styling",
    description: "Utility-first modern styling, responsive layouts, theme customization, sleek dark modes, and rapid UI development."
  },
  {
    name: "HTML5 & Semantic Web",
    category: "frontend",
    level: "Expert",
    percent: 95,
    icon: "fa-brands fa-html5",
    badge: "Markup",
    description: "Clean semantic markup, SEO best practices, accessibility standards (a11y), and proper document structure."
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    level: "Expert",
    percent: 94,
    icon: "fa-brands fa-css3-alt",
    badge: "Styling",
    description: "CSS Grid, Flexbox, custom properties (CSS variables), keyframe animations, glassmorphism, and responsive design."
  },
  {
    name: "Bootstrap 5",
    category: "frontend",
    level: "Proficient",
    percent: 88,
    icon: "fa-brands fa-bootstrap",
    badge: "Framework",
    description: "Responsive grid systems, utility classes, ready-to-use component styling, and fast responsive prototyping."
  },
  {
    name: "Responsive & Mobile-First",
    category: "frontend",
    level: "Expert",
    percent: 94,
    icon: "fa-solid fa-mobile-screen",
    badge: "UX Core",
    description: "Zero horizontal overflow, fluid typography, breakpoint systems, cross-browser compatibility, and touch-first interactions."
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: "Proficient",
    percent: 88,
    icon: "fa-brands fa-node-js",
    badge: "Runtime",
    description: "Server-side JavaScript runtime, asynchronous event loops, npm package management, and backend scripting."
  },
  {
    name: "Express.js",
    category: "backend",
    level: "Proficient",
    percent: 86,
    icon: "fa-solid fa-server",
    badge: "Backend",
    description: "Fast, unopinionated routing, middleware pipelines, RESTful API design, request handling, and JSON response controllers."
  },
  {
    name: "REST APIs & Integration",
    category: "backend",
    level: "Proficient",
    percent: 88,
    icon: "fa-solid fa-network-wired",
    badge: "Architecture",
    description: "API design, HTTP methods, client-server communication, JSON schemas, headers, status codes, and external service consumption."
  },

  // Database & Cloud
  {
    name: "Supabase",
    category: "database",
    level: "Advanced",
    percent: 92,
    icon: "fa-solid fa-bolt",
    badge: "BaaS & SQL",
    description: "PostgreSQL database, Row Level Security (RLS), Supabase Auth, realtime subscriptions, and database integration (used for Baloch Export Hub)."
  },
  {
    name: "MongoDB",
    category: "database",
    level: "Proficient",
    percent: 88,
    icon: "fa-solid fa-leaf",
    badge: "NoSQL DB",
    description: "Document-oriented NoSQL database, schema design, collections, aggregation pipelines, and Node.js backend integration."
  },
  {
    name: "Cloud Firestore",
    category: "database",
    level: "Advanced",
    percent: 93,
    icon: "fa-solid fa-database",
    badge: "NoSQL DB",
    description: "Real-time document database, structured collections, indexes, subcollections, server timestamps, and reactive query listeners."
  },
  {
    name: "Firebase Authentication",
    category: "database",
    level: "Advanced",
    percent: 92,
    icon: "fa-solid fa-shield-halved",
    badge: "Auth & Security",
    description: "Email/password auth, social sign-in, user sessions, security rules, and role-based permissions."
  },
  {
    name: "Firebase Storage",
    category: "database",
    level: "Proficient",
    percent: 87,
    icon: "fa-solid fa-cloud-arrow-up",
    badge: "Cloud Storage",
    description: "Secure user media uploads, document storage, download URLs, and storage access rules."
  },
  {
    name: "Firebase Analytics & Console",
    category: "database",
    level: "Proficient",
    percent: 85,
    icon: "fa-solid fa-chart-line",
    badge: "Monitoring",
    description: "Event tracking, user conversion flows, deployment configurations, and project console management."
  },

  // Tools & Workflow
  {
    name: "Git & Version Control",
    category: "tools",
    level: "Advanced",
    percent: 90,
    icon: "fa-brands fa-git-alt",
    badge: "VCS",
    description: "Branching strategies, clean commit histories, staging, merging, conflict resolution, and collaborative workflows."
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Advanced",
    percent: 90,
    icon: "fa-brands fa-github",
    badge: "DevOps",
    description: "Remote repositories, GitHub Pages, pull requests, issue tracking, and open-source contributions."
  },
  {
    name: "VS Code & Cursor AI",
    category: "tools",
    level: "Expert",
    percent: 95,
    icon: "fa-solid fa-laptop-code",
    badge: "IDE & AI",
    description: "Power-user developer workflow, debugging, extensions, AI-augmented coding, and rapid problem-solving."
  },
  {
    name: "Vite",
    category: "tools",
    level: "Advanced",
    percent: 90,
    icon: "fa-solid fa-bolt",
    badge: "Build Tool",
    description: "Lightning-fast HMR (Hot Module Replacement), ES module bundling, optimized production builds, and dev server setup."
  }
];

export const terminalLines = [
  "$ whoami",
  "shams_bashir — Full Stack Web & App Developer",
  "",
  "$ cat current_stack.json",
  "{",
  '  "frontend": ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap 5"],',
  '  "backend": ["Node.js", "Express.js", "REST APIs"],',
  '  "database": ["Supabase", "MongoDB", "Cloud Firestore", "Firebase Auth"],',
  '  "active_projects": ["Baloch Export Hub", "BalochDev"],',
  '  "experience": "8 Months Experience"',
  "}",
  "",
  "$ git status",
  "On branch main — all systems green, ready to build."
];
