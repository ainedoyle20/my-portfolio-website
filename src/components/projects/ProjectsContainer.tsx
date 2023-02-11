import GithubSVG from "../../assets/projects/github.svg";
import LiveSVG from "../../assets/projects/live.svg";
import DoyleClothingPNG from "../../assets/projects/doyle-clothing.png";

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
      
      {/* Project 1 */}
      <div className={`${styles.project} ${styles.project_image_left}`}>
        <div className={`${styles.project_image_container} ${styles.left}`}>
          <img
            alt="project cover"
            src={DoyleClothingPNG}
            className={styles.project_image}
          />

          <a href="" className={styles.project_image_screen}>

          </a>
        </div>


          <span className={styles.project_title}>Project Title</span>
          <p className={styles.project_description}>
            Sed et pharetra ipsum. Aliquam volutpat risus sed ipsum convallis porta. 
            Donec et euismod nibh. Vivamus lacinia nulla eu erat mattis consectetur. 
            Pellentesque nec lectus id lectus condimentum lacinia quis et sapien.
          </p>

          <div className={styles.project_features}>
            <span className={styles.project_feature}>Tailwind CSS</span>
            <span className={styles.project_feature}>React JS</span>
            <span className={styles.project_feature}>TypeScript</span>
            <span className={styles.project_feature}>Redux</span>
            <span className={styles.project_feature}>Firebase</span>
          </div>

          <div className={styles.project_links}>
            <a href="" className={styles.project_link_container}>
              <img 
                alt="project source code"
                src={GithubSVG}
                className={styles.project_link}
              />            
            </a>

            <a href="" className={styles.project_link_container}>
              <img 
                alt="project source code"
                src={LiveSVG}
                className={styles.project_live_link}
              />
            </a>
          </div>
      </div>

      {/* Project 2 */}
      <div className={`${styles.project} ${styles.project_image_right}`}>
        <div className={`${styles.project_image_container} ${styles.right}`}>
          <img
            alt="project cover"
            src={DoyleClothingPNG}
            className={styles.project_image}
          />

          <a href="" className={styles.project_image_screen}>

          </a>
        </div>


          <span className={styles.project_title}>Project Title</span>
          <p className={styles.project_description}>
            Sed et pharetra ipsum. Aliquam volutpat risus sed ipsum convallis porta. 
            Donec et euismod nibh. Vivamus lacinia nulla eu erat mattis consectetur. 
            Pellentesque nec lectus id lectus condimentum lacinia quis et sapien.
          </p>

          <div className={styles.project_features}>
            <span className={styles.project_feature}>Tailwind CSS</span>
            <span className={styles.project_feature}>React JS</span>
            <span className={styles.project_feature}>TypeScript</span>
            <span className={styles.project_feature}>Redux</span>
            <span className={styles.project_feature}>Firebase</span>
          </div>

          <div className={styles.project_links}>
            <a href="" className={styles.project_link_container}>
              <img 
                alt="project source code"
                src={GithubSVG}
                className={styles.project_link}
              />            
            </a>

            <a href="" className={styles.project_link_container}>
              <img 
                alt="project source code"
                src={LiveSVG}
                className={styles.project_live_link}
              />
            </a>
          </div>
      </div>

      {/* Project 3 */}
      <div className={`${styles.project} ${styles.project_image_left}`}>
        <div className={`${styles.project_image_container} ${styles.left}`}>
          <img
            alt="project cover"
            src={DoyleClothingPNG}
            className={styles.project_image}
          />

          <a href="" className={styles.project_image_screen}>

          </a>
        </div>


          <span className={styles.project_title}>Project Title</span>
          <p className={styles.project_description}>
            Sed et pharetra ipsum. Aliquam volutpat risus sed ipsum convallis porta. 
            Donec et euismod nibh. Vivamus lacinia nulla eu erat mattis consectetur. 
            Pellentesque nec lectus id lectus condimentum lacinia quis et sapien.
          </p>

          <div className={styles.project_features}>
            <span className={styles.project_feature}>Tailwind CSS</span>
            <span className={styles.project_feature}>React JS</span>
            <span className={styles.project_feature}>TypeScript</span>
            <span className={styles.project_feature}>Redux</span>
            <span className={styles.project_feature}>Firebase</span>
          </div>

          <div className={styles.project_links}>
            <a href="" className={styles.project_link_container}>
              <img 
                alt="project source code"
                src={GithubSVG}
                className={styles.project_link}
              />            
            </a>

            <a href="" className={styles.project_link_container}>
              <img 
                alt="project source code"
                src={LiveSVG}
                className={styles.project_live_link}
              />
            </a>
          </div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
