import React from 'react'
import styles from './Skills.module.scss'
import LabelledIconList from '../labelledIconList/LabelledIconList'
import skillsData from '../../utils/skillsData'
import Typography from '@material-ui/core/Typography'

const Skills = () => (
  <section className={styles.skills}>
    <Typography variant = "display2">Skills</Typography>
    <Typography variant = "title">Skills to pay the bills!</Typography>
    <LabelledIconList data={skillsData} />
  </section>
)

export default Skills
