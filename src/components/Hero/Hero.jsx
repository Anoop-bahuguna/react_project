import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi I'm Anoop</h1>
        <p className={styles.description}>
          I am a Full Stack Developer with expertise in both front-end and
          back-end technologies, building responsive web applications with
          seamless user experiences.
        </p>
        <a className={styles.contactBtn} href="mailto:anup56.ab@gmail.com">
          Contact Me
        </a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/hero.png")} alt="hero-image" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
