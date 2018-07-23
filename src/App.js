import React, { Component } from 'react';

import data from './data/phones.json';
import RatingStars from './components/RatingStars/RatingStars';
import ColourPicker from './components/ColourPicker/ColourPicker';
import CapacityPicker from './components/CapacityPicker/CapacityPicker';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phonesArray: [],
			currentPhone: null
		};
	}
	componentDidMount() {
		this.getJSONData();
	}

	// Grabs the data from JSON file and copies it to the state
	getJSONData = () => {
		const array = [];

		data[0].deviceSummary.forEach((phone) => {
			array.push({
				name: phone.displayName,
				description: phone.displayDescription,
				colour: phone.colourName,
				capacity: phone.memory,
				imageURL: phone.merchandisingMedia[0].value,
				imageAlt: phone.merchandisingMedia[0].id,
				upfrontPrice: phone.priceInfo.hardwarePrice.oneOffPrice.gross,
				monthlyPrice: phone.priceInfo.bundlePrice.monthlyPrice.gross
			});
		});
		this.setState({
			currentPhone: array[2],
			phonesArray: array
		});
	};
	render() {
		if (!this.state.phonesArray.length) {
			return <div className="loading-splash">Loading...</div>;
		}
		return (
			<div className="App">
				<aside>
					<img
						src={require(`${this.state.currentPhone.imageURL}`)}
						alt={this.state.currentPhone.imageAlt}
					/>
				</aside>
				<main>
					<h1 className="product-name">
						{this.state.currentPhone.name}
					</h1>
					<RatingStars />
					<p className="product-description">
						{this.state.currentPhone.description}
					</p>
					<div className="bottom-container">
						<ColourPicker handleColour={this.handleColour} />
						<CapacityPicker handlePrice={this.handlePrice} />
						<p className="upfront-price">
							from{' '}
							<span className="price-number">
								£{this.state.currentPhone.upfrontPrice}
							</span>{' '}
							upfront cost
						</p>
						<p className="monthly-price">
							when you pay{' '}
							<span className="price-number">
								£{this.state.currentPhone.monthlyPrice}
							</span>{' '}
							a month
						</p>
					</div>
				</main>
			</div>
		);
	}
	handlePrice = (capacity) => {
		this.updateCurrentPhoneState(capacity, this.state.currentPhone.colour);
	};

	handleColour = (colour) => {
		this.updateCurrentPhoneState(this.state.currentPhone.capacity, colour);
	};

	updateCurrentPhoneState = (capacity, colour) => {
		let combinations = [
			'64GB Gold',
			'64GB Silver',
			'64GB Space Grey',
			'256GB Gold',
			'256GB Silver',
			'256GB Space Grey'
		];
		let index = combinations.indexOf(`${capacity} ${colour}`);
		this.setState({ currentPhone: this.state.phonesArray[index] });
	};
}

export default App;
