import React from 'react'
import styles from './Projects.module.scss'
import ProjectLink from '../projectLink/ProjectLink'
import * as projectData from '../../utils/projectData'

const Projects = () => (
  <main id="projects" className={styles.projects}>
    <h2 className={styles.heading}>Projects</h2>
    <p className={styles.subHeading}>
      All of my project ideas are from{' '}
      <a
        className={styles.link}
        href="https://www.freecodecamp.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Freecodecamp
      </a>{' '}
      and listed by most recent to least recent.
    </p>
    <div className={styles.projectGallery}>
      <ProjectLink project={projectData.portfolio} class={['project']} />
      <ProjectLink project={projectData.twitch} class={['projectAlt']} />
      <ProjectLink project={projectData.calculator} class={['project']} />
      <ProjectLink
        project={projectData.ticTacToe}
        class={['projectAlt', 'item4']}
      />
      <ProjectLink project={projectData.pomodoro} class={['project']} />
    </div>
  </main>
)

export default Projects
