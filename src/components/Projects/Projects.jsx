import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    number: '01',
    name: 'Parakh',
    subtitle: 'Enterprise Algorithmic Trading Platform',
    description: 'High-throughput event-driven trading and backtesting platform built as a 9-service NestJS microservices architecture. Processes real-time market streams through Kafka, calculates technical indicators with TimescaleDB, combines technical and fundamental trading conditions, and delivers real-time alerts with horizontally scalable infrastructure, fault tolerance, and distributed observability.',
    tags: ['NestJS', 'TypeScript', 'Kafka', 'TimescaleDB', 'PostgreSQL', 'Redis', 'Docker', 'OpenTelemetry'],
    highlights: ['9 Microservices', 'Event-Driven Architecture', 'Real-Time Market Data', 'High-Throughput Pipelines', 'Distributed Tracing'],
    link: 'https://github.com/Saksham0121/Parakh',
    year: '2026',
  },
  {
    number: '02',
    name: 'Askra AI',
    subtitle: '7-Layer Agentic RAG System',
    description: 'Enterprise AI platform built around a 7-layer agentic pipeline for grounded knowledge retrieval and multimodal document understanding. Combines query rewriting, FAISS + BM25 hybrid retrieval, cross-encoder reranking, LLM-as-judge validation, reflection-based self-correction, and local OCR to deliver citation-backed responses with confidence scoring.',
    tags: ['FastAPI', 'React', 'LangChain', 'Groq', 'FAISS', 'BM25', 'MongoDB', 'SSE'],
    highlights: ['7-Layer Agentic RAG', 'Hybrid Retrieval + Reranking', 'LLM Self-Correction', 'Local Multimodal OCR', 'RBAC + JWT'],
    link: 'https://github.com/Saksham0121/AI_knowlege_assistant',
    year: '2026',
},
  {
    number: '03',
    name: 'Social-ish',
    subtitle: 'Social Platform for Introverts',
    description: 'A full-stack social platform with interest-based matching and real-time WebSocket chat. Features an AI chatbot powered by the Gemini API with custom prompt engineering for personalized conversation support. Secured with JWT-based REST API and built for users who prefer meaningful, low-pressure social interaction.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'WebSocket', 'Gemini API', 'JWT'],
    highlights: ['Real-time Chat', 'Interest Matching', 'AI Chatbot', 'Full-Stack'],
    link: 'https://github.com/Saksham0121/Social-ish',
    year: '2025',
  },
  {
    number: '04',
    name: 'Planit',
    subtitle: 'Event Planner & Management Platform',
    description: 'A Next.js-powered event planning and management web application. Enables users to create, organize, and manage events with a clean and intuitive interface. Built with modern full-stack Next.js architecture for seamless server-side rendering and fast page loads.',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    highlights: ['Event Management', 'SSR with Next.js', 'Full-Stack', 'Modern UI'],
    link: 'https://github.com/Saksham0121/Planit',
    year: '2025',
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <h2 className={styles.title}>MY PROJECTS</h2>
        <p className={styles.subtitle}>Things I've built</p>
      </div>


      <div className={styles.grid}>
        {projects.map((p, i) => (
          <motion.a
            key={p.number}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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

      <div className={styles.bottomBar}>
        <motion.a
          href="https://github.com/Saksham0121"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubBtn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -2 }}
        >
          <Github size={16} className={styles.githubIcon} />
          <span>More Projects on GitHub</span>
          <ArrowUpRight size={14} className={styles.btnArrow} />
        </motion.a>
      </div>
    </section>
  );
}
