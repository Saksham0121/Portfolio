import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
 {
  number: '01',
  name: 'Parakh',
  subtitle: 'Event-Driven Algorithmic Trading Platform',
  description: 'Event-driven trading and backtesting platform built as a 9-microservices architecture. Ingests real-time market data through Kafka, calculates technical indicators (SMA, EMA, RSI, MACD) on live ticks into TimescaleDB, and combines technical and fundamental conditions to trigger real-time alerts. Circuit breakers protect against third-party API outages, and OpenTelemetry traces requests across HTTP services. Gateway p95 latency dropped from ~1.5s to 113ms at 100 concurrent users (~1,470 req/s, k6) using PgBouncer pooling, HTTP keep-alive, and short-TTL Redis caching across 3 Nginx-balanced replicas.',
  tags: ['NestJS', 'TypeScript', 'Kafka', 'TimescaleDB', 'PostgreSQL', 'Redis', 'Docker', 'OpenTelemetry'],
  highlights: ['9 Microservices', 'Event-Driven Architecture', 'p95 113ms at 100 Users', 'Circuit Breakers', 'Distributed Tracing'],
  link: 'https://github.com/Saksham0121/Parakh',
  year: '2026',
},
{
  number: '02',
  name: 'Askra AI',
  subtitle: '7-Layer Agentic RAG System',
  description: 'Agentic RAG platform for private-document Q&A built around a 7-layer pipeline. Combines query rewriting, concurrent FAISS + BM25 hybrid retrieval with cross-encoder reranking, LLM-as-judge validation, reflection-based self-correction, and local OCR for scanned PDFs, returning citation-backed answers with confidence scores. Raised answer accuracy from 68% to 92% over a baseline RAG on a ground-truth QA benchmark (LLM-judged), with 354ms P95 TTFT on retrieval, ~100ms TTFT streaming from Groq over SSE, JWT auth, and department-level RBAC.',
  tags: ['FastAPI', 'React', 'LangChain', 'Groq', 'FAISS', 'BM25', 'MongoDB', 'SSE'],
  highlights: ['68% → 92% Accuracy', 'Hybrid Retrieval + Reranking', 'LLM Self-Correction', 'Local Multimodal OCR', 'RBAC + JWT'],
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
