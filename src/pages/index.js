import React from 'react'
import Link from 'gatsby-link'
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

const IndexPage = () => (
  <div className={styles.outerDiv}>
    <InfoSection sectionName="ABOUT ME">
      <div className={styles.aboutGrid}>
        <h1 className={styles.heading}>
          Bradley Baylis
          <span className={styles.inlineSubtitle}>
            {' '}
            <span className={styles.divider}>|</span> Front End Developer
          </span>
        </h1>
        <h2 className={styles.blockSubtitle}> Front End Developer</h2>
        <img className={styles.bradPic} />
        <p className={styles.info}>
          Hi! My name is Brad and I am a front end developer from London. I love
          the internet, gaming, exercising and dogs! This coding stuff seems
          pretty cool as well.
        </p>
        <figure className={styles.dogFig}>
          <img
            className={styles.dogPic}
            src={jazz}
            alt="A picture of my dog, Jazz"
          />
          <figcaption>My dog, Jazz</figcaption>
        </figure>
      </div>
    </InfoSection>
    <InfoSection sectionName="TECHNOLOGIES IN MY PROJECTS">
      <div className={styles.logoGrid1}>
        <img className={styles.logo} src={htmlLogo} alt="Logo of HTML5" />
        <img className={styles.logo} src={cssLogo} alt="Logo of CSS3" />
        <img
          className={styles.logo}
          src={javascriptLogo}
          alt="Unoffical logo of Javascript"
        />
        <img className={styles.logo} src={reactLogo} alt="Logo of React.js" />
        <img className={styles.logo} src={webpackIcon} alt="Logo of Webpack" />
        <img className={styles.logo} src={gatsbyLogo} alt="Logo of Gatsby.js" />
      </div>
    </InfoSection>
    <InfoSection sectionName="I'M ALSO FAMILIAR WITH">
      <div className={styles.logoGrid2}>
        <img className={styles.logo} src={bootstrapLogo} alt="Logo of HTML5" />
        <img
          className={styles.logo + ' ' + styles.jquery}
          src={jQueryLogo}
          alt="Logo of CSS3"
        />
      </div>
    </InfoSection>
    <Link to="/projects/" className={styles.lrgProjectsLink}>
      PROJECTS
    </Link>
  </div>
)

export default IndexPage
