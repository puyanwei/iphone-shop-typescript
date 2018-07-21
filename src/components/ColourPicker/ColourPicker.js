import React, { Component } from 'react';

import './ColourPicker.css';

class ColourPicker extends Component {
	render() {
		return (
			<div className="colour-picker">
				<p>
					Colour:<b>Space Grey</b>
				</p>
				<button>Gold</button>
				<button>Silver</button>
				<button>SGrey</button>
			</div>
		);
	}
}

export default ColourPicker;
