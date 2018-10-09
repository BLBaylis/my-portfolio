import React from 'react'
import bradPic from '../../static/images/bradPic/brad-150w.jpg'
import styles from './Bio.module.scss'
import Typography from '@material-ui/core/Typography'
import Fade from 'react-reveal/Fade'

const Bio = () => (
  <section className={styles.bio}>
    <div className={styles.content}>
      <Typography variant="display2">About Me</Typography>
      <div className={styles.bioWrapper}>
        <Fade left>
          <img
            className={styles.bradPic}
            alt="headshot of brad"
            src={bradPic}
          />
        </Fade>
        <Fade right>
          <Typography
            variant="body1"
            align="center"
            className={styles.paragraph}
          >
            Hi! My name is Brad and I am a front end developer from London. I
            love the internet, gaming, exercising and dogs! This coding stuff
            seems pretty cool as well.
          </Typography>
        </Fade>
      </div>
    </div>
  </section>
)

export default Bio
