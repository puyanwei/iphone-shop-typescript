import React, { Component } from 'react';

import './CapacityPicker.css';

class CapacityPicker extends Component {
	render() {
		return (
			<div className="capacity-picker">
				<p>
					Capacity: <b>64GB</b>
				</p>
				<button>64</button>
				<button>256</button>
			</div>
		);
	}
}

export default CapacityPicker;
