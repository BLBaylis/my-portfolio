import React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from './DropdownMenu.module.scss'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const DropdownMenu = props => {
  const { droppedStatus } = props
  const undroppedNavLink = droppedStatus ? false : styles.navLink
  const ulClass = droppedStatus
    ? `${styles.navList} ${styles.boxShadow}`
    : styles.navList
  return (
    <ul className={ulClass}>
      <li className={undroppedNavLink || styles.navLink1}>
        <Link className={styles.anchor} to="/">
          <Typography variant="title" className={styles.type}>
            Home
          </Typography>
        </Link>
      </li>
      <li className={undroppedNavLink || styles.navLink2}>
        <a className={styles.anchor} href="#about">
          <Typography variant="title" className={styles.type}>
            About Me
          </Typography>
        </a>
      </li>
      <li className={undroppedNavLink || styles.navLink3}>
        <a className={styles.anchor} href="#projects">
          <Typography variant="title" className={styles.type}>
            Projects
          </Typography>
        </a>
      </li>
      <li className={undroppedNavLink || styles.navLink4}>
        <a className={styles.anchor} href="#contact">
          <Typography variant="title" className={styles.type}>
            Contact
          </Typography>
        </a>
      </li>
    </ul>
  )
}

DropdownMenu.propTypes = {
  droppedStatus: PropTypes.bool.isRequired,
}

export default DropdownMenu
