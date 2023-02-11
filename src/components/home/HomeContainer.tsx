import styles from "./HomeContainer.module.css";

interface IHomeProps {
  setSectionId(arg: string | undefined): void;
}

const HomeContainer = ({ setSectionId }: IHomeProps) => {
  return (
    <div id="home" className={styles.container}>
      <span className={styles.greeting}>Hi, my name is</span>
      <span className={styles.name}>Aine Doyle.</span>
      <span className={styles.occupation}>I build web applications.</span>

      <p className={styles.about}>
        I'm a front-end web developer building web applications using React JS (and also Next JS).
      </p>

      <div className={styles.view_projects_btn_bg}>
        <a href="#projects" onClick={() => setSectionId("projects")} className={styles.view_projects_btn}>
          View My Projects!
        </a>        
      </div>

    </div>
  );
}

export default HomeContainer;
