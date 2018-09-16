import React from 'react'
import styles from './SecondaryLink.module.scss'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const SecondaryLink = props => (
	<Link to = {props.to} className = {styles.secondaryLink}>{props.text}</Link>
)

SecondaryLink.propTypes = {
	text : PropTypes.string.isRequired,
	to : PropTypes.string.isRequired
}

export default SecondaryLink