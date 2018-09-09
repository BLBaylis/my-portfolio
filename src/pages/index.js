import React from 'react'
import IntroSection from '../components/introSection/IntroSection'
import Projects from '../components/projects/Projects'
import AboutMe from '../components/aboutMe/AboutMe'
import Skills from '../components/skills/Skills'
import Tools from '../components/tools/Tools'
//import Contact from '../components/contact/Contact'
import styles from './index.module.css'
/*
import InfoSection from '../components/infoSection/InfoSection'
import jazz from '../static/images/jazz-pic.jpg'
*/

const IndexPage = () => (
  <div className={styles.outerDiv}>
    <IntroSection />
    <AboutMe />
    <Skills/>
    <Tools/>
    <Projects />
    {/*<Contact />*/}
  </div>
)

export default IndexPage
