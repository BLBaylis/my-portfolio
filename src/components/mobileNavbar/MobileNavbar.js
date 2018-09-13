import React from 'react'
import styles from './MobileNavbar.module.css'
import Link from 'gatsby-link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

class MobileNavbar extends React.Component {
	constructor() {
		super();
		this.state = {
			navbarDropped : true
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
    	this.setState(prevState => ({
      		navbarDropped: !prevState.navbarDropped,
  		}))
  	}

	render() {
		return <nav className = {styles.mobileNavbar}>
			<ul className = {styles.navList}>
				<li className = {styles.logo}><Link className = {styles.anchor} to = "/">Bradley Baylis</Link></li>
				{this.state.navbarDropped && 
					<ul className = {styles.dropdownMenu}>
						<li className = {styles.navLink}><Link className = {styles.anchor} onClick = {this.toggleMenu} to = "/">Home</Link></li>
						<li className = {styles.navLink}><a className = {styles.anchor} onClick = {this.toggleMenu} href = "#about-me">About Me</a></li>
						<li className = {styles.navLink}><a className = {styles.anchor} onClick = {this.toggleMenu} href = "#projects">Projects</a></li>
						<li className = {styles.navLink}><a className = {styles.anchor} onClick = {this.toggleMenu} href = "#contact">Contact</a></li>
					</ul>
				}			
			</ul>
			<button className = {styles.dropdownBtn}>
				<FontAwesomeIcon
					onClick = {this.toggleMenu}
            		className={styles.dropdownIcon}
            		icon="bars"
          		/>
			</button>
		</nav>

		
	}
}

export default MobileNavbar