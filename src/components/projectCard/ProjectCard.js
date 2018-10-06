import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectCard.module.scss'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CustomButton from '../customButton/CustomButton'
import ProjectOverlay from '../projectOverlay/ProjectOverlay'
import Link from 'gatsby-link'

const ProjectCard = props => {
  const { title, href, projectPageLink } = props.project
  const { direction, colNo } = props
  return (
    <Card className={styles[`projectCard${colNo}Col`]}>
      <Typography variant="display1">{title}</Typography>
      <ProjectOverlay {...props.project} direction={direction} />
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
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']).isRequired,
  colNo: PropTypes.oneOf([2, 3]).isRequired,
  className: PropTypes.string,
}

export default ProjectCard
