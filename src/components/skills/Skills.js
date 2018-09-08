import React from 'react'
import styles from './Skills.module.css'
import LabelledIconList from '../labelledIconList/LabelledIconList'
import skillsData from '../../utils/skillsData'

const Skills = () => (
	<section className = {styles.skills}>
		<h2>Skills</h2>
		<LabelledIconList data = {skillsData}/>
	</section>
)

export default Skills