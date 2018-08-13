import React from 'react'
import Link from 'gatsby-link'
import defaultStyles from './NavbarDefault.module.css'
import droppedStyles from './NavbarDropped.module.css'
import github from '../../static/images/github.png'
import linkedin from '../../static/images/linkedin.png'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropped: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  toggleMenu() {
    this.setState(prevState => ({
      dropped: !prevState.dropped,
    }))
  }

  closeMenu() {
    this.setState({ dropped: false })
  }

  render() {
    const styles = this.state.dropped ? droppedStyles : defaultStyles
    return (
      <nav className={defaultStyles.navbar}>
        <div className={defaultStyles.internalLinksWrapper}>
          <Link to="/" onClick={this.closeMenu} className={styles.home}>
            Home
          </Link>
          <Link
            to="/projects/"
            onClick={this.closeMenu}
            className={styles.projects}
          >
            Projects
          </Link>
        </div>
        <Link
          to="/"
          onClick={this.closeMenu}
          className={defaultStyles.logoLink}
        >
          Bradley Baylis
        </Link>
        <button
          className={defaultStyles.dropDownBtn}
          onClick={this.toggleMenu}
        >
          <FontAwesomeIcon
        className= {defaultStyles.dropDownIcon}
        size = "2x"
        icon="bars"
      />
        </button>
        <div className={defaultStyles.externalLinksWrapper}>
          <a
            className={styles.github}
            onClick={this.closeMenu}
            href="https://github.com/BLBaylis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className = {defaultStyles.logo} src = {github}/>
          </a>
          <a
            className={styles.linkedin}
            onClick={this.closeMenu}
            href="https://uk.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className = {defaultStyles.logo} src = {linkedin}/>
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
