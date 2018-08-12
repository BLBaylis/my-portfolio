import React from 'react';
import Link from 'gatsby-link'
import LargeLink from '../components/largeLink/LargeLink';
import styles from "./project.module.css";
import twitchScreenShot from "../static/images/twitch all.png";

const PortfolioProject = () => (
  	<div className = {styles.outerDiv}>
    	<h1 className = {styles.heading}>Portfolio</h1>
    	<figure>
    		<Link to = "">
    			<img src = {twitchScreenShot}/>
    		</Link>
    		<figcaption>Click the screenshot to visit my project!</figcaption>
    	</figure>
    	<p className = {styles.info}>The primary aim of this project was to simply show off my other work. I&#39;ve gone 
    		with quite a minimal visula design on this one, because I wanted the work itself to have the limelight! 
    		It is the first time I&#39;ve bootstrapped a project using Gatsby.js, which I&#39;m very impressed by.
    	</p>
   		<div className = {styles.largeLink}>
    		<LargeLink to="PROJECTS/" buttonText = "PROJECTS"></LargeLink>
    	</div>
 	</div>
)

export default PortfolioProject