import React from 'react'
import styles from './Projects.module.scss'
import ProjectGallery from '../projectGallery/ProjectGallery'
import WhiteTypography from '../whiteTypography/WhiteTypography'

const Projects = () => (
  <main id="projects" className={styles.projects}>
    <WhiteTypography variant="display2" className={styles.heading}>
      Projects
    </WhiteTypography>
    <WhiteTypography variant="body1" className={styles.subHeading}>
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
    </WhiteTypography>
    <ProjectGallery />
  </main>
)

/* MOBILE VERSION 

const Projects = () => (
  <main id="projects" className={styles.projects}>
    <WhiteTypography variant="display2" className={styles.heading}>
      Projects
    </WhiteTypography>
    <WhiteTypography variant="body1" className={styles.subHeading}>
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
    </WhiteTypography>
    <div className={styles.projectGallery}>
      <ProjectCard project={projectData.portfolio} class={['project']} />
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
*/

export default Projects
