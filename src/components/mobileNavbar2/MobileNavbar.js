import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import classNames from 'classnames'
import { primaryColor } from '../../utils/cssVariables'
import styles from './MobileNavbar.module.scss'
import DropdownMenu from '../dropdownMenu/DropdownMenu'

const JSStyles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: primaryColor,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: -10,
  },
}

class MobileNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dropped: false,
    }
  }

  handleClick = () => {
    this.setState({ dropped: true })
  }

  handleClose = () => {
    this.setState({ dropped: false })
  }

  render() {
    const { classes } = this.props
    return (
      <nav className={classNames(styles.mobileNavbar, classes.root)}>
        <AppBar position="static" className={classes.appBar}>
          <DropdownMenu dropped={this.state.dropped} />
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              Bradley Baylis
            </Typography>
            <IconButton
              onClick={this.handleClick}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  fill="white"
                />
              </svg>
            </IconButton>
          </Toolbar>
        </AppBar>
      </nav>
    )
  }
}

MobileNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(JSStyles)(MobileNavbar)
