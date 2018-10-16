import React from 'react'
import PropTypes from 'prop-types'
import styles from '../projectOverlay/ProjectOverlay.module.scss'
import WhiteTypography from '../whiteTypography/WhiteTypography'

function groupElementsInArrIntoSets(arr, setLength) {
  let arrCopy = []
  for (let i = 0; i < arr.length / setLength; i++) {
    arrCopy.push(arr.slice(i * setLength, i * setLength + setLength))
  }
  return arrCopy
}

function capitaliseFirstLetter(str){
	let firstLetter = str[0].toUpperCase();
	return firstLetter + str.slice(1);
}

const ProjectOverlay = props => {
  const { thumbnail, tags, direction } = props;
  let newDirection = capitaliseFirstLetter(direction);
  let tagEls = groupElementsInArrIntoSets(tags, 3).map(x => (
    <WhiteTypography key={Math.random() * 10} variant="button">
      <div className={styles.row}>
        {x.map(y => (
          <li className={styles.tag} key={Math.random() * 0.001}>
            {y}
          </li>
        ))}
      </div>
    </WhiteTypography>
  ))
  return (
    <div className={styles.projectOverlay}>
      <div className={styles[`img${newDirection}`]}>
        <img className={styles.thumbnail} src={thumbnail} />
      </div>
      <div className={styles[`info${newDirection}`]}>
        <ul className={styles.tagsWrapper}>{tagEls}</ul>
      </div>
    </div>
  )
}

ProjectOverlay.propTypes = {
  thumbnail: PropTypes.string,
  tags: PropTypes.array,
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']).isRequired,
}

export default ProjectOverlay
