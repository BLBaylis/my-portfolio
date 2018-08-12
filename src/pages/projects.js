import React from 'react';
import Link from 'gatsby-link';
import styles from "./projects.module.css";
import twitchScreenShot from "../static/images/twitch all.png";
import pomodoroScreenShot from "../static/images/pomodoro all.png";

const Projects = () => (
  <div>
    <h1 className = {styles.heading}>Projects</h1>
    <h4 className = {styles.subHeading}>All of my project ideas are from 
    	<a href = "https://www.freecodecamp.org/" target = "_blank" rel = "noopener noreferrer"> Freecodecamp </a>
    	and listed by most recent to least recent.
    </h4>
    <div className = {styles.projectGallery}>
    	<div className = {styles.project}>
    		<img className = {styles.thumbnail} src = {twitchScreenShot}/>
    		<div className = {styles.overlay}>
    			<h3 className = {styles.overlayHeading}>Portfolio</h3>
    			<h4 className = {styles.techUsed}>This projet utilises HTML, CSS, JS, React.js and Webpack.  Bootstrapped by Gatsby.js</h4>
    			<Link to = "/portfolio-project/" className = {styles.overlayLink}>CHECK IT OUT!</Link>
    		</div>
    	</div>
    	<div className = {styles.projectAlt}>
    		<img className = {styles.thumbnail} src = {pomodoroScreenShot}/>
    		<div className = {styles.overlay}>
    			<h3 className = {styles.overlayHeading}>Twitch.Tv Tool</h3>
    			<h4 className = {styles.techUsed}>This projet utilises HTML, CSS, JS, React.js and Webpack.</h4>
    			<Link to = "/twitch-tv-tool-project/" className = {styles.overlayLink}>CHECK IT OUT!</Link>
    		</div>
    	</div>
    	<div className = {styles.project}>
    		<img className = {styles.thumbnail} src = {pomodoroScreenShot}/>
    		<div className = {styles.overlay}>
    			<h3 className = {styles.overlayHeading}>Calculator</h3>
    			<h4 className = {styles.techUsed}>This projet utilises HTML, CSS, JS, React.js and Webpack.</h4>
    			<Link to = "/calculator-project/" className = {styles.overlayLink}>CHECK IT OUT!</Link>
    		</div>
    	</div>
    	<div className = {styles.projectAlt  + " " + styles.item4}>
    		<img className = {styles.thumbnail} src = {twitchScreenShot}/>
    		<div className = {styles.overlay}>
    			<h3 className = {styles.overlayHeading}>Tic-Tac-Toe Game</h3>
    			<h4 className = {styles.techUsed}>This projet utilises HTML, CSS and Javascript.</h4>
    			<Link to = "/tic-tac-toe-project/" className = {styles.overlayLink}>CHECK IT OUT!</Link>
    		</div>
    	</div>
    	<div className = {styles.project}>
    		<img className = {styles.thumbnail} src = {pomodoroScreenShot}/>
    		<div className = {styles.overlay}>
    			<h3 className = {styles.overlayHeading}>Pomodoro Timer</h3>
    			<h4 className = {styles.techUsed}>This projet utilises HTML, CSS and Javascript.</h4>
    			<Link to = "/pomodoro-timer-project/" className = {styles.overlayLink}>CHECK IT OUT!</Link>
    		</div>
    	</div>
    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Projects
