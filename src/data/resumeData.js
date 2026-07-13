// ─── Saksham Sahu — Portfolio Data ───────────────────────────────────────────

export const profile = {
  name: "Saksham Sahu",
  initials: "SS",
  roles: [
    "AI Engineer",
    "Full-Stack Developer",
    "RAG Systems Architect",
    "Data Analyst",
    "Problem Solver"
  ],
  bio: "AI Engineer & Full-Stack Developer at the intersection of Generative AI and scalable systems. At DRDO, I build secure RAG pipelines with 92.5% retrieval accuracy. I craft full-stack platforms from React to Node.js, and have a proven track record of winning national hackathons and leading data-driven teams.",
  shortBio: "Building intelligent systems. From LLMs to web apps.",
  domain: "Generative AI • RAG Systems • Full-Stack Engineering",
  contact: [
    { icon: "mail", label: "sakshamsahu77783@gmail.com", href: "mailto:sakshamsahu77783@gmail.com" },
    { icon: "github", label: "github.com/Saksham0121", href: "https://github.com/Saksham0121" },
    { icon: "linkedin", label: "linkedin.com/in/sahusaksham10", href: "https://www.linkedin.com/in/sahusaksham10/" },
    { icon: "code", label: "LeetCode 600+", href: "https://leetcode.com/u/amSaksham" },
  ],
  location: "Noida, India",
  phone: "+91-7906552119",
  resumeUrl: "#",
};

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  school: "Bennett University",
  year: "2023 – 2027",
  grade: "CGPA 8.68 / 10",
  courses: ["DSA", "OOPs", "DBMS", "OS", "Computer Networks", "System Design"],
};

export const stats = [
  { value: "92.5%", label: "RAG Accuracy", color: "#4ecdc4" },
  { value: "600+", label: "DSA Solved", color: "#d4a853" },
  { value: "10K+", label: "Pages Processed", color: "#9b59b6" },
  { value: "8.68", label: "CGPA", color: "#e0568a" },
];

export const skills = {
  languages: [
    { name: "Python", level: 90, color: "#4ecdc4" },
    { name: "JavaScript", level: 85, color: "#d4a853" },
    { name: "C++", level: 82, color: "#9b59b6" },
    { name: "TypeScript", level: 78, color: "#6366f1" },
  ],
  web: [
    { name: "React.js", level: 88, color: "#4ecdc4" },
    { name: "Next.js", level: 80, color: "#d4a853" },
    { name: "Node.js", level: 85, color: "#9b59b6" },
    { name: "Express.js", level: 82, color: "#6366f1" },
  ],
  ai: [
    { name: "RAG Architecture", level: 92, color: "#4ecdc4" },
    { name: "LangChain", level: 88, color: "#d4a853" },
    { name: "LLM Integration", level: 85, color: "#9b59b6" },
    { name: "Vector Search", level: 86, color: "#6366f1" },
  ],
  data: [
    { name: "MySQL / PostgreSQL", level: 85, color: "#4ecdc4" },
    { name: "MongoDB", level: 88, color: "#d4a853" },
    { name: "Power BI", level: 80, color: "#9b59b6" },
    { name: "Scikit-learn", level: 78, color: "#6366f1" },
  ],
};

export const techStack = [
  { category: "Languages", items: ["C++", "JavaScript", "Python", "TypeScript"] },
  { category: "Frontend", items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSocket"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "ChromaDB", "Firebase"] },
  { category: "Gen AI / ML", items: ["RAG", "LangChain", "LLMs", "Prompt Engineering", "ChromaDB", "Vector Search", "BM25", "Semantic Search", "Embedding Models"] },
  { category: "Data & BI", items: ["Power BI", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Google Colab", "Figma"] },
  { category: "Core CS", items: ["DSA (LeetCode 600+)", "OOPs", "DBMS", "OS", "Computer Networks", "System Design"] },
];

export const experience = [
  {
    role: "Artificial Intelligence Intern",
    company: "DRDO, Ministry of Defence",
    period: "May 2026 – Present",
    location: "India",
    type: "Internship",
    color: "#d4a853",
    highlights: [
      "92.5% retrieval accuracy on confidential RAG benchmarks",
      "40% query latency reduction",
      "10,000+ pages document processing pipeline",
    ],
    bullets: [
      "Engineered secure, locally hosted Advanced RAG systems using LLMs, vector databases, and embedding models, achieving 92.5% retrieval accuracy on confidential knowledge base benchmarks while reducing query latency by ~40%.",
      "Developed Hybrid and Hierarchical RAG architectures with semantic search, keyword retrieval, and reranking to dramatically improve retrieval quality.",
      "Built scalable document processing pipelines handling 10,000+ pages including chunking, embedding generation, indexing, and context-aware retrieval.",
      "Reduced hallucinations and enhanced response quality through multi-stage retrieval and grounded generation techniques.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Imarticus Learning",
    period: "Jun 2025 – Jul 2025",
    location: "Remote",
    type: "Internship",
    color: "#4ecdc4",
    highlights: [
      "Led team of 5 analysts",
      "50,000+ rows datasets analyzed",
      "Interactive dashboards deployed",
    ],
    bullets: [
      "Led a team of 5 analysts to develop interactive dashboards delivering key business insights to stakeholders.",
      "Analyzed 50,000+ row business datasets using MySQL, Python, and Power BI to extract actionable insights.",
      "Applied feature engineering techniques to optimize model accuracy across ML pipelines.",
      "Visualized insights using Matplotlib and Seaborn for weekly stakeholder reports.",
    ],
  },
];

export const projects = [
  {
    name: "InsightFlow AI",
    tagline: "Enterprise RAG System",
    description: "A production-grade RAG system enabling citation-backed question answering over enterprise documents. Built automated document ingestion, chunking, embedding, and indexing pipelines with hybrid retrieval (semantic + BM25) and reranking for superior accuracy.",
    tags: ["React.js", "FastAPI", "LangChain", "MongoDB", "ChromaDB", "Gemini API"],
    metrics: [
      { label: "Accuracy", value: "92.5%" },
      { label: "Latency", value: "-40%" },
    ],
    color: "#d4a853",
    link: "https://github.com/Saksham0121",
    featured: true,
    year: "2026",
  },
  {
    name: "Social-ish",
    tagline: "Social Platform for Introverts",
    description: "A full-stack social platform with interest-based matching and real-time WebSocket chat. Features an AI chatbot powered by the Gemini API with custom prompt engineering for personalized conversation support and JWT-secured REST API.",
    tags: ["React.js", "Node.js", "MongoDB", "WebSocket", "Gemini API"],
    metrics: [
      { label: "Stack", value: "Full-Stack" },
      { label: "Status", value: "Live" },
    ],
    color: "#4ecdc4",
    link: "https://github.com/Saksham0121",
    featured: true,
    year: "2025",
  },
  {
    name: "Customer Segmentation",
    tagline: "ML Clustering & RFM Analysis",
    description: "Segmented 1,200+ investment banking clients using K-Means clustering on key financial and demographic factors. RFM analysis identified the top 15% high-value clients responsible for 62% of total revenue, enabling targeted retention campaigns.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "K-Means", "RFM"],
    metrics: [
      { label: "Clients", value: "1,200+" },
      { label: "Churn Cut", value: "25%" },
    ],
    color: "#9b59b6",
    link: "https://github.com/Saksham0121/Customer_Segmentation",
    featured: false,
    year: "2024",
  },
];

export const achievements = [
  {
    icon: "trophy",
    title: "Innovate 2.0 — National Winner",
    detail: "1st place among 200+ teams at JIIT Noida Hackathon 2024. Built Saahasini — a women's safety app with real-time GPS, SOS alerts, and geofencing.",
    color: "#d4a853",
    year: "2024",
  },
  {
    icon: "award",
    title: "GDSC Solution Challenge",
    detail: "Selected for India Regional Bootcamp — Delhi NCR. Recognized for innovative problem-solving and technical execution.",
    color: "#4ecdc4",
    year: "2024",
  },
  {
    icon: "medal",
    title: "TechArena 2025 — 3rd Place",
    detail: "Secured 3rd position at TechArena Project Showcase 2025 for a standout technical project demonstration.",
    color: "#9b59b6",
    year: "2025",
  },
  {
    icon: "star",
    title: "LeetCode 600+ Problems",
    detail: "Strong problem-solving foundation with 600+ DSA problems solved across arrays, trees, graphs, and dynamic programming.",
    color: "#e0568a",
    year: "Ongoing",
  },
];

export const domains = [
  {
    title: "Generative AI",
    subtitle: "RAG & LLM Systems",
    description: "I architect and deploy production-grade RAG pipelines. From hybrid retrieval to hierarchical chunking, I build systems that make LLMs trustworthy on private data.",
    icon: "brain",
    color: "#d4a853",
  },
  {
    title: "Full-Stack Engineering",
    subtitle: "React to Node.js",
    description: "I build end-to-end web applications with modern stacks — React/Next.js frontends, Node.js/Express/FastAPI backends, and real-time features with WebSocket.",
    icon: "layers",
    color: "#4ecdc4",
  },
  {
    title: "Data Intelligence",
    subtitle: "Analytics & ML",
    description: "From exploratory data analysis to customer segmentation using K-Means and RFM, I turn raw data into strategic business insights and interactive dashboards.",
    icon: "bar-chart-3",
    color: "#9b59b6",
  },
];
