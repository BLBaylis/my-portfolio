import React from 'react'
import styles from './Anchor.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classNames'

const types = {
  sm: 'sm',
  md: 'md',
  lrg: 'lrg',
  xl: 'xl',
  primaryTheme: 'primary-theme-1',
  altTheme: 'alt-theme-1',
}

const Anchor = props => {
  const { href, text, btnSize, btnTheme} = props
  const className = classNames(
    styles.anchor,
    styles[btnSize || types.md],
    styles[btnTheme || types.primaryTheme],
  )
  return (
    <a href={href} className={className}>
      {text}
    </a>
  )
}

export const Sm = props => {
  return <Anchor {...props} btnSize="sm" />
}

export const Md = props => {
  return <Anchor {...props} btnSize="md" />
}

export const Lrg = props => {
  return <Anchor {...props} btnSize="lrg" />
}

export const Xl = props => {
  return <Anchor {...props} btnSize="xl" />
}

Anchor.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  btnSize: PropTypes.string,
  btnTheme: PropTypes.string,
}
