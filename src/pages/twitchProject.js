import React from 'react'
import twitchScreenShot from '../static/images/twitch.png'
import styles from './index.module.css'

const TwitchTvProject = () => (
  <div>
    <h1 className={styles.heading}>Twitch.Tv Tool</h1>
    <figure>
      <a
        href="https://blbaylis.github.io/twitch-tv-tool/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitchScreenShot} />
      </a>
      <figcaption>Click the screenshot to visit my project!</figcaption>
    </figure>
    <h3 />
    <p className={styles.info}>
      The primary aim of this project was to fetch data from the Twitch.Tv API,
      in order to display a list of Twitch streams provided by Freecodecamp and
      display information about them including whether the stream was live.
    </p>
    <p className={styles.info}>
      I&#39;m a gamer who visits the Twitch website frequently and so I decided
      to go a bit further and flesh out the tool somewhat compared to the rather
      minimal aims of the project. As a result, I added search functionality for
      any streamer on Twitch along with some streams I personally enjoy and the
      featured streams of Twitch which display on the Twitch website main page.
    </p>
    <p className={styles.info}>
      This project was one of my earliest projects to deal with asynchronous
      Javscript and in particular ES6 Promises, which I learnt during this
      project. This led to working, but messy and hard to follow code.
    </p>
    <p className={styles.info}>
      I&#39;ve learnt much since then and my data fetching functions now utilise
      the fetch syntax and async/await syntax, which make for very
      straight-forward code. I gained a better grasp of the promise and
      generator functions which these features are built on.
    </p>
    <p className={styles.info}>
      This is my favourite project I&#39;ve worked on overall!
    </p>
  </div>
)

export default TwitchTvProject

