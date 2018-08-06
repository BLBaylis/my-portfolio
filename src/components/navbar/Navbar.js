import React from 'react'
import Link from 'gatsby-link'
import undroppedStyles from './NavbarUndropped.module.css'
import droppedStyles from './NavbarDropped.module.css'

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
    const styles = this.state.dropped ? droppedStyles : undroppedStyles
    return (
      <nav className={undroppedStyles.navbar}>
        <div className={undroppedStyles.internalLinksWrapper}>
          <Link to="/" onClick={this.closeMenu} className={styles.home}>
            Home
          </Link>
          <Link to="/404/" onClick={this.closeMenu} className={styles.projects}>
            Projects
          </Link>
        </div>
        <Link
          to="/"
          onClick={this.closeMenu}
          className={undroppedStyles.logoLink}
        >
          Bradley Baylis
        </Link>
        <button
          className={undroppedStyles.dropDownBtn}
          onClick={this.toggleMenu}
        >
          Drop
        </button>
        <div className={undroppedStyles.externalLinksWrapper}>
          <a
            className={styles.github}
            onClick={this.closeMenu}
            href="blbaylis.github.io"
          >
            awda
          </a>
          <a
            className={styles.linkedin}
            onClick={this.closeMenu}
            href="www.linkedin.co.uk"
          >
            dawd
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
