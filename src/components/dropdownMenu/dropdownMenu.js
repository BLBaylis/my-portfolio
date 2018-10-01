import React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from './DropdownMenu.module.scss'
import Link from 'gatsby-link'

const DropdownMenu = () => (
  <ul className={styles.navList}>
    <li className={styles.navLink}>
      <Typography variant="title" className={styles.type}>
        <a className={styles.anchor} href="#contact">
          Contact
        </a>
      </Typography>
    </li>
    <li className={styles.navLink}>
      <Typography variant="title" className={styles.type}>
        <a className={styles.anchor} href="#projects">
          Projects
        </a>
      </Typography>
    </li>
    <li className={styles.navLink}>
      <Typography variant="title" className={styles.type}>
        <a className={styles.anchor} href="#about">
          About Me
        </a>
      </Typography>
    </li>
    <li className={styles.navLink}>
      <Typography variant="title" className={styles.type}>
        <Link className={styles.anchor} to="/">
          Home
        </Link>
      </Typography>
    </li>
  </ul>
)

export default DropdownMenu
