import React, { Component } from 'react';

import './ColourPicker.css';

class ColourPicker extends Component {
	constructor() {
		super();
		this.state = {
			colour: 'Space Grey'
		};
	}
	render() {
		return (
			<div className="colour-picker">
				<p>
					Colour:{' '}
					<span className="picker-choice">{this.state.colour}</span>
				</p>
				<button onClick={() => this.colourChoice('Gold')}>Gold</button>
				<button onClick={() => this.colourChoice('Silver')}>
					Silver
				</button>
				<button onClick={() => this.colourChoice('Space Grey')}>
					SGrey
				</button>
			</div>
		);
	}
	colourChoice = (colour) => {
		this.props.handleColour(colour);
		this.setState({ colour: colour });
	};
}

export default ColourPicker;
