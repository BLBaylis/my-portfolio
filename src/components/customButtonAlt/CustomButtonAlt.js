import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { primaryColor, secondaryColor } from '../../utils/cssVariables'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    backgroundColor: primaryColor,
    color: secondaryColor,
    margin: '0 20px 10px',
    borderColor: secondaryColor,
    boxSizing : 'border-box',
    '&:hover' : {
    	backgroundColor : "#330da8"
    }
  },
}

const CustomButtonAlt = props => {
  const { href, variant } = props
  return (
    <Button {...props} variant={variant} href={href}>
      {props.children}
    </Button>
  )
}

CustomButtonAlt.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  variant: PropTypes.string,
}

export default withStyles(styles)(CustomButtonAlt)
