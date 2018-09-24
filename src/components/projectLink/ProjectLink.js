import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectLink.module.scss'
import Typography from '@material-ui/core/Typography'
//import PrimaryAnchor from '../primaryAnchor/PrimaryAnchor'
//import * as Anchor from '../anchor/Anchor'
//import * as Link from '../link/Link'
//import SecondaryLink from '../secondaryLink/SecondaryLink'

const ProjectLink = props => {
  //let projectAlt;
  //if (props.class.includes("projectAlt")){projectAlt = true;}
  let classNames = props.class.map(curr => styles[curr]).join(' ')
  const { title, thumbnail /*tags, projectPageLink, href */ } = props.project
  return (
    <div className={classNames}>
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
    </div>
  )
}

ProjectLink.propTypes = {
  project: PropTypes.object.isRequired,
  class: PropTypes.array,
}

export default ProjectLink
