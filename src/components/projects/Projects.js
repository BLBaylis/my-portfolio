import React from 'react'
import styles from './Projects.module.css'
import ProjectLink from '../projectLink/ProjectLink'
import * as projectData from '../../utils/projectData'

const Projects = () => (
  <main className={styles.projects}>
    <h2 className={styles.heading}>Projects</h2>
    <h4 className={styles.subHeading}>
      All of my project ideas are from{' '}
      <a
      	className = {styles.link}
        href="https://www.freecodecamp.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
      Freecodecamp
      </a>
       {' '}and listed by most recent to least recent.
    </h4>
    <div className={styles.projectGallery}>
      <ProjectLink project={projectData.portfolio} className={styles.project}>
      </ProjectLink>
      <ProjectLink project={projectData.twitch} className={styles.projectAlt}>
      </ProjectLink>
      <ProjectLink project={projectData.calculator} className={styles.project}>
      </ProjectLink>
      <ProjectLink
        project={projectData.ticTacToe}
        className={styles.projectAlt + ' ' + styles.item4}
      >
      </ProjectLink>
      <ProjectLink project={projectData.pomodoro} className={styles.project}>
      </ProjectLink>
    </div>
  </main>
)

export default Projects
