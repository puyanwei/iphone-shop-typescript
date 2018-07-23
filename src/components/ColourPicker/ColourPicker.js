import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
				<button onClick={() => this.colourChoice(0)} />
				<button onClick={() => this.colourChoice(1)} />
				<button onClick={() => this.colourChoice(2)} />
			</div>
		);
	}
	colourChoice = (colourNumber) => {
		this.props.handleColour(colourNumber);
		let colour;
		if (colourNumber === 0) {
			colour = 'Gold';
		}
		if (colourNumber === 1) {
			colour = 'Silver';
		}
		if (colourNumber === 2) {
			colour = 'Space Grey';
		}
		this.setState({ colour: colour });
	};
}

ColourPicker.propTypes = {
	handleColour: PropTypes.func
};

export default ColourPicker;
