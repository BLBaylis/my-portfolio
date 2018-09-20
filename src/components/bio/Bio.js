import React from 'react'
import bradPic from '../../static/images/brad.jpg'
import styles from './Bio.module.scss'

const Bio = () => (
  <section className={styles.bio}>
  	<div className = {styles.content}>
      <h2>About Me</h2>
      <div className = {styles.bioWrapper}>
      	<img className={styles.bradPic} src={bradPic} />
     	<p className={styles.paragraph}>
      Hi! My name is Brad and I am a front end developer from London. I love the
      internet, gaming, exercising and dogs! This coding stuff seems pretty cool
      as well.
   	 	</p>
   	  </div>
    </div>
  </section>
)

export default Bio
