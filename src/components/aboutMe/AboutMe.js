import React from 'react'
import bradPic from '../../static/images/brad.jpg'
import styles from './AboutMe.module.scss'

const AboutMe = () => (
  <section className={styles.aboutMe} id = "about-me">
    <h2>About Me</h2>
    <img className={styles.bradPic} src={bradPic} />
    <p className={styles.paragraph}>
      Hi! My name is Brad and I am a front end developer from London. I love the
      internet, gaming, exercising and dogs! This coding stuff seems pretty cool
      as well.
    </p>
  </section>
)

export default AboutMe
