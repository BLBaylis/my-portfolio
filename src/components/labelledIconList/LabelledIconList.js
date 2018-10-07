import React from 'react'
import styles from './LabelledIconList.module.scss'
import PropTypes from 'prop-types'
import LabelledIcon from '../labelledIcon/LabelledIcon'
import Fade from 'react-reveal/Fade'

class LabelledIconList extends React.Component {
  constructor(props) {
    super(props)
  }

  generateList = data => {
    return data.map((x, index) => {
      let fadeLeft = index % 2 === 0 ? true : false
      return (
        <Fade key={x.label} left={fadeLeft} right={!fadeLeft}>
          <LabelledIcon icon={x.icon} link={x.link} label={x.label} />
        </Fade>
      )
    })
  }

  render() {
    return (
      <div className={styles.labelledIconList}>
        {this.generateList(this.props.data)}
      </div>
    )
  }
}

LabelledIconList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default LabelledIconList
