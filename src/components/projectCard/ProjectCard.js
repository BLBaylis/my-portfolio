import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../projectLink/ProjectLink.module.scss'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import {withStyles} from '@material-ui/core/styles'
import {baseVerticalRhythm} from '../../utils/cssVariables'


const newStyles = {
  project : {
  	padding : baseVerticalRhythm,
  	gridColumnStart: "span 2",
  	height : "100%"
  }
}

const ProjectCard = props => {
  const {className, classes} = props
  const { title, thumbnail} = props.project
  return (
    <Card className={classNames(classes.root,
        classes.project,
        className,
      )}>
      <Typography variant="display1" className={styles.heading}>
        {title}
      </Typography>
      <img className={styles.thumbnail} src={thumbnail} />
      {/*<div className={styles.overlay}>
				<h3 className={styles.overlayHeading}>{title}</h3>
				<h4 className={styles.techUsed}>
					
				</h4>
			</div>*/}
      <div className={styles.btnWrapper} />
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(newStyles)(ProjectCard)
