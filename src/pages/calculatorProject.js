import React from 'react'
import styles from './projectPage.module.css'
import Typography from '@material-ui/core/Typography'
import calculatorScreenShot from '../static/images/calculator.png'

const CalculatorProject = () => (
  <div className={styles.outerDiv}>
    <Typography variant = "display3" align = "center">Calculator</Typography>
    <figure>
      <a
        href="https://blbaylis.github.io/react-calculator/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className = {styles.image} src={calculatorScreenShot} />
      </a>
      <figcaption><Typography variant = "body1" align = "center">Click the screenshot to visit my project!</Typography></figcaption>
    </figure>
    <Typography variant = "title">
      The trusty calculator was one of my first projects, though this is a
      remake because I decided it would be an easy way to implement React in one
      of my projects for the first time. As a result, there isn&#39;t much more
      for me to say about it!
    </Typography>
  </div>
)

export default CalculatorProject
