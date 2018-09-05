import React from 'react'
import Link from 'gatsby-link'
import IntroSection from "../components/introSection/IntroSection";
import styles from './index.module.css'
import InfoSection from '../components/infoSection/InfoSection'
import jazz from '../static/images/jazz-pic.jpg'
import reactLogo from '../static/images/react-logo.svg'
import htmlLogo from '../static/images/html-logo.svg'
import cssLogo from '../static/images/css-logo.svg'
import javascriptLogo from '../static/images/javascript-logo.svg'
import webpackIcon from '../static/images/webpack-icon.svg'
import gatsbyLogo from '../static/images/gatsby-logo.svg'
import bootstrapLogo from '../static/images/bootstrap-logo.svg'
import jQueryLogo from '../static/images/jquery-logo.svg'
import twitchScreenShot from '../static/images/twitch.png'
import pomodoroScreenShot from '../static/images/pomodoro.png'
import ticTacToeScreenShot from '../static/images/tictactoe.png'
import calculatorScreenShot from '../static/images/calculator.png'
import portfolioScreenShot from '../static/images/portfolio.png'

const IndexPage = () => (
  <div className="outerDiv">
  <IntroSection/>
    
    <main className="portfolio">
      <h1 className={styles.heading}>Projects</h1>
      <h4 className={styles.subHeading}>
        All of my project ideas are from
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Freecodecamp{' '}
        </a>
        and listed by most recent to least recent.
      </h4>
      <div className={styles.projectGallery}>
        <Link to="/portfolioProject/" className={styles.project}>
          <img className={styles.thumbnail} src={portfolioScreenShot} />
          <div className={styles.overlay}>
            <h3 className={styles.overlayHeading}>Portfolio</h3>
            <h4 className={styles.techUsed}>
              This project utilises HTML, CSS, JS, React.js and Webpack.
              Bootstrapped by Gatsby.js
            </h4>
            <div className={styles.overlayLink}>CHECK IT OUT!</div>
          </div>
        </Link>
        <Link to="/twitchTvToolProject/" className={styles.projectAlt}>
          <img className={styles.thumbnail} src={twitchScreenShot} />
          <div className={styles.overlay}>
            <h3 className={styles.overlayHeading}>Twitch.Tv Tool</h3>
            <h4 className={styles.techUsed}>
              This project utilises HTML, CSS, JS, React.js and Webpack.
            </h4>
            <div className={styles.overlayLink}>CHECK IT OUT!</div>
          </div>
        </Link>
        <Link to="/calculatorProject/" className={styles.project}>
          <img className={styles.thumbnail} src={calculatorScreenShot} />
          <div className={styles.overlay}>
            <h3 className={styles.overlayHeading}>Calculator</h3>
            <h4 className={styles.techUsed}>
              This project utilises HTML, CSS, JS, React.js and Webpack.
            </h4>
            <div className={styles.overlayLink}>CHECK IT OUT!</div>
          </div>
        </Link>
        <Link
          to="/ticTacToeProject/"
          className={styles.projectAlt + ' ' + styles.item4}
        >
          <img className={styles.thumbnail} src={ticTacToeScreenShot} />
          <div className={styles.overlay}>
            <h3 className={styles.overlayHeading}>Tic-Tac-Toe Game</h3>
            <h4 className={styles.techUsed}>
              This project utilises HTML, CSS and Javascript.
            </h4>
            <div className={styles.overlayLink}>CHECK IT OUT!</div>
          </div>
        </Link>
        <Link to="/pomodoroTimerProject/" className={styles.project}>
          <img className={styles.thumbnail} src={pomodoroScreenShot} />
          <div className={styles.overlay}>
            <h3 className={styles.overlayHeading}>Pomodoro Timer</h3>
            <h4 className={styles.techUsed}>
              This project utilises HTML, CSS and Javascript.
            </h4>
            <div className={styles.overlayLink}>CHECK IT OUT!</div>
          </div>
        </Link>
      </div>
    </main>
    <section className="contact" >
    </section>
  </div>
)

export default IndexPage
