import React from 'react'
import IntroSection from '../components/introSection/IntroSection'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import styles from './index.module.css'
import Footer from '../components/footer/Footer'

const IndexPage = () => (
  <div className={styles.outerDiv}>
    <IntroSection />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
