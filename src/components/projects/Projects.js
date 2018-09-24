import React from 'react'
import styles from './Projects.module.scss'
import ProjectLink from '../projectLink/ProjectLink'
import * as projectData from '../../utils/projectData'
import Typography from '@material-ui/core/Typography'

const Projects = () => (
  <main id="projects" className={styles.projects}>
    <Typography variant="display2" className={styles.heading}>
      Projects
    </Typography>
    <Typography variant="title" className={styles.subHeading}>
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
    </Typography>
    <div className={styles.projectGallery}>
      <ProjectLink project={projectData.portfolio} class={['project']} />
      <ProjectLink project={projectData.twitch} class={['projectAlt']} />
      <ProjectLink project={projectData.calculator} class={['project']} />
      <ProjectLink
        project={projectData.ticTacToe}
        class={['projectAlt', 'item4']}
      />
      <ProjectLink
        project={projectData.pomodoro}
        class={['project', 'item5']}
      />
    </div>
  </main>
)

export default Projects
