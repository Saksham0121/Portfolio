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
    { name: "C++", level: 88, color: "#9b59b6" },
    { name: "Python", level: 92, color: "#4ecdc4" },
    { name: "Java", level: 82, color: "#e0568a" },
    { name: "JavaScript", level: 86, color: "#d4a853" },
    { name: "TypeScript", level: 84, color: "#6366f1" },
  ],
  web: [
    { name: "React.js", level: 88, color: "#4ecdc4" },
    { name: "Next.js", level: 82, color: "#d4a853" },
    { name: "Node.js", level: 85, color: "#9b59b6" },
    { name: "Express.js", level: 82, color: "#6366f1" },
    { name: "REST API", level: 90, color: "#22c55e" },
  ],
  ai: [
    { name: "RAG", level: 94, color: "#4ecdc4" },
    { name: "LLMs", level: 90, color: "#d4a853" },
    { name: "LangChain", level: 88, color: "#9b59b6" },
    { name: "Vector Search", level: 89, color: "#6366f1" },
  ],
  cloudData: [
    { name: "AWS (ECR/ECS/EC2)", level: 82, color: "#f97316" },
    { name: "Docker & CI/CD", level: 85, color: "#06b6d4" },
    { name: "PostgreSQL / MySQL", level: 86, color: "#4ecdc4" },
    { name: "MongoDB", level: 88, color: "#d4a853" },
  ],
};

export const techStack = [
  { category: "Languages", items: ["C++", "Python", "Java", "JavaScript", "TypeScript"] },
  { category: "Web & Backend", items: ["React.js", "Next.js", "Node.js", "Express.js", "REST API"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL", "Vector Databases"] },
  { category: "Gen AI", items: ["RAG", "LLMs", "LangChain", "Vector Search"] },
  { category: "Cloud & DevOps", items: ["AWS (ECR, ECS, EC2, ALB)", "Docker", "Git", "CI/CD pipelines"] },
  { category: "System Architecture", items: ["Scalable Architecture", "High Performance", "Reliability & Resilience", "Observability"] },
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
    badge: "1st / 200+ Teams",
    title: "Innovate 2.0: Hack to Build — National Winner",
    detail: "National level winner among 200+ teams at JIIT Noida 2024. Recognized for technical excellence, architecture, and execution under pressure.",
    year: "2024",
    color: "#ffffff",
  },
  {
    icon: "shield",
    badge: "DRDO Production RAG",
    title: "Secure Hybrid RAG at DRDO",
    detail: "Built a secure Hybrid RAG system at DRDO, now adopted for internal use across centers, with 92.5% retrieval accuracy across 11,000+ pages of confidential documents.",
    year: "2026",
    color: "#ffffff",
  },
  {
    icon: "award",
    badge: "Regional Finalist",
    title: "Google Solution Challenge",
    detail: "Selected for the India Regional Bootcamp in the Google Solution Challenge for impactful problem-solving and software engineering execution.",
    year: "2024",
    color: "#ffffff",
  },
  {
    icon: "code",
    badge: "700+ Solved",
    title: "LeetCode — 700+ DSA Problems",
    detail: "Solved 700+ Data Structures & Algorithms problems across arrays, trees, graphs, and dynamic programming.",
    link: "https://leetcode.com/u/amSaksham",
    linkText: "leetcode.com/u/amSaksham",
    year: "Active",
    color: "#ffffff",
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
