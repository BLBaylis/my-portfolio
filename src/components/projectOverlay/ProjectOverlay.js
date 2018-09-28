import React from 'react'
import PropTypes from 'prop-types'
import styles from '../projectOverlay/ProjectOverlay.module.scss'
//import Typography from '@material-ui/core/Typography'

const ProjectOverlay = props => {
	const {thumbnail, tags} = props;
	return <div className={styles.projectOverlay}>
   			  <div className= {styles.img}>
   			    <img className= {styles.thumbnail} src={thumbnail} />
    		  </div>
    		  <div className= {styles.info}>
    		  {tags}
    		  </div>
			</div>
} 

ProjectOverlay.propTypes = {
	thumbnail: PropTypes.string,
	tags: PropTypes.object
}

export default ProjectOverlay