import { skills } from "../../constants/skills";

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

      {skills.map((skillGroup, idx) => (
        <div key={`${skillGroup.name}-${idx}`} className={`${styles.skills_group} ${idx % 2 === 0 ? styles.skills_left : styles.skills_right}`}>
          <span className={styles.skills_group_title}>
            {skillGroup.name}
          </span>

          <div className={styles.skills}>
            {skillGroup.skills.map((skill, idx) => (
              <span key={`${skill}-${idx}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>  
  );
}

export default SkillsContainer;
