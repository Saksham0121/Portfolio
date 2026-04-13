// ─── Resume Data — Saksham Sahu ──────────────────────────────────────────────

export const profile = {
  name: "Saksham Sahu",
  initials: "SS",
  roles: ["Full-Stack Developer", "Data Analyst", "Problem Solver", "Open Source Enthusiast"],
  bio: "B.Tech CSE student at Bennett University with a passion for building full-stack products and deriving insights from data. Winner at Innovate 2.0, GDSC India Regional Bootcamp selectee, and builder of AI-powered web apps.",
  contact: [
    { icon: "mail",      label: "sakshamsahu77783@gmail.com",            href: "mailto:sakshamsahu77783@gmail.com" },
    { icon: "terminal",  label: "github.com/Saksham0121",               href: "https://github.com/Saksham0121" },
    { icon: "share",     label: "linkedin.com/in/sahusaksham10",        href: "https://www.linkedin.com/in/saksham-sahu-047112282/" },
    { icon: "code",      label: "leetcode.com/u/amSaksham",             href: "https://leetcode.com/u/amSaksham" },
    { icon: "location_on", label: "Noida, Uttar Pradesh",               href: "#" },
  ],
  stats: [
    { value: "8.68",  label: "CGPA" },
    { value: "1st",   label: "Innovate 2.0 Winner" },
    { value: "3+",    label: "Full-Stack Projects" },
    { value: "2",     label: "Internships" },
  ],
};

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  school: "Bennett University",
  year: "2023 – 2027",
  grade: "CGPA 8.68 / 10",
  courses: ["DSA", "OOPs", "DBMS", "OS", "Computer Networks", "System Design"],
};

export const skills = [
  { name: "Python",        level: 87, color: "#22d3ee" },
  { name: "JavaScript",    level: 83, color: "#f59e0b" },
  { name: "C++",           level: 80, color: "#818cf8" },
  { name: "React.js",      level: 79, color: "#6366f1" },
  { name: "Node.js",       level: 76, color: "#10b981" },
  { name: "MongoDB",       level: 74, color: "#a855f7" },
];

export const techStack = [
  { category: "Languages",     items: ["C++", "JavaScript", "Python"] },
  { category: "Web & Backend", items: ["React.js", "Node.js", "Express.js", "FastAPI", "REST API", "HTML5", "CSS3"] },
  { category: "Databases",     items: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"] },
  { category: "Data & BI",     items: ["Power BI", "Tableau", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"] },
  { category: "Tools",         items: ["GitHub", "Figma", "VS Code", "Postman", "Google Colab", "MS Excel"] },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "Imarticus Learning",
    period: "2024",
    location: "Remote",
    type: "Internship",
    color: "#6366f1",
    bullets: [
      "Led a team of 5 to develop interactive dashboards that delivered key business insights to stakeholders.",
      "Analyzed business datasets using MySQL, Python, and Power BI to extract actionable insights.",
      "Applied feature engineering techniques to optimize model accuracy across ML pipelines.",
      "Visualized insights using Matplotlib and Seaborn for weekly stakeholder reports.",
    ],
  },
  {
    role: "IQAC Intern",
    company: "Internal Quality Assurance Cell, Bennett University",
    period: "2024",
    location: "Noida, India",
    type: "Internship",
    color: "#22d3ee",
    bullets: [
      "Developed 4 interactive Power BI dashboards to track academic quality metrics, reducing data analysis time for the administration by 20%.",
      "Contributed to data audit frameworks used in internal evaluations presented to the University's top administration.",
    ],
  },
];

export const projects = [
  {
    name: "Social-ish",
    emoji: "🤝",
    tagline: "Social Platform for Introverts",
    description: "Full-stack web app for introverts to discover events and connect offline through interest-based matching and real-time chat. Integrated Gemini API chatbot for personalised conversation support.",
    tags: ["React", "Node.js", "MongoDB", "WebSocket", "Gemini API", "JWT"],
    stats: { stars: "Live", metric: "github.com/Saksham0121/Saahasini" },
    color: "#6366f1",
    link: "https://github.com/Saksham0121/Saahasini",
  },
  {
    name: "Saahasini",
    emoji: "🛡️",
    tagline: "Women's Safety App",
    description: "Mobile safety app with real-time GPS tracking, 1-tap SOS alerts, and Google Maps geofencing for high-risk area detection. Won 1st place among 200+ teams at Innovate 2.0, JIIT Noida.",
    tags: ["Google Maps API", "GPS", "Geofencing", "SOS Alerts", "React Native"],
    stats: { stars: "🏆 1st", metric: "Innovate 2.0 · JIIT Noida" },
    color: "#ec4899",
    link: "https://github.com/Saksham0121/Saahasini",
  },
  {
    name: "Customer Segmentation",
    emoji: "📊",
    tagline: "ML Clustering · K-Means",
    description: "Segmented 1000+ investment banking clients using K-Means clustering on financial and demographic factors, powered by RFM analysis to identify high-value and loyal customer segments.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "K-Means", "RFM"],
    stats: { stars: "1K+", metric: "Clients segmented" },
    color: "#22d3ee",
    link: "https://github.com/Saksham0121/Customer_Segmentation",
  },
];

export const achievements = [
  { icon: "emoji_events",      title: "Innovate 2.0 — National Winner",       detail: "1st place among 200+ teams at JIIT Noida Hackathon (2024).",       color: "#f59e0b" },
  { icon: "workspace_premium", title: "GDSC Solution Challenge",               detail: "Selected for India Regional Bootcamp — Delhi NCR (2024).",          color: "#6366f1" },
  { icon: "military_tech",     title: "TechArena 2025 — 3rd Place",            detail: "Secured 3rd position at TechArena Project Showcase (2025).",        color: "#10b981" },
  { icon: "school",            title: "Bennett University · CGPA 8.68",        detail: "B.Tech CSE · Roll No. E23CSEU0957 · Batch 2023–2027.",             color: "#818cf8" },
];
