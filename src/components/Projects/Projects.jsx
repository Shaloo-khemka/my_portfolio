import React from 'react'
import projects from "../../data/projects.json"
import styles from './Projects.module.css';
import { getImageUrl } from '../../utils';

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {
          projects.map((project, id) => {
            return (
              <div key={id} className={styles.content}>
                <img src={getImageUrl(project.imageSrc)} alt="Image" className={styles.image} />
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.skills}>
                  {project.skills.map((skill, idx) => (
                    <li key={idx} className={styles.skill}>{skill}</li>
                  ))}
                </ul>
                <div className={styles.links}>
                  {/* <a href={project.demo} className={styles.link}>Demo</a> */}
                  <a href={project.source} className={styles.link}>Source</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
