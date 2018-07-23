import React, { Component } from 'react';

import data from './data/phones.json';
import iPhone8SpaceGrey from './images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';
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
		const groupName = data[0].groupName;
		const array = [];

		data[0].deviceSummary.forEach((element) => {
			array.push({
				name: element.displayName,
				description: element.displayDescription,
				upfrontPrice: element.priceInfo.hardwarePrice.oneOffPrice.gross,
				monthlyPrice: element.priceInfo.bundlePrice.monthlyPrice.gross,
				imageURL: element.merchandisingMedia[0].value,
				imageAlt: element.merchandisingMedia[0].id
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
	// Handles the button pressed value in CapacityPicker component and updates the page
	handlePrice = (capacity = 64) => {
		let upfrontPrice;
		let monthlyPrice;
		if (capacity === 256) {
			upfrontPrice = this.state.phonesArray[5].upfrontPrice;
			monthlyPrice = this.state.phonesArray[5].monthlyPrice;
		} else {
			upfrontPrice = this.state.phonesArray[2].upfrontPrice;
			monthlyPrice = this.state.phonesArray[2].monthlyPrice;
		}
		this.setState({
			currentUpfrontPrice: upfrontPrice,
			currentMonthlyPrice: monthlyPrice
		});
	};

	// Handles the button pressed value in ColourPicker component and updates the page
	handleColour = (colourNumber = 2) => {
		this.setState({
			currentImageURL: require(`${
				this.state.phonesArray[colourNumber].imageURL
			}`),
			currentImageAlt: this.state.phonesArray[colourNumber].imageAlt
		});
	};
}

export default App;
