import { motion } from 'framer-motion';
import styles from './TechStack.module.css';

const categories = [
  {
    title: 'Languages',
    gridClass: styles.bentoLanguages,
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', tileClass: styles.tilePython },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', tileClass: styles.tileTypeScript },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', tileClass: styles.tileJavaScript },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', tileClass: styles.tileCpp, isLarge: true },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', tileClass: styles.tileJava, isLarge: true },
    ],
  },
  {
    title: 'Frontend',
    gridClass: styles.bentoFrontend,
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', tileClass: styles.tileReact, isLarge: true },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', tileClass: styles.tileTailwind },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', tileClass: styles.tileHtml },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff', tileClass: styles.tileNext },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', tileClass: styles.tileRedux },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', tileClass: styles.tileCss },
    ],
  },
  {
    title: 'Backend',
    gridClass: styles.bentoBackend,
    skills: [
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', tileClass: styles.tileSpringBoot, isLarge: true },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', tileClass: styles.tileNode },
      { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/ffffff', tileClass: styles.tileExpress },
      { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg', tileClass: styles.tileHibernate },
      { name: 'REST API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', tileClass: styles.tileRestApi },
      { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', tileClass: styles.tileKafka },
    ],
  },
  {
    title: 'Databases',
    gridClass: styles.bentoDatabases,
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', tileClass: styles.tileMongo, isLarge: true },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', tileClass: styles.tileRedis },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', tileClass: styles.tileMysql },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', tileClass: styles.tilePostgres, isLarge: true },
    ],
  },
  {
    title: 'Cloud & DevOps',
    gridClass: styles.bentoCloud,
    skills: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', tileClass: styles.tileDocker },
      { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', tileClass: styles.tileAws },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', tileClass: styles.tileGitCloud, isLarge: true },
      { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', tileClass: styles.tileCicd, isLarge: true },
    ],
  },
  {
    title: 'Tools',
    gridClass: styles.bentoTools,
    skills: [
      { name: 'OpenTelemetry', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opentelemetry/opentelemetry-original.svg', tileClass: styles.tileOtel, isLarge: true },
      { name: 'k6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/k6/k6-original.svg', tileClass: styles.tileK6 },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', tileClass: styles.tileGithub },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', tileClass: styles.tilePostman },
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
            <div className={styles.cardHeader}>
              <span className={styles.headerDot} />
              <h3 className={styles.cardTitle}>{cat.title}</h3>
            </div>

            <div className={cat.gridClass}>
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`${styles.bentoTile} ${skill.tileClass} ${skill.isLarge ? styles.tileLarge : ''}`}
                >
                  <span className={styles.tileDot} />
                  <img src={skill.icon} alt={skill.name} className={styles.tileIcon} />
                  <span className={styles.tileName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
