import React from 'react'
import styles from './Link.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classNames'

const types = {
	sm : 'sm',
	md : 'md',
	lrg : 'lrg',
	xl : 'xl',
	primaryTheme : 'primary-theme',
	altTheme : 'alt-theme'
}

const Link = props => {
	const {to, text, btnSize, btnTheme} = props;
	const className = classNames(styles.link, styles[btnSize || types.md], styles[btnTheme || types.primaryTheme]);
	return <a to = {to} className = {className}>{text}</a>
}

export const Sm = props => {
	return <Link {...props} btnSize = "sm"/> 
}

export const Md = props => {
	return <Link {...props} btnSize = "md"/> 
}

export const Lrg = props => {
	return <Link {...props} btnSize = "lrg"/> 
}

export const Xl = props => {
	return <Link {...props} btnSize = "xl"/> 
}

Link.propTypes = {
	text : PropTypes.string.isRequired,
	to : PropTypes.string.isRequired,
	btnSize : PropTypes.string,
	btnTheme : PropTypes.string
}
