import React, { Component } from 'react';

import './ColourPicker.css';

class ColourPicker extends Component {
	render() {
		return (
			<div className="colour-picker">
				<p>
					Colour: <b>Space Grey</b>
				</p>
				<button onClick={this.goldChoice}>Gold</button>
				<button onClick={this.silverChoice}>Silver</button>
				<button onClick={this.spaceGreyChoice}>SGrey</button>
			</div>
		);
	}
	goldChoice = () => {
		this.props.handleColour('gold');
	};
	silverChoice = () => {
		this.props.handleColour('silver');
	};
	spaceGreyChoice = () => {
		this.props.handleColour('space-grey');
	};
}

export default ColourPicker;
