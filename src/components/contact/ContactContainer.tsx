import { useState, FormEvent, useEffect, useRef } from "react";

import styles from "./ContactContainer.module.css";

interface IContactProps {
  setSectionId(arg: string | undefined): void;
}

const ContactContainer = ({ setSectionId }: IContactProps) => {
  const contactRef = useRef<HTMLSpanElement>(null);
  const [ info, setInfo ] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setSectionId("contact");
      }
    });

    if (contactRef?.current) {
      observer.observe(contactRef.current);
    }
  }, []);

  const onChangeHandler = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;

    setInfo({ ...info, [name]: value });
  }

  return (
    <div id="contact" className={styles.container}>
      <span className={styles.title_container}>
        <span ref={contactRef} className={styles.title}>
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
              name="name"
              className={styles.form_input}
              type="text"
              value={info.name}
              onChange={(e) => onChangeHandler(e)}
            />

            <label htmlFor="email" className={styles.form_label}>Your Email</label>
            <input 
              className={styles.form_input}
              id="email"
              name="email"
              type="email"
              value={info.email}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>

          <div className={styles.contact_form_textarea_container}>
            <label htmlFor="message" className={styles.textarea_label}>Your Message</label>
            <textarea 
              className={styles.form_textarea}
              id="message"
              name="message"
              value={info.message}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>

        </div>

        <div className={styles.submit_btn}>
          Submit

          <div className={styles.submit_btn_screen} />
        </div>
      </div>
    </div>
  )
}

export default ContactContainer;
