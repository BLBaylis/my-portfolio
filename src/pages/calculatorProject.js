import React from 'react'
import styles from './projectPage.module.css'
import Typography from '@material-ui/core/Typography'
import calculatorScreenShot320 from '../static/images/screenshots/calculator/calculator-320w.png'
import calculatorScreenShot700 from '../static/images/screenshots/calculator/calculator-700w.png'
import calculatorScreenShot1000 from '../static/images/screenshots/calculator/calculator-1000w.png'
import calculatorScreenShot1300 from '../static/images/screenshots/calculator/calculator-1300w.png'

const CalculatorProject = () => (
  <div className={styles.outerDiv}>
    <Typography variant="display3" align="center">
      Calculator
    </Typography>
    <figure>
      <a
        href="https://blbaylis.github.io/react-calculator/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.image}
          srcSet={`${calculatorScreenShot320} 320w, 
        	${calculatorScreenShot700} 700w, 
        	${calculatorScreenShot1000} 1000w,
            ${calculatorScreenShot1300} 1200w`}
          sizes="100%"
          alt={'calculator screenshot'}
          src={calculatorScreenShot1300}
        />
      </a>
      <figcaption>
        <Typography variant="body1" align="center">
          Click the screenshot to visit my project!
        </Typography>
      </figcaption>
    </figure>
    <Typography variant="title">
      The trusty calculator was one of my first projects, though this is a
      remake because I decided it would be an easy way to implement React in one
      of my projects for the first time. As a result, there isn&#39;t much more
      for me to say about it!
    </Typography>
  </div>
)

export default CalculatorProject
