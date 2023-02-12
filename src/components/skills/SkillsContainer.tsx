import { useEffect, useRef } from "react";

import { skills } from "../../constants/skills";

import styles from "./SkillsContainer.module.css";

interface ISkillsProps {
  setSectionId(arg: string | undefined): void;
}

const SkillsContainer = ({ setSectionId }: ISkillsProps) => {
  const skillsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setSectionId("skills");
      }
    });

    if (skillsRef?.current) {
      observer.observe(skillsRef.current);
    }
  }, []);

  return (
    <div id="skills" className={styles.container}>
      <span className={styles.title_container}>
        <span className={styles.title_line}></span>
        <span ref={skillsRef} className={styles.title}>
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
