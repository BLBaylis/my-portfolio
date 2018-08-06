import React from 'react';
import styles from './InfoSection.module.css';
import PropTypes from 'prop-types';


const InfoSection = props => {
 	return (
		<div className={styles.outerDiv}>
			<div className={styles.innerDiv}>
				<div className={styles.contentContainer}>{props.children}</div>
			</div>
			<div className={styles.sectionName}>{props.sectionName}</div>
		</div>
  	);
}

InfoSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default InfoSection;
