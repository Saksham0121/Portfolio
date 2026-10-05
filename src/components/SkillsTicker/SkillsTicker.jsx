import { motion } from 'framer-motion';
import styles from './SkillsTicker.module.css';

const row1 = [
  'Python', 'C++', 'Java', 'JavaScript', 'TypeScript',
  'React.js', 'Next.js', 'Node.js', 'Express.js', 'REST API',
  'RAG', 'LLMs', 'LangChain', 'Prompt Engineering', 'ChromaDB',
];

const row2 = [
  'AWS (ECR / ECS / EC2)', 'Docker', 'Git', 'CI/CD Pipelines',
  'Vector Search', 'Semantic Search', 'Embedding Models', 'Vector Databases',
  'PostgreSQL', 'MongoDB', 'MySQL', 'System Design', 'Data Structures & Algorithms',
  'Postman', 'Power BI', 'Figma',
];

function TickerRow({ items, direction = 'left' }) {
  const doubled = [...items, ...items];
  return (
    <div className={styles.row}>
      <div className={`${styles.track} ${direction === 'right' ? styles.trackRight : styles.trackLeft}`}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsTicker() {
  return (
    <motion.section
      className={styles.section}
      id="skills-ticker"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className={styles.title}>Skills I Practice</p>
      <TickerRow items={row1} direction="left" />
      <TickerRow items={row2} direction="right" />
    </motion.section>
  );
}
