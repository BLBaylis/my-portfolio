import React from "react";
import Link from "gatsby-link";
import styles from"./index.module.css";
import InfoSection from "../components/infoSection/InfoSection";

const IndexPage = () => (
	<div className = {styles.outerDiv}>
		<InfoSection sectionName = "ABOUT ME">
			<h1>Bradley Baylis</h1>
			<img className = {styles.bradPic}/>
			<p className = {styles.info}>Hi!  My name is Brad and I am a front end developer from London.
			  I love the internet, gaming, exercising and cute doggos!  Click on
			   the picture of my cute doggo Jazz for a gallery of cute dog pics and gifs!</p>
			<Link to = "/dogGallery/">
				<img alt = "A picture of my dog, Jazz"/>
			</Link>
		</InfoSection>
	</div>
);

export default IndexPage;
