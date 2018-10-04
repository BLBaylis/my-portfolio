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
        <Typography variant="title" className={styles.type}>
          <Link className={styles.anchor} to="/">
            Home
          </Link>
        </Typography>
      </li>
      <li className={undroppedNavLink || styles.navLink2}>
        <Typography variant="title" className={styles.type}>
          <a className={styles.anchor} href="#about">
            About Me
          </a>
        </Typography>
      </li>
      <li className={undroppedNavLink || styles.navLink3}>
        <Typography variant="title" className={styles.type}>
          <a className={styles.anchor} href="#projects">
            Projects
          </a>
        </Typography>
      </li>
      <li className={undroppedNavLink || styles.navLink4}>
        <Typography variant="title" className={styles.type}>
          <a className={styles.anchor} href="#contact">
            Contact
          </a>
        </Typography>
      </li>
    </ul>
  )
}

DropdownMenu.propTypes = {
  droppedStatus: PropTypes.bool.isRequired,
}

export default DropdownMenu
