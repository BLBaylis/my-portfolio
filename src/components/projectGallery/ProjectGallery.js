import React from 'react'
import * as projectData from '../../utils/projectData'
import classNames from 'classnames'
import styles from '../projectGallery/ProjectGallery.module.scss'
import ProjectCard from '../projectCard/ProjectCard'

const ProjectGallery = () => (
  <div className={styles.projectGallery}>
    <div className={styles.project}>
      <ProjectCard project={projectData.portfolio} />
    </div>
    <div className={styles.project}>
      <ProjectCard project={projectData.twitch} />
    </div>
    <div className={styles.project}>
      <ProjectCard project={projectData.calculator} />
    </div>
    <div className={classNames(styles.project, styles.item4)}>
      <ProjectCard project={projectData.ticTacToe} />
    </div>
    <div className={classNames(styles.project, styles.item5)}>
      <ProjectCard project={projectData.pomodoro} />
    </div>
  </div>
)

export default ProjectGallery
