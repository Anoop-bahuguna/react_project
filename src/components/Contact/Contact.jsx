import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

import React from "react";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:anup56.ab@gmail.com">anup56.ab@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
          <a href="https://www.linkedin.com/in/anoop-b-22326a20a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            linkedin.com/Anoop Bahuguna
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon" />
          <a href="https://github.com/Anoop-bahuguna">
            github.com/Anoop-bahuguna
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
