import { useState, useEffect } from "react";
import GithubSVG from "../assets/header/github.svg";
import LinkedInSVG from "../assets/header/linkedin.svg";

import styles from "./Header.module.css";

interface IHeaderProps {
  sectionId: string | undefined;
}

const Header = ({ sectionId }: IHeaderProps) => {
  
  return (
    <header className={styles.header}>
      <div className={styles.socials}>
        <a href="https://github.com/ainedoyle20" target="_blank" rel="noreferrer">
          <img 
            alt="github"
            src={GithubSVG}
            className={styles.social}
          />
        </a>

        <a href="https://github.com/ainedoyle20" target="_blank" rel="noreferrer">
          <img 
            alt="linkedIn"
            src={LinkedInSVG}
            className={styles.social_linkedIn}
          />
        </a>

      </div>

      <div className={styles.section_links}>
        <a href="#home" className={`${sectionId === "home" || sectionId === undefined ? styles.section_link_active : ""} ${styles.section_link}`}>
          Home
        </a>
        <a href="#projects" className={`${sectionId === "projects" ? styles.section_link_active : ""} ${styles.section_link}`}>
          Projects
        </a>
        <a href="#skills" className={`${sectionId === "skills" ? styles.section_link_active : ""} ${styles.section_link}`}>
          Skills
        </a>
        <a href="#contact" className={`${sectionId === "contact" ? styles.section_link_active : ""} ${styles.section_link}`}>
          Contact
        </a>
      </div>

    </header>
  );
}

export default Header;
