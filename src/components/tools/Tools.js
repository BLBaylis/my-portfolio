import React from 'react'
import styles from './Tools.module.scss'
import LabelledIconList from '../labelledIconList/LabelledIconList'
import toolsData from '../../utils/toolsData'

const Tools = () => (
	<section className = {styles.tools}>
		<h2>Tools</h2>
		<h4>Tools of the trade</h4>
		<LabelledIconList data = {toolsData}/>
	</section>
)

export default Tools