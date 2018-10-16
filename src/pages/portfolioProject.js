import React from 'react'
import styles from './projectPage.module.css'
import Typography from '@material-ui/core/Typography'
import portfolioScreenShot320 from '../static/images/screenshots/portfolio/portfolio-320w.png'
import portfolioScreenShot700 from '../static/images/screenshots/portfolio/portfolio-700w.png'
import portfolioScreenShot1000 from '../static/images/screenshots/portfolio/portfolio-1000w.png'
import portfolioScreenShot1300 from '../static/images/screenshots/portfolio/portfolio-1300w.png'

const PortfolioProject = () => (
  <div className={styles.outerDiv}>
    <Typography align="center" variant="display3">
      Portfolio
    </Typography>
    <figure>
      <a href="https://blbaylis.github.io/my-portfolio/">
        <img
          className={styles.image}
          srcSet={`${portfolioScreenShot320} 320w, 
        	${portfolioScreenShot700} 700w, 
        	${portfolioScreenShot1000} 1000w,
            ${portfolioScreenShot1300} 1300w`}
          sizes="100%"
          alt={'portfolio screenshot'}
          src={portfolioScreenShot1300}
        />
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
