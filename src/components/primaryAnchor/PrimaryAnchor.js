import React from 'react'
import styles from './PrimaryAnchor.module.scss'
import PropTypes from 'prop-types'

const PrimaryAnchor = props => (
	<a href = {props.href} className = {styles.primaryAnchor}>{props.text}</a>
)

PrimaryAnchor.propTypes = {
	text : PropTypes.string.isRequired,
	href : PropTypes.string.isRequired,
}

export default PrimaryAnchor