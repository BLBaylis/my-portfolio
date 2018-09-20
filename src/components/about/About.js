import React from 'react'
import styles from './About.module.scss'
import Bio from '../bio/Bio'
import Skills from '../skills/Skills'
import Tools from '../tools/Tools'

const About = () => (
  <section className={styles.about} id="about">
  	<Bio/>
  	<Skills/>
  	<Tools/>
  </section>
)

export default About
