import styles from "./SkillsContainer.module.css";

const SkillsContainer = () => {
  return (
    <div id="skills" className={styles.container}>
      <span className={styles.title_container}>
      <span className={styles.title_line}></span>
        <span className={styles.title}>
          My Skills
        </span>
      </span>
    </div>
  );
}

export default SkillsContainer;
