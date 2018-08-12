import React from 'react';
import LargeLink from '../components/largeLink/LargeLink';
import styles from "./project.module.css";
import twitchScreenShot from "../static/images/twitch all.png";

const CalculatorProject = () => (
  	<div className = {styles.outerDiv}>
    	<h1 className = {styles.heading}>Calculator</h1>
    	<figure>
    		<a href="https://blbaylis.github.io/react-calculator/" target="_blank" rel="noopener noreferrer">
    			<img src = {twitchScreenShot}/>
    		</a>
    		<figcaption>Click the screenshot to visit my project!</figcaption>
    	</figure>
    	<p className = {styles.info}>The trusty calculator was one of my first projects, though this is a remake because 
    	I decided it would be an easy way to implement React.js in one of my projects for the first time. As a result, 
    	there isn&#39;t much more for me to say about it!
    	</p>
    	<p className = {styles.info}>This is my favourite project I&#39;ve worked on overall!</p>
   		<div className = {styles.largeLink}>
    		<LargeLink to="PROJECTS/" buttonText = "PROJECTS"></LargeLink>
    	</div>
 	</div>
)

export default CalculatorProject