import styles from "./ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <div id="contact" className={styles.container}>
      <span className={styles.title_container}>
        <span className={styles.title}>
          Contact Me
        </span>
        <span className={styles.title_line}></span>
      </span>

      <div className={styles.contact_methods_container}>
        <div className={styles.contact_details}>
          <span className={styles.contact_detail}>ainedoyleAD@gmail.com</span>
          <span className={styles.contact_detail}>083 807 4866</span>
          <a className={styles.contact_detail} href="" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <span className={styles.or_option}>OR</span>

        <div className={styles.contact_form}>

          <div className={styles.contact_form_inputs}>
            <label htmlFor="yourName" className={styles.form_label}>Your Name</label>
            <input 
              id="yourName"
              className={styles.form_input}
              type="text"
              value=""
              onChange={() => {}}
            />

            <label htmlFor="email" className={styles.form_label}>Your Email</label>
            <input 
              className={styles.form_input}
              id="email"
              type="email"
              value=""
              onChange={() => {}}
            />
          </div>

          <div className={styles.contact_form_textarea_container}>
            <label htmlFor="message" className={styles.textarea_label}>Your Message</label>
            <textarea 
              className={styles.form_textarea}
              id="message"
              value=""
              onChange={() => {}}
            />
          </div>

        </div>
      </div>

      <div className={styles.submit_btn}>
        Submit

        <div className={styles.submit_btn_screen} />
      </div>
    </div>
  )
}

export default ContactContainer;
