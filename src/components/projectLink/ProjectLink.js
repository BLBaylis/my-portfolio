import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styles from './ProjectLink.module.css'

const ProjectLink = (props) => {
	const {title, thumbnail, /*tags,*/ projectPageLink} = props.project;
	return (
		<Link to={`/${projectPageLink}/`} className={styles.project}>
			<img className={styles.thumbnail} src={thumbnail} />
			<div className={styles.overlay}>
				<h3 className={styles.overlayHeading}>{title}</h3>
				<h4 className={styles.techUsed}>
					
				</h4>
				<div className={styles.overlayLink}>CHECK IT OUT!</div>
			</div>
		</Link>
	)
}

ProjectLink.propTypes = {
	project: PropTypes.object.isRequired
}

export default ProjectLink