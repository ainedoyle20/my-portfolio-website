import GithubSVG from "../../assets/projects/github.svg";
import LiveSVG from "../../assets/projects/live.svg";

import { projects } from "../../constants/projects";

import styles from "./ProjectsContainer.module.css";

const ProjectsContainer = () => {
  return (
    <div id="projects" className={styles.container}>
      <span className={styles.title_container}>
        <span className={styles.title}>
          My Projects
        </span>
        <span className={styles.title_line}></span>
      </span>
      
      {/*  Projects  */}
      {projects.map((project, idx) => (
        <div key={project.name} className={`${styles.project} ${idx % 2 === 0 ? styles.project_image_left : styles.project_image_right}`} >
          <div className={`${styles.project_image_container} ${idx % 2 === 0 ? styles.left : styles.right}`}>
            <img
              alt="project cover"
              src={project.cover_image}
              className={styles.project_image}
            />

            <a href={project.sources.live} target="_blank" rel="noreferrer" className={styles.project_image_screen} />
          </div>

          <span className={styles.project_title}>{project.name}</span>

          <p className={styles.project_description}>
            {project.description}
          </p>

          <div className={styles.project_features}>
            {project.features.map(feature => (
              <span key={`${project.name}-${feature}`} className={styles.project_feature}>
                {feature}
              </span>
            ))}
          </div>

          <div className={styles.project_links}>
            <a href={project.sources.github} target="_blank" rel="noreferrer" className={styles.project_link_container}>
              <img 
                alt="project source code"
                src={GithubSVG}
                className={styles.project_link}
              />            
            </a>

            <a href={project.sources.live} target="_blank" rel="noreferrer" className={styles.project_link_container}>
              <img 
                alt="view project live"
                src={LiveSVG}
                className={styles.project_live_link}
              />
            </a>
          </div>
        </div>        
      ))}
    </div>
  );
}

export default ProjectsContainer;
