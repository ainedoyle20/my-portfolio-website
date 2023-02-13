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


      <div className={styles.contact_details}>
        <a href="mailto:ainedoyleAD@gmail.com" className={styles.contact_detail_link}>ainedoyleAD@gmail.com</a>
        <span className={styles.contact_detail}>083 807 4866</span>
        <a className={styles.contact_detail_link} href="" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>


      <p className={styles.final_message}>
        {`
          I am currently looking for a front-end web developer job with a focus on React JS (or Next JS).
          If you like what you see please feel free to conact me via the methods above.
          You can check out more of my projects on my Github Profile.
        `}
      </p>

      <a href="mailto:ainedoyleAD@gmail.com" className={styles.say_hello_btn}>
        Contact Me
        <div className={styles.say_hello_btn_screen} /> 
      </a>   

    </div>
  );
}

export default ContactContainer;
