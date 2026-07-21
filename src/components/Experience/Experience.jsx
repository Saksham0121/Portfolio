import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import drdoLogo from '../../assets/DRDO_logo.png';
import imarticusLogo from '../../assets/imarticus_logo.png';
import bennettLogo from '../../assets/Bennett_logo.webp';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'DRDO, Ministry of Defence',
    role: 'Generative AI Intern',
    period: 'May 2026 – Present',
    location: 'Delhi / NCR, India',
    logo: drdoLogo,
    points: [
      'Engineered secure, locally hosted Advanced RAG systems using LLMs, vector databases and embedding models, achieved 92.5% retrieval accuracy on confidential knowledge base benchmarks while reducing query latency by ~40%',
      'Developed Hybrid and Hierarchical RAG architectures with semantic search, keyword retrieval and reranking to improve retrieval',
      'Built scalable document processing pipelines handling 11,000+ pages including chunking, embedding generation, indexing and reduced hallucinations through multistage retrieval',
      'Currently being used by DRDO centers nationwide',
    ],
    tags: ['Advanced RAG', 'LLMs', 'Vector DBs', 'Python', 'FastAPI', 'Semantic Search'],
  },
  {
    company: 'Imarticus Learning',
    role: 'Data Analyst Intern',
    period: 'Jun 2025 – Jul 2025',
    location: 'India',
    logo: imarticusLogo,
    points: [
      'Led a team of 5 analysts to develop interactive dashboards delivering key business insights to stakeholders',
      'Analyzed 50,000+ row business datasets using MySQL, Python and Power BI to extract actionable insights',
      'Visualized insights using Matplotlib and Seaborn for weekly stakeholder reports',
    ],
    tags: ['Data Analysis', 'Power BI', 'MySQL', 'Python', 'Matplotlib', 'Seaborn'],
  },
  {
    company: 'Bennett University (IQAC)',
    role: 'IQAC Intern',
    period: 'Sep 2023 – Nov 2023 · 3 mos',
    location: 'Noida, Uttar Pradesh, India · On-site',
    logo: bennettLogo,
    points: [
      'Developed 4 interactive Power BI dashboards to track academic quality metrics, reducing data analysis time for the administration by 20 percent.',
      'Contributed to data audit frameworks used in internal evaluations presented to the University\'s top administration.',
    ],
    tags: ['Power BI', 'Data Audit', 'Dashboards', 'Analytics'],
  },
];

const educationList = [
  {
    institution: 'Bennett University',
    degree: 'Bachelor of Technology in Computer Science Engineering (B.Tech CSE)',
    period: 'Aug 2023 – Jun 2027',
    location: 'Noida, India',
    logo: bennettLogo,
    grade: 'CGPA: 8.72 / 10.0',
    points: [
      'Specializing in Artificial Intelligence, Machine Learning, and Software Engineering',
      'National Winner at Innovate 2.0 Hackathon among 200+ competing teams',
      'Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOPs), Operating Systems, Database Management Systems (DBMS), Computer Networks, System Design',
    ],
    tags: ['B.Tech CSE', 'CGPA 8.72', 'AI & ML', 'DSA', 'DBMS', 'System Design'],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work'); // 'work' | 'education'

  return (
    <section className={styles.section} id="experience">
      <div className={styles.header}>
        <div className={styles.headerRow}>
          <div>
            <h2 className={styles.title}>EXPERIENCE & EDUCATION</h2>
            <p className={styles.subtitle}>My Professional Journey & Academic Background</p>
          </div>

          {/* Toggle Tabs */}
          <div className={styles.tabContainer}>
            <button
              onClick={() => setActiveTab('work')}
              className={`${styles.tabBtn} ${activeTab === 'work' ? styles.activeTab : ''}`}
            >
              <span>WORK EXPERIENCE</span>
              {activeTab === 'work' && (
                <motion.div
                  className={styles.tabIndicator}
                  layoutId="expTabIndicator"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`${styles.tabBtn} ${activeTab === 'education' ? styles.activeTab : ''}`}
            >
              <span>EDUCATION</span>
              {activeTab === 'education' && (
                <motion.div
                  className={styles.tabIndicator}
                  layoutId="expTabIndicator"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>
      </div>


      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'work' ? (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={styles.timeline}
          >
            {experiences.map((exp, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.companyInfo}>
                    <div className={styles.logoWrapper}>
                      <img src={exp.logo} alt={exp.company} className={styles.logo} />
                    </div>
                    <div>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <p className={styles.role}>{exp.role}</p>
                    </div>
                  </div>
                  <div className={styles.metaInfo}>
                    <span className={styles.period}>{exp.period}</span>
                    {exp.location && <span className={styles.location}>{exp.location}</span>}
                  </div>
                </div>

                <ul className={styles.bulletList}>
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className={styles.bulletItem}>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {exp.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={styles.timeline}
          >
            {educationList.map((edu, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.companyInfo}>
                    <div className={styles.logoWrapper}>
                      <img src={edu.logo} alt={edu.institution} className={styles.logo} />
                    </div>
                    <div>
                      <h3 className={styles.company}>{edu.institution}</h3>
                      <p className={styles.role}>{edu.degree}</p>
                    </div>
                  </div>
                  <div className={styles.metaInfo}>
                    <span className={styles.period}>{edu.period}</span>
                    <span className={styles.gradeBadge}>{edu.grade}</span>
                  </div>
                </div>

                <ul className={styles.bulletList}>
                  {edu.points.map((pt, pIdx) => (
                    <li key={pIdx} className={styles.bulletItem}>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {edu.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
