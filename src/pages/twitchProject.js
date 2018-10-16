import React from 'react'
import styles from './projectPage.module.css'
import Typography from '@material-ui/core/Typography'
import twitchScreenShot320 from '../static/images/screenshots/twitch/twitch-320w.png'
import twitchScreenShot700 from '../static/images/screenshots/twitch/twitch-700w.png'
import twitchScreenShot1000 from '../static/images/screenshots/twitch/twitch-1000w.png'
import twitchScreenShot1300 from '../static/images/screenshots/twitch/twitch-1300w.png'

const TwitchTvProject = () => (
  <div className={styles.outerDiv}>
    <Typography variant="display3" align="center">
      Twitch.Tv Tool
    </Typography>
    <figure>
      <a
        href="https://blbaylis.github.io/twitch-tv-tool/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.image}
          srcSet={`${twitchScreenShot320} 320w, 
        	${twitchScreenShot700} 700w, 
        	${twitchScreenShot1000} 1000w,
            ${twitchScreenShot1300} 1200w`}
          sizes="100%"
          alt={'twitch screenshot'}
          src={twitchScreenShot1300}
        />
      </a>
      <figcaption>
        <Typography variant="body2" align="center">
          Click the screenshot to visit my project!
        </Typography>
      </figcaption>
    </figure>
    <Typography variant="title" className={styles.info}>
      The primary aim of this project was to fetch data from the Twitch.Tv API,
      in order to display a list of Twitch streams provided by Freecodecamp and
      display information about them including whether the stream was live.
    </Typography>
    <Typography variant="title" className={styles.info}>
      I&#39;m a gamer who visits the Twitch website frequently and so I decided
      to go a bit further and flesh out the tool somewhat compared to the rather
      minimal aims of the project. As a result, I added search functionality for
      any streamer on Twitch along with some streams I personally enjoy and the
      featured streams of Twitch which display on the Twitch website main page.
    </Typography>
    <Typography variant="title" className={styles.info}>
      This project was one of my earliest projects to deal with asynchronous
      Javscript and in particular ES6 Promises, which I learnt during this
      project. This led to working, but messy and hard to follow code.
    </Typography>
    <Typography variant="title" className={styles.info}>
      I&#39;ve learnt much since then and my data fetching functions now utilise
      the fetch syntax and async/await syntax, which make for very
      straight-forward code. I gained a better grasp of the promise and
      generator functions which these features are built on.
    </Typography>
    <Typography variant="title" className={styles.info}>
      This is my favourite project I&#39;ve worked on overall!
    </Typography>
  </div>
)

export default TwitchTvProject
