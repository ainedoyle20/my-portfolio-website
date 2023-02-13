import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a className={styles.inspired_by} href="https://brittanychiang.com/" target="_blank" rel="noreferrer">
        Design Inspiration: Brittany Chiang Website
      </a>

      <span className={styles.built_by}>
        Built by Aine Doyle (Me)
      </span>
    </div>
  )
}

export default Footer;
