import React from 'react'
import IntroSection from '../components/introSection/IntroSection'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'
//import Contact from '../components/contact/Contact'
import styles from './index.module.css'
//import jazz from '../static/images/jazz-pic.jpg'

const IndexPage = () => (
  <div className={styles.outerDiv}>
    <IntroSection />
    <About />
    <Projects />
    {/*<Contact />*/}
  </div>
)

export default IndexPage
