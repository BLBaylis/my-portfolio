import React from 'react'
import * as projectData from '../../utils/projectData'
import classNames from 'classnames'
import styles from './DesktopProjectGallery.module.scss'
import ProjectCard from '../projectCard/ProjectCard'

const ProjectGallery = () => (
  <div className={styles.projectGallery}>
    <div className={styles.project}>
      <ProjectCard
        direction="right"
        colNo={2}
        project={projectData.portfolio}
      />
      <ProjectCard
        direction="right"
        colNo={3}
        project={projectData.portfolio}
      />
    </div>
    <div className={styles.project}>
      <ProjectCard direction="left" colNo={2} project={projectData.twitch} />
      <ProjectCard direction="up" colNo={3} project={projectData.twitch} />
    </div>
    <div className={styles.project}>
      <ProjectCard
        direction="right"
        colNo={2}
        project={projectData.calculator}
      />
      <ProjectCard
        direction="left"
        colNo={3}
        project={projectData.calculator}
      />
    </div>
    <div className={classNames(styles.project, styles.item4)}>
      <ProjectCard direction="left" colNo={2} project={projectData.ticTacToe} />
      <ProjectCard direction="right" colNo={3} project={projectData.ticTacToe} />
    </div>
    <div className={classNames(styles.project, styles.item5)}>
      <ProjectCard direction="down" colNo={2} project={projectData.pomodoro} />
      <ProjectCard direction="left" colNo={3} project={projectData.pomodoro} />
    </div>
  </div>
)

export default ProjectGallery
