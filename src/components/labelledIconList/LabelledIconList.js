import React from 'react'
import styles from './LabelledIconList.module.scss'
import PropTypes from 'prop-types'
import LabelledIcon from '../labelledIcon/LabelledIcon'

class LabelledIconList extends React.Component {
	constructor(props) {
		super(props);
	}

	generateList = (data) => {
		return data.map(x => <LabelledIcon key = {x.label} icon = {x.icon} link = {x.link} label = {x.label}/>)
	}

	render() {
		return (
			<div className = {styles.labelledIconList}>
				{this.generateList(this.props.data)}
			</div>
		)
	}
}

LabelledIconList.propTypes = {
	data : PropTypes.array.isRequired
}

export default LabelledIconList