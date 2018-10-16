import React from 'react'
import * as projectData from '../../utils/projectData'
import styles from './mobileProjectGallery.module.scss'
import ProjectLink from '../projectLink/ProjectLink'
import Fade from 'react-reveal/Fade'

const mobileProjectGallery = () => (
  <div className={styles.mobileProjectGallery}>
    <Fade left>
      <ProjectLink className={'project'} project={projectData.twitch} />
    </Fade>
    <Fade right>
      <ProjectLink className={'projectAlt'} project={projectData.portfolio} />
    </Fade>
    <Fade left>
      <ProjectLink className={'project'} project={projectData.calculator} />
    </Fade>
    <Fade right>
      <ProjectLink className={'projectAlt'} project={projectData.ticTacToe} />
    </Fade>
    <Fade left>
      <ProjectLink className={'project'} project={projectData.pomodoro} />
    </Fade>
  </div>
)

export default mobileProjectGallery
