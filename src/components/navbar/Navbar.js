import React from 'react';
import Link from 'gatsby-link';
import styles from './Navbar.module.css';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dropped : false
		}
		this.changeDroppedState = this.changeDroppedState.bind(this);
	}

	changeDroppedState(){
		this.setState((prevState) => ({
				dropped : !(prevState.dropped)
			})
		);
	}

	render() {
		const homeClass = this.state.dropped ? styles.homeDropped : styles.dropDownLink;
		const projectsClass = this.state.dropped ? styles.projectsDropped : styles.dropDownLink;
		const githubClass = this.state.dropped ? styles.githubDropped : styles.socialMediaLink;
		const linkedinClass = this.state.dropped ? styles.linkedinDropped : styles.socialMediaLink;
		return (
			<nav className = {styles.navbar}>
				<Link to = "/" onClick = {this.changeDroppedState}className = {styles.logoLink}>Bradley Baylis</Link>
				<button className = {styles.dropDownBtn} onClick = {this.changeDroppedState}>Drop</button>
				<Link to = "/" onClick = {this.changeDroppedState}className = {homeClass}>Home</Link>
				<Link to = "/404/" onClick = {this.changeDroppedState}className = {projectsClass}>Projects</Link>
				<a className = {githubClass} onClick = {this.changeDroppedState}href = "blbaylis.github.io">Github</a>
				<a className = {linkedinClass} onClick = {this.changeDroppedState} href = "www.linkedin.co.uk">Linkedin</a>
			</nav>
		);
	}
};


export default Navbar;
