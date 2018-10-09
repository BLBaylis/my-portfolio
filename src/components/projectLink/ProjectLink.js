import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectLink.module.scss'
import Typography from '@material-ui/core/Typography'
import WhiteTypography from '../whiteTypography/WhiteTypography'
import CustomButton from '../customButton/CustomButton'
import CustomButtonAlt from '../customButtonAlt/CustomButtonAlt'
import Link from 'gatsby-link'

const ProjectLink = props => {
  const { className } = props
  const { title, thumbnail, projectPageLink, href } = props.project
  const typography =
    props.className === 'project' ? (
      <WhiteTypography variant="display1" className={styles.heading}>
        {title}
      </WhiteTypography>
    ) : (
      <Typography variant="display1" className={styles.heading}>
        {title}
      </Typography>
    )
  const buttons =
    props.className === 'project' ? (
      <span>
        <CustomButtonAlt variant="outlined" size="large" href={href}>
          VISIT
        </CustomButtonAlt>
        <CustomButtonAlt
          component={Link}
          to={`/${projectPageLink}`}
          variant="text"
          size="large"
        >
          DETAILS
        </CustomButtonAlt>
      </span>
    ) : (
      <span>
        <CustomButton variant="outlined" size="large" href={href}>
          VISIT
        </CustomButton>
        <CustomButton
          component={Link}
          to={`/${projectPageLink}`}
          variant="text"
          size="large"
        >
          DETAILS
        </CustomButton>
      </span>
    )
  return (
    <div className={styles[className]}>
      {typography}
      <img
        className={styles.thumbnail}
        alt={`${title} thumbnail`}
        src={thumbnail}
      />
      <div className={styles.btnWrapper}>{buttons}</div>
    </div>
  )
}

ProjectLink.propTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default ProjectLink
