import React, { Component } from 'react';

import './CapacityPicker.css';

class CapacityPicker extends Component {
	constructor() {
		super();
		this.state = {
			capacity: 64
		};
	}
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
		this.setState({ capacity: 64 });
	};
	highCapacity = () => {
		this.setState({ capacity: 256 });
	};
}

export default CapacityPicker;
