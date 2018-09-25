import React from 'react'
import PropTypes from 'prop-types'
import styles from '../projectCard/ProjectCard.module.scss'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Link from 'gatsby-link'

const ProjectCard = props => {
  const { title, thumbnail, href, projectPageLink } = props.project
  return (
    <Card className={styles.projectCard}>
      <Typography variant="display1">{title}</Typography>
      <a href={href}>
        <img className={styles.thumbnail} src={thumbnail} />
      </a>
      {/*<div className={styles.overlay}>
      		<h3 className={styles.overlayHeading}>{title}</h3>
      		<h4 className={styles.techUsed}>
      					
      		</h4>
      	  </div>*/}
      <div className={styles.btnWrapper}>
        <Button
          variant="outlined"
          size="large"
          href={href}
          className={styles.outlinedBtn}
        >
          VISIT
        </Button>
        <Button
          component={Link}
          to={`/${projectPageLink}`}
          className={styles.btn}
          variant="text"
          size="large"
        >
          DETAILS
        </Button>
      </div>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default ProjectCard
