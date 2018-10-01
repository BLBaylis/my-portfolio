import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { primaryColor, secondaryColor } from '../../utils/cssVariables'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    backgroundColor: secondaryColor,
    color: primaryColor,
    margin: '0 20px 10px',
    borderColor: primaryColor,
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: '#bebebe',
    },
  },
}

const CustomButton = props => {
  const { href, variant } = props
  return (
    <Button {...props} variant={variant} href={href}>
      {props.children}
    </Button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  variant: PropTypes.string,
}

export default withStyles(styles)(CustomButton)
