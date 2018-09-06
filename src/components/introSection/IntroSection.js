import React from "react";
import styles from "./IntroSection.module.css";

const IntroSection = () => (
  	<section className={styles.intro}>
  		<div className = {styles.textBox}>
   	 	 <h1 classNmae = {styles.heading}>Bradley Baylis</h1>
      	<h2>Front End Developer</h2>
      	<a>Jump to projects</a>
    </div>
  </section>
)

export default IntroSection;
