import { motion } from 'framer-motion';
import {
  Globe,
  Layers,
  Bot,
  ScanSearch,
  Workflow,
  Zap,
  ShieldCheck,
  Activity,
  DatabaseZap,
} from 'lucide-react';
import styles from './TechStack.module.css';

const categories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', fullWidth: true },
    ],
  },
  {
    title: 'Web & Backend',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/ffffff' },
      { name: 'REST API', iconComponent: Globe, fullWidth: true },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Vector Databases', iconComponent: DatabaseZap },
    ],
  },
  {
    title: 'Gen AI',
    skills: [
      { name: 'RAG', iconComponent: Layers },
      { name: 'LLMs', iconComponent: Bot },
      { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/ffffff' },
      { name: 'Vector Search', iconComponent: ScanSearch },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      {
        name: 'AWS',
        subtitle: 'ECR · ECS · EC2 · ALB',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'CI/CD Pipelines', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    ],
  },
  {
    title: 'System Architecture',
    skills: [
      { name: 'Scalable Architecture', iconComponent: Workflow },
      { name: 'High Performance', iconComponent: Zap },
      { name: 'Reliability & Resilience', iconComponent: ShieldCheck },
      { name: 'Observability', iconComponent: Activity },
    ],
  },
];

export default function TechStack() {
  return (
    <section className={styles.section} id="tech-stack">
      <div className={styles.header}>
        <h2 className={styles.title}>Tech Stack</h2>
        <p className={styles.subtitle}>Technologies & Architecture I Work With</p>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className={styles.cardTitle}>{cat.title}</h3>
            <div className={styles.tilesGrid}>
              {cat.skills.map((skill) => {
                const tileClass = skill.fullWidth ? `${styles.tile} ${styles.tileFullWidth}` : styles.tile;
                const IconComp = skill.iconComponent;

                return (
                  <div key={skill.name} className={tileClass}>
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className={styles.tileIcon} />
                    ) : (
                      IconComp && <IconComp className={styles.tileIconSvg} />
                    )}
                    <span className={styles.tileName}>{skill.name}</span>
                    {skill.subtitle && <span className={styles.tileSubtitle}>{skill.subtitle}</span>}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
