import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CapacityPicker.css';

class CapacityPicker extends Component {
	constructor() {
		super();
		this.state = {
			capacity: '64'
		};
	}
	render() {
		return (
			<div className="capacity-picker">
				<p>
					Capacity:{' '}
					<span className="picker-choice">
						{this.state.capacity}GB
					</span>
				</p>
				<button onClick={() => this.handleCapacity(64)}>
					<span className="capacity-number">64</span>
				</button>
				<button onClick={() => this.handleCapacity(256)}>
					<span className="capacity-number">256</span>
				</button>
			</div>
		);
	}
	handleCapacity = (capacity) => {
		this.props.handlePrice(capacity);
		this.setState({ capacity: capacity });
	};
}

CapacityPicker.propTypes = {
	handlePrice: PropTypes.func
};

export default CapacityPicker;
