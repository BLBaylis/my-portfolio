import React from 'react'
import styles from './projectPage.module.css'
import portfolioScreenShot from '../static/images/screenshots/portfolio/portfolio-320w.png'
import Typography from '@material-ui/core/Typography'

const PortfolioProject = () => (
  <div className={styles.outerDiv}>
    <Typography align="center" variant="display3">
      Portfolio
    </Typography>
    <figure>
      <a href="https://blbaylis.github.io/my-portfolio/">
        <img className={styles.image} src={portfolioScreenShot} />
      </a>
      <figcaption>
        <Typography align="center" variant="body1">
          Click the screenshot to visit my project!
        </Typography>
      </figcaption>
    </figure>
    <Typography variant="title">
      The primary aim of this project was to simply show off my other work.
      I&#39;ve gone with quite a minimal visual design on this one, because I
      wanted the work itself to have the limelight! It is the first time
      I&#39;ve bootstrapped a project using Gatsby.js, which I&#39;m very
      impressed by.
    </Typography>
  </div>
)

export default PortfolioProject
