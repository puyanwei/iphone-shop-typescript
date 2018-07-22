import React, { Component } from 'react';

import './CapacityPicker.css';

class CapacityPicker extends Component {
	render() {
		return (
			<div className="capacity-picker">
				<p>
					Capacity: <b>64GB</b>
				</p>
				<button onClick={this.lowCapacity}>64</button>
				<button onClick={this.highCapacity}>256</button>
			</div>
		);
	}
	lowCapacity = () => {
		this.props.handlePrice(64);
	};
	highCapacity = () => {
		this.props.handlePrice(256);
	};
}

export default CapacityPicker;
