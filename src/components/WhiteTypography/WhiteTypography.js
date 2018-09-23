import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  root: {
    color: '#fff',
  },
};

const WhiteTypography = (props) => {
  const {variant} = props;
  return <Typography {...props} variant= {variant}>{props.children}</Typography>
}

WhiteTypography.propTypes = {
	children : PropTypes.string.isRequired,
	variant : PropTypes.string
}

export default withStyles(styles)(WhiteTypography);
