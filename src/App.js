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
			imageURL: iPhoneEightSpaceGrey,
			alt: 'iPhone 8 Space Grey',
			upfrontPrice: '1149',
			monthlyPrice: '43.20'
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
				upfrontPrice: element.priceInfo.hardwarePrice.oneOffPrice.gross,
				monthlyPrice: element.priceInfo.bundlePrice.monthlyPrice.gross
			});
		});
		this.setState({
			name: name,
			phonesData: array
		});
	};
	render() {
		if (this.state.phonesData.length === 0) {
			return <div className="data-delay" />;
		} else {
			return (
				<div className="App">
					<aside className=".side-image-container">
						<img
							src={this.state.imageURL}
							alt={this.state.alt}
							style={{ width: '70%' }}
						/>
					</aside>
					<main>
						<h1 className="product-name">{this.state.name}</h1>
						<RatingStars />
						<p className="product-description">
							{this.state.phonesData[0].description}
						</p>
						<div className="bottom-container">
							<ColourPicker handleColour={this.handleColour} />
							<CapacityPicker handlePrice={this.handlePrice} />
							<p className="upfront-price">
								from £{this.state.upfrontPrice} upfront cost
							</p>
							<p className="monthly-price">
								when you pay £{this.state.monthlyPrice} a month
							</p>
						</div>
					</main>
				</div>
			);
		}
	}
	handlePrice = (capacity) => {
		let upfrontPrice;
		let monthlyPrice;
		if (capacity === 256) {
			upfrontPrice = this.state.phonesData[5].upfrontPrice;
			monthlyPrice = this.state.phonesData[5].monthlyPrice;
		} else {
			upfrontPrice = this.state.phonesData[2].upfrontPrice;
			monthlyPrice = this.state.phonesData[2].monthlyPrice;
		}
		this.setState({
			upfrontPrice: upfrontPrice,
			monthlyPrice: monthlyPrice
		});
	};

	handleColour = (colour) => {
		if (colour === 'Gold') {
			this.setState({
				imageURL: iPhoneEightGold,
				alt: 'iPhone 8 Gold'
			});
		}
		if (colour === 'Silver') {
			this.setState({
				imageURL: iPhoneEightSilver,
				alt: 'iPhone 8 Silver'
			});
		}
		if (colour === 'Space Grey') {
			this.setState({
				imageURL: iPhoneEightSpaceGrey,
				alt: 'iPhone 8 Space Grey'
			});
		}
	};
}

export default App;
