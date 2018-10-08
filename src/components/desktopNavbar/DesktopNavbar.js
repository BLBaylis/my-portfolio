import React from 'react'
import styles from './DesktopNavbar.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { primaryColor } from '../../utils/cssVariables'

const JSStyles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: primaryColor,
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
}

const DesktopNavbar = props => {
  const { classes } = props
  return (
    <nav className={classNames(styles.desktopNavbar, classes.root)}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <ul className={styles.navList}>
            <li className={styles.logo}>
              <Typography variant="title">
                <Link className={styles.anchor} to="/">
                  Bradley Baylis
                </Link>
              </Typography>
            </li>
            <li className={styles.navLink}>
              <Typography variant="body2">
                <Link className={styles.anchor} to="/#contact">
                  Contact
                </Link>
              </Typography>
            </li>
            <li className={styles.navLink}>
              <Typography variant="body2">
                <Link className={styles.anchor} to="/#projects">
                  Projects
                </Link>
              </Typography>
            </li>
            <li className={styles.navLink}>
              <Typography variant="body2">
                <Link className={styles.anchor} to="/#about">
                  About Me
                </Link>
              </Typography>
            </li>
            <li className={styles.navLink}>
              <Typography variant="body2">
                <Link className={styles.anchor} to="/">
                  Home
                </Link>
              </Typography>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

DesktopNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(JSStyles)(DesktopNavbar)
