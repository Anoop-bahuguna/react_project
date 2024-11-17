import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo },
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
