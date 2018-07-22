import React, { Component } from 'react';

import data from './data/phones.json';
import iPhoneEightSpaceGrey from './images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';
import iPhoneEightSilver from './images/Apple_iPhone_8_Silver_WS2-full-product-front.png';
import iPhoneEightGold from './images/Apple_iPhone_8_Gold-full-product-front.png';
import RatingStars from './components/RatingStars/RatingStars';
import ColourPicker from './components/ColourPicker/ColourPicker';
import CapacityPicker from './components/CapacityPicker/CapacityPicker';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			phonesData: [],
			currentPhone: {
				capacity: 64,
				colour: 'Space Grey',
				imageURL: iPhoneEightSpaceGrey,
				alt: 'iPhone 8 Space Grey'
			}
		};
	}
	componentDidMount() {
		this.getJSONData();
	}
	getJSONData = () => {
		const name = data[0].groupName;
		const array = [];

		data[0].deviceSummary.forEach((element) => {
			array.push({
				name: element.displayName,
				description: element.displayDescription,
				colour: element.colourName,
				capacity: element.memory,
				upfrontPrice: element.priceInfo.hardwarePrice.oneOffPrice.gross,
				monthlyPrice: element.priceInfo.bundlePrice.monthlyPrice.gross
			});
		});
		this.setState({
			name: name,
			imageURL: iPhoneEightSpaceGrey,
			alt: 'iPhone 8 Space Grey',
			phonesData: array
		});
	};
	render() {
		return (
			<div className="App">
				<aside className=".side-image-container">
					<img
						src={this.state.currentPhone.imageURL}
						alt={this.state.currentPhone.alt}
						style={{ width: '70%' }}
					/>
				</aside>
				<main>
					<h1 className="product-name">{this.state.name}</h1>
					<RatingStars />
					<p className="product-description">
						{this.state.description}
					</p>
					<div className="bottom-container">
						<ColourPicker handleColour={this.handleColour} />
						<CapacityPicker handlePrice={this.handlePrice} />
						<p className="upfront-price">
							from £{this.state.currentPhone.upfrontPrice} upfront
							cost
						</p>
						<p className="monthly-price">
							when you pay £{this.state.imageURL} a month
						</p>
					</div>
				</main>
			</div>
		);
	}
	handlePrice = (capacity = 64) => {
		let upfrontPrice;
		let monthlyPrice;
		if (capacity === 256) {
			upfrontPrice = this.state.phones[5].upfrontPrice;
			monthlyPrice = this.state.phones[5].monthlyPrice;
		} else {
			upfrontPrice = this.state.phones[2].upfrontPrice;
			monthlyPrice = this.state.phones[2].monthlyPrice;
		}
		console.log(this.state);
		this.setState({
			phones: upfrontPrice,
			monthlyPrice: monthlyPrice
		});
	};

	handleColour = (colour) => {
		if (colour === 'Gold') {
			this.setState({
				currentPhone: {
					imageURL: iPhoneEightGold,
					alt: 'iPhone 8 Gold'
				}
			});
		}
		if (colour === 'Silver') {
			this.setState({
				currentPhone: {
					imageURL: iPhoneEightSilver,
					alt: 'iPhone 8 Silver'
				}
			});
		}
		if (colour === 'Space Grey') {
			this.setState({
				currentPhone: {
					imageURL: iPhoneEightSpaceGrey,
					alt: 'iPhone 8 Space Grey'
				}
			});
		}
	};
}

export default App;
