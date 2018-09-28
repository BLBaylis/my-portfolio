import React from 'react'
import WhiteTypography from '../whiteTypography/WhiteTypography'
import styles from './IntroSection.module.scss'
import IntroButton from '../introButton/IntroButton'

const IntroSection = () => (
  <section className={styles.intro}>
    <div className={styles.textBox}>
      <WhiteTypography variant="display3" gutterBottom>
        Bradley Baylis
      </WhiteTypography>
      <WhiteTypography variant="display2" gutterBottom>
        Front End Developer
      </WhiteTypography>
      <IntroButton variant="contained" href="#projects" size="large">
        JUMP TO PROJECTS
      </IntroButton>
    </div>
  </section>
)

export default IntroSection
