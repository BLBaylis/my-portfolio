import React from 'react'
import PropTypes from 'prop-types'
import styles from './LabelledIcon.module.css'

const LabelledIcon = (props) => {
	const linkClassName = props.link ? styles.labelLink : styles.disabledLink;
	const iconLinkClassName = props.link ? styles.iconLink : styles.disabledIconLink;
	return <div className = {styles.labelledIcon}>
		<a className = {iconLinkClassName} href = {props.link}>
			<img className = {styles.icon} src = {props.icon}/>
		</a>
		<a className = {linkClassName} href = {props.link}>
			<h3 className = {styles.label}>{props.label}</h3>
		</a>
	</div>
}

LabelledIcon.propTypes = {
	icon : PropTypes.string.isRequired,
	label : PropTypes.string.isRequired,
	link : PropTypes.string.isRequired
}

export default LabelledIcon