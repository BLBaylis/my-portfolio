import React from 'react'
import bradPic from '../../static/images/brad.jpg'
import styles from './Bio.module.scss'
import Typography from '@material-ui/core/Typography';


const Bio = () => (
  <section className={styles.bio}>
  	<div className = {styles.content}>
      <Typography variant = "display2">About Me</Typography>
      <div className = {styles.bioWrapper}>
      	<img className={styles.bradPic} src={bradPic} />
     	<Typography variant = "body2" className={styles.paragraph}>
      Hi! My name is Brad and I am a front end developer from London. I love the
      internet, gaming, exercising and dogs! This coding stuff seems pretty cool
      as well.
   	 	</Typography>
   	  </div>
    </div>
  </section>
)

export default Bio
