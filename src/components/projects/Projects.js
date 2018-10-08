import React from 'react'
import styles from './Projects.module.scss'
import MobileProjectGallery from '../mobileProjectGallery/MobileProjectGallery'
import DesktopProjectGallery from '../desktopProjectGallery/DesktopProjectGallery'
import WhiteTypography from '../whiteTypography/WhiteTypography'

const Projects = () => (
  <main id="projects" className={styles.projects}>
    <WhiteTypography variant="display2" gutterBottom>
      Projects
    </WhiteTypography>
    <WhiteTypography variant="body1">
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
    <MobileProjectGallery />
    <DesktopProjectGallery />
  </main>
)

export default Projects
