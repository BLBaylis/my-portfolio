import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectLink.module.css'
import PrimaryLink from '../primaryLink/PrimaryLink'
import SecondaryLink from '../secondaryLink/SecondaryLink'

const ProjectLink = props => {
	let classNames = props.class.map(curr => styles[curr]).join(" ");
	const {title, thumbnail, /*tags,*/ projectPageLink} = props.project;
	return (
		<div className={classNames}>
			<h4 className = {styles.heading}>{title}</h4>
			<img className={styles.thumbnail} src={thumbnail} />
			{/*<div className={styles.overlay}>
				<h3 className={styles.overlayHeading}>{title}</h3>
				<h4 className={styles.techUsed}>
					
				</h4>
			</div>*/}
			<div className = {styles.btnWrapper}>
				<PrimaryLink to = {`/${projectPageLink}/`} text = "VISIT"/>
				<SecondaryLink to = {`/${projectPageLink}/`} text = "DETAILS"/>
			</div>
			{/*<div className={styles.overlayLink}>CHECK IT OUT!</div>*/}
		</div>
	)
}

ProjectLink.propTypes = {
	project: PropTypes.object.isRequired,
	class : PropTypes.array
}

export default ProjectLink