import React from 'react'
import styles from './Tools.module.scss'
import LabelledIconList from '../labelledIconList/LabelledIconList'
import toolsData from '../../utils/toolsData'
import Typography from '@material-ui/core/Typography'

const Tools = () => (
  <section className={styles.tools}>
    <Typography variant="display2" gutterBottom>
      Tools
    </Typography>
    <Typography variant="title">Tools of the trade</Typography>
    <LabelledIconList data={toolsData} />
  </section>
)

export default Tools
