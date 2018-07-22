import React, { Component } from 'react';

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
				<p>Capacity: {this.state.capacity}GB</p>
				<button onClick={() => this.handleCapacity(64)}>64</button>
				<button onClick={() => this.handleCapacity(256)}>256</button>
			</div>
		);
	}
	handleCapacity = (capacity) => {
		this.props.handlePrice(capacity);
		this.setState({ capacity: capacity });
	};
}

export default CapacityPicker;
