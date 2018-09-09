import React from 'react'
import styles from './PrimaryLink.module.css'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const PrimaryLink = props => (
	<Link to = {props.to} className = {styles.primaryLink}>{props.text}</Link>
)

PrimaryLink.propTypes = {
	text : PropTypes.string.isRequired,
	to : PropTypes.string.isRequired
}

export default PrimaryLink