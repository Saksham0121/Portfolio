import drdoLogo from '../../assets/DRDO_logo.png';
import imarticusLogo from '../../assets/imarticus_logo.png';
import bennettLogo from '../../assets/Bennett_logo.webp';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'DRDO, Ministry of Defence',
    role: 'Artificial Intelligence Intern',
    period: 'May 2026 – Present',
    location: 'Delhi / NCR, India',
    logo: drdoLogo,
    points: [
      'Engineered secure, locally hosted Advanced RAG systems using LLMs, vector databases and embedding models, achieved 92.5% retrieval accuracy on confidential knowledge base benchmarks while reducing query latency by ~40%',
      'Developed Hybrid and Hierarchical RAG architectures with semantic search, keyword retrieval and reranking to improve retrieval',
      'Built scalable document processing pipelines handling 11,000+ pages including chunking, embedding generation, indexing and reduced hallucinations through multistage retrieval',
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

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.header}>
        <h2 className={styles.title}>EXPERIENCE</h2>
        <p className={styles.subtitle}>Where I've worked & trained</p>
      </div>

      <div className={styles.timeline}>
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
      </div>
    </section>
  );
}
