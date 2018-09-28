import React from 'react'
import PropTypes from 'prop-types'
import styles from '../projectCard/ProjectCard.module.scss'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CustomButton from '../customButton/CustomButton'
import ProjectOverlay from '../projectOverlay/ProjectOverlay'
import Link from 'gatsby-link'

const ProjectCard = props => {
  const { title, href, projectPageLink } = props.project
  return (
    <Card className={styles.projectCard}>
      <Typography variant="display1">{title}</Typography>
      <ProjectOverlay {...props.project} />
      <div className={styles.btnWrapper}>
        <CustomButton variant="outlined" size="large" href={href}>
          VISIT
        </CustomButton>
        <CustomButton
          component={Link}
          to={`/${projectPageLink}`}
          variant="text"
          size="large"
        >
          DETAILS
        </CustomButton>
      </div>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default ProjectCard
