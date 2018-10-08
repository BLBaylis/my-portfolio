import React from 'react'
import styles from './Footer.module.scss'
import WhiteTypography from '../whiteTypography/WhiteTypography'

const Footer = () => (
  <footer className={styles.footer}>
    <WhiteTypography variant="body1">
      Website created by &#169; Bradley Baylis 2018
    </WhiteTypography>
  </footer>
)

export default Footer
