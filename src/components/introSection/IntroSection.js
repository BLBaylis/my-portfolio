import React from 'react'
import WhiteTypography from '../whiteTypography/WhiteTypography'
import CustomButton from '../customButton/CustomButton'
import styles from './IntroSection.module.scss'

//import * as Anchor from '../anchor/Anchor'

const IntroSection = () => (
  <section className={styles.intro}>
    <div className={styles.textBox}>
      <WhiteTypography variant="display3" gutterBottom>
        Bradley Baylis
      </WhiteTypography>
      <WhiteTypography variant="display2" gutterBottom>
        Front End Developer
      </WhiteTypography>
      <CustomButton variant="contained" href="#projects">
        JUMP TO PROJECTS
      </CustomButton>
    </div>
  </section>
)

export default IntroSection
