// ─── Resume Data ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Saksham Sahu",
  initials: "SK",
  roles: ["Software Engineer", "Open Source Contributor", "System Designer"],
  bio: "I build things that scale. Specializing in distributed systems, high-throughput APIs, and developer tooling. Former Google SWE Intern. Currently shipping at Razorpay.",
  contact: [
    { icon: "mail",     label: "saksham@dev.com",          href: "mailto:saksham@dev.com" },
    { icon: "terminal", label: "github.com/sakshamk",      href: "#" },
    { icon: "share",    label: "linkedin.com/in/sakshamsahu", href: "#" },
    { icon: "public",   label: "saksham.dev",              href: "#" },
    { icon: "location_on", label: "Bangalore, India",       href: "#" },
  ],
  stats: [
    { value: "10M+",  label: "Daily Transactions" },
    { value: "40%",   label: "Latency Reduced" },
    { value: "3K+",   label: "GitHub Stars" },
    { value: "15K+",  label: "Blog Readers / mo" },
  ],
};

export const skills = [
  { name: "Go",          level: 92, color: "#22d3ee" },
  { name: "TypeScript",  level: 90, color: "#818cf8" },
  { name: "Python",      level: 88, color: "#a855f7" },
  { name: "React / Next.js", level: 85, color: "#6366f1" },
  { name: "PostgreSQL",  level: 83, color: "#10b981" },
  { name: "Kubernetes",  level: 80, color: "#f59e0b" },
];

export const techStack = [
  { category: "Languages",   items: ["Go", "TypeScript", "Python", "Java", "Rust"] },
  { category: "Frontend",    items: ["React", "Next.js", "TailwindCSS", "Redux", "Framer"] },
  { category: "Backend",     items: ["Node.js", "FastAPI", "GraphQL", "gRPC", "REST"] },
  { category: "Data",        items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { category: "DevOps",      items: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform"] },
];

export const experience = [
  {
    role: "Software Engineer II",
    company: "Razorpay",
    period: "Jan 2024 – Present",
    location: "Bangalore, India",
    type: "Full-time",
    color: "#6366f1",
    bullets: [
      "Architected microservices handling 10M+ daily transactions with 99.99% SLA using Go + Kubernetes.",
      "Cut API p99 latency by 40% via Redis multi-layer caching and PostgreSQL query optimization.",
      "Led 6-engineer squad shipping Payments SDK v3 — adopted by 2,000+ merchants within 2 months.",
      "Designed an event-driven notification pipeline (Kafka) processing 500K events/day.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Google",
    period: "Jun – Aug 2023",
    location: "Remote",
    type: "Internship",
    color: "#22d3ee",
    bullets: [
      "Built internal dev dashboard (React + TypeScript) used by 200+ engineering teams — cut deploy time 30%.",
      "Shipped 3 production features in Google Cloud Console reviewed by senior PMs and engineers.",
    ],
  },
];

export const projects = [
  {
    name: "DevFlow",
    emoji: "⚡",
    tagline: "Collaborative Code Editor",
    description: "Real-time collaborative IDE with AI code suggestions, integrated terminal, and peer-review workflow. Think VSCode meets Figma.",
    tags: ["Next.js", "FastAPI", "WebSockets", "Docker", "OpenAI"],
    stats: { stars: "2.4K", metric: "Live at devflow.sh" },
    color: "#6366f1",
    link: "#",
  },
  {
    name: "NeuralSearch",
    emoji: "🔍",
    tagline: "Semantic Search Engine",
    description: "Vector-embedding search engine with sub-100ms latency. Indexes 50M+ documents using transformer models and Elasticsearch.",
    tags: ["Python", "PyTorch", "Elasticsearch", "AWS", "FastAPI"],
    stats: { stars: "1.1K", metric: "Powering 3 SaaS products" },
    color: "#22d3ee",
    link: "#",
  },
  {
    name: "GoTrace",
    emoji: "🔬",
    tagline: "Distributed Tracing SDK",
    description: "Lightweight OpenTelemetry-compatible tracing SDK for Go microservices. Zero allocation hot path.",
    tags: ["Go", "OpenTelemetry", "gRPC", "Prometheus"],
    stats: { stars: "890", metric: "Used in prod at 4 startups" },
    color: "#a855f7",
    link: "#",
  },
];

export const achievements = [
  { icon: "workspace_premium", title: "Google Summer of Code 2023",   detail: "Contributed core routing logic to Apache APISIX.",           color: "#f59e0b" },
  { icon: "emoji_events",      title: "HackMIT 2022 — 1st Place",     detail: "'Decentralized Future' track · 800+ participants.",           color: "#ec4899" },
  { icon: "code",              title: "Open Source",                   detail: "500+ contributions · 3K+ stars across repos.",               color: "#10b981" },
  { icon: "history_edu",       title: "Tech Author",                   detail: "15K+ monthly readers on system design & Go.",                color: "#818cf8" },
];

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  school: "IIT Delhi",
  year:   "2020 – 2024",
  grade:  "CGPA 8.9 / 10",
  courses: ["Distributed Systems", "OS", "Algorithms", "Computer Networks", "ML"],
};
