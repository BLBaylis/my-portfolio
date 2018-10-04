import React from 'react'
import * as projectData from '../../utils/projectData'
import styles from './mobileProjectGallery.module.scss'
import ProjectLink from '../projectLink/ProjectLink'

const mobileProjectGallery = () => (
  <div className={styles.mobileProjectGallery}>
    <ProjectLink className={'project'} project={projectData.portfolio} />
    <ProjectLink className={'projectAlt'} project={projectData.twitch} />
    <ProjectLink className={'project'} project={projectData.calculator} />
    <ProjectLink className={'projectAlt'} project={projectData.ticTacToe} />
    <ProjectLink className={'project'} project={projectData.pomodoro} />
  </div>
)

export default mobileProjectGallery
