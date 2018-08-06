import React from 'react';
//import Link from "gatsby-link";
import styles from './index.module.css';
import InfoSection from '../components/infoSection/InfoSection';
import jazz from '../static/images/jazz.png';
import reactLogo from "../static/images/react-logo.svg";
import htmlLogo from "../static/images/html-logo.svg";
import cssLogo from "../static/images/css-logo.svg";
import javascriptLogo from "../static/images/javascript-logo.svg";
//import webpackLogo from "../static/images/webpack-logo.svg";
import webpackIcon from "../static/images/webpack-icon.svg";
import gatsbyLogo from "../static/images/gatsby-logo.svg";
import bootstrapLogo from "../static/images/bootstrap-logo.svg";
import jQueryLogo from "../static/images/jquery-logo.svg";


const IndexPage = () => (
  <div className={styles.outerDiv}>
    <InfoSection sectionName="ABOUT ME">
      <h1>Bradley Baylis</h1>
      <img className={styles.bradPic} />
      <p className={styles.info}>
        Hi! My name is Brad and I am a front end developer from London. I love
        the internet, gaming, exercising and dogs! This is my dog, Jazz.
      </p>
      <img className = {styles.dogPic} src={jazz} alt="A picture of my dog, Jazz" />
    </InfoSection>
    <InfoSection sectionName = "TECHNOLOGIES IN MY PROJECTS">
		<div className = {styles.logoGrid1}>
			<img className = {styles.logo} src= {htmlLogo} alt = "Logo of HTML5"/>
			<img className = {styles.logo} src= {cssLogo} alt = "Logo of CSS3"/>
			<img className = {styles.logo} src= {javascriptLogo} alt = "Unoffical logo of Javascript"/>
			<img className = {styles.logo} src= {reactLogo} alt = "Logo of React.js"/>
			<img className = {styles.logo} src= {webpackIcon} alt = "Logo of Webpack"/>
			<img className = {styles.logo} src= {gatsbyLogo} alt = "Logo of Gatsby.js"/>
    	</div>
    </InfoSection>
    <InfoSection sectionName = "I'M ALSO FAMILIAR WITH">
		<div className = {styles.logoGrid2}>
			<img className = {styles.logo} src= {bootstrapLogo} alt = "Logo of HTML5"/>
			<img className = {styles.logo} src= {jQueryLogo} alt = "Logo of CSS3"/>
    	</div>
    </InfoSection>
  </div>
)

export default IndexPage
