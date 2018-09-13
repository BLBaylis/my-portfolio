import React from 'react'
import styles from './DesktopNavbar.module.css'
import Link from 'gatsby-link'


const DesktopNavbar = () => (
	<nav className = {styles.desktopNavbar}>
		<ul className = {styles.navList}>
			<li className = {styles.logo}><Link className = {styles.anchor} to = "/">Bradley Baylis</Link></li>
			<li className = {styles.furthestRightNavLink}><a className = {styles.anchor} href = "#contact">Contact</a></li>
			<li className = {styles.navLink}><a className = {styles.anchor} href = "#projects">Projects</a></li>
			<li className = {styles.navLink}><a className = {styles.anchor} href = "#about-me">About Me</a></li>
			<li className = {styles.navLink}><Link className = {styles.anchor} to = "/">Home</Link></li>
		</ul>
	</nav>
)

export default DesktopNavbar