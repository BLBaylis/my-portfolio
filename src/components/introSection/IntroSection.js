import React from 'react'
import styles from './IntroSection.module.scss'
import * as Anchor from '../anchor/Anchor'

const IntroSection = () => (
  <section className={styles.intro}>
    <div className={styles.textBox}>
      <h1 className={styles.heading}>Bradley Baylis</h1>
      <h2>Front End Developer</h2>
      <Anchor.Xl href = "#projects" text = "Jump to projects" btnTheme = "alt-theme"/>
    </div>
  </section>
)

export default IntroSection
