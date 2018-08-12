import React from 'react'
import styles from './LargeLink.module.css'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const LargeLink = props => {
  return <Link className = {styles.largeLink} to = {"/" + props.to}>{props.buttonText}</Link>
}

LargeLink.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
}

export default LargeLink