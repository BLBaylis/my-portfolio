import React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from './DropdownMenu.module.scss'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const DropdownMenu = props => {
  const { droppedStatus, handleClose } = props
  const undroppedNavLink = droppedStatus ? false : styles.navLink
  return (
    <ul className={styles.navList}>
      <li onClick={handleClose} className={undroppedNavLink || styles.navLink1}>
        <Link className={styles.anchor} to="/">
          <Typography variant="title" className={styles.type}>
            Home
          </Typography>
        </Link>
      </li>
      <li onClick={handleClose} className={undroppedNavLink || styles.navLink2}>
        <Link className={styles.anchor} to="/#about">
          <Typography variant="title" className={styles.type}>
            About Me
          </Typography>
        </Link>
      </li>
      <li onClick={handleClose} className={undroppedNavLink || styles.navLink3}>
        <Link className={styles.anchor} to="/#projects">
          <Typography variant="title" className={styles.type}>
            Projects
          </Typography>
        </Link>
      </li>
      <li onClick={handleClose} className={undroppedNavLink || styles.navLink4}>
        <Link className={styles.anchor} to="/#contact">
          <Typography variant="title" className={styles.type}>
            Contact
          </Typography>
        </Link>
      </li>
    </ul>
  )
}

DropdownMenu.propTypes = {
  droppedStatus: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default DropdownMenu
