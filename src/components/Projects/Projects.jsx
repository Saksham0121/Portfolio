import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    number: '01',
    name: 'InsightFlow AI',
    subtitle: 'Enterprise RAG Knowledge Assistant',
    description: 'Production-grade internal knowledge assistant that enables organizations to upload documents and ask natural language questions. Uses a multi-stage Advanced RAG pipeline with hybrid retrieval (FAISS semantic + BM25 keyword), cross-encoder reranking, and Gemini-powered query rewriting — delivering citation-backed answers grounded in the enterprise knowledge base.',
    tags: ['FastAPI', 'React', 'Gemini API', 'FAISS', 'MongoDB', 'LangChain', 'RBAC'],
    highlights: ['Hybrid Retrieval', 'Cross-Encoder Reranking', 'RBAC + JWT', 'Real-time SSE Streaming'],
    link: 'https://github.com/Saksham0121/AI_knowlege_assistant',
    year: '2026',
  },
  {
    number: '02',
    name: 'Social-ish',
    subtitle: 'Social Platform for Introverts',
    description: 'A full-stack social platform with interest-based matching and real-time WebSocket chat. Features an AI chatbot powered by the Gemini API with custom prompt engineering for personalized conversation support. Secured with JWT-based REST API and built for users who prefer meaningful, low-pressure social interaction.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'WebSocket', 'Gemini API', 'JWT'],
    highlights: ['Real-time Chat', 'Interest Matching', 'AI Chatbot', 'Full-Stack'],
    link: 'https://github.com/Saksham0121/Social-ish',
    year: '2025',
  },
  {
    number: '03',
    name: 'Planit',
    subtitle: 'Event Planner & Management Platform',
    description: 'A Next.js-powered event planning and management web application. Enables users to create, organize, and manage events with a clean and intuitive interface. Built with modern full-stack Next.js architecture for seamless server-side rendering and fast page loads.',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    highlights: ['Event Management', 'SSR with Next.js', 'Full-Stack', 'Modern UI'],
    link: 'https://github.com/Saksham0121/Planit',
    year: '2025',
  },
  {
    number: '04',
    name: 'Customer Segmentation',
    subtitle: 'ML Clustering for Investment Banking',
    description: 'Machine learning-based customer segmentation for investment banking clients. Uses K-Means clustering and RFM (Recency, Frequency, Monetary) analysis on demographic and investment data to identify high-value and at-risk clients — enabling targeted retention strategies and personalized financial services.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'K-Means', 'RFM Analysis', 'Matplotlib'],
    highlights: ['K-Means Clustering', 'RFM Analysis', '1200+ Clients', '25% Churn Reduction'],
    link: 'https://github.com/Saksham0121/Customer_Segmentation',
    year: '2024',
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.title}>MY PROJECTS</h2>
        <p className={styles.subtitle}>Things I've built</p>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <motion.a
            key={p.number}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.cardTop}>
              <span className={styles.num}>{p.number}</span>
              <span className={styles.year}>{p.year}</span>
            </div>

            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.cardSubtitle}>{p.subtitle}</p>
            <p className={styles.desc}>{p.description}</p>

            <div className={styles.highlights}>
              {p.highlights.map((h) => (
                <span key={h} className={styles.highlight}>{h}</span>
              ))}
            </div>

            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>

            <div className={styles.arrow}>↗</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
