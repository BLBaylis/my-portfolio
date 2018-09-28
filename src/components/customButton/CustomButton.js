import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { primaryColor, secondaryColor } from '../../utils/cssVariables'

const styles = {
  root: {
    backgroundColor: secondaryColor,
    color: primaryColor,
    margin: '1.225rem 20px 0',
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
