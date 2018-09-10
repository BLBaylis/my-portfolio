import React from 'react'
import styles from './IntroSection.module.css'
import PrimaryAnchor from '../primaryAnchor/PrimaryAnchor'

const IntroSection = () => (
  <section className={styles.intro}>
    <div className={styles.textBox}>
      <h1 className={styles.heading}>Bradley Baylis</h1>
      <h2>Front End Developer</h2>
      <PrimaryAnchor href = "#projects" text = "Jump to projects"></PrimaryAnchor>
    </div>
  </section>
)

export default IntroSection
