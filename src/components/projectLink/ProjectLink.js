import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectLink.module.css'
import PrimaryLink from '../primaryLink/PrimaryLink'

const ProjectLink = props => {
	let classNames = props.class.map(curr => styles[curr]).join(" ");
	const {/*title, */thumbnail, /*tags,*/ projectPageLink} = props.project;
	return (
		<div className={classNames}>
			<img className={styles.thumbnail} src={thumbnail} />
			{/*<div className={styles.overlay}>
				<h3 className={styles.overlayHeading}>{title}</h3>
				<h4 className={styles.techUsed}>
					
				</h4>
			</div>*/}
			<PrimaryLink to = {`/${projectPageLink}/`} text = "VISIT"/>
			<PrimaryLink to = {`/${projectPageLink}/`} text = "DETAILS"/>
			{/*<div className={styles.overlayLink}>CHECK IT OUT!</div>*/}
		</div>
	)
}

ProjectLink.propTypes = {
	project: PropTypes.object.isRequired,
	class : PropTypes.array
}

export default ProjectLink