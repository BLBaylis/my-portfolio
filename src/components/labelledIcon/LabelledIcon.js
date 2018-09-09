import React from 'react'
import PropTypes from 'prop-types'
import styles from './LabelledIcon.module.css'

const LabelledIcon = (props) => (
	<div className = {styles.labelledIcon}>
		<a className = {styles.iconLink} href = {props.link}>
			<img className = {styles.icon} src = {props.icon}/>
		</a>
		<a className = {styles.labelLink} href = {props.link}>
			<h3 className = {styles.label}>{props.label}</h3>
		</a>
	</div>
)

LabelledIcon.propTypes = {
	icon : PropTypes.string.isRequired,
	label : PropTypes.string.isRequired,
	link : PropTypes.string.isRequired
}

export default LabelledIcon