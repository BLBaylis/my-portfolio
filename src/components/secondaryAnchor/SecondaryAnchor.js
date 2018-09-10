import React from 'react'
import styles from './SecondaryAnchor.module.css'
import PropTypes from 'prop-types'

const SecondaryAnchor = props => (
	<a href = {props.href} className = {styles.secondaryAnchor}>{props.text}</a>
)

SecondaryAnchor.propTypes = {
	text : PropTypes.string.isRequired,
	href : PropTypes.string.isRequired
}

export default SecondaryAnchor