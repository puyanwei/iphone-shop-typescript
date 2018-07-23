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
			phonesData: [],
			name: null,
			currentDescription:
				'All-glass design, advanced cameras, wireless charging and a smart A11 Bionic chip. Intelligence never looked better.',
			currentImageURL: iPhone8SpaceGrey,
			currentImageAlt: 'PR_IMAGE_URLS_THUMBS_FRONT',
			currentUpfrontPrice: '1149',
			currentMonthlyPrice: '43.20'
		};
	}
	componentDidMount() {
		this.getJSONData();
	}
	render() {
		if (this.state.phonesData.length !== 6) {
			return <div className="data-delay" />;
		} else {
			return (
				<div className="App">
					<aside>
						<img
							src={this.state.currentImageURL}
							alt={this.state.currentImageAlt}
						/>
					</aside>
					<main>
						<h1 className="product-name">{this.state.name}</h1>
						<RatingStars />
						<p className="product-description">
							{this.state.currentDescription}
						</p>
						<div className="bottom-container">
							<ColourPicker handleColour={this.handleColour} />
							<CapacityPicker handlePrice={this.handlePrice} />
							<p className="upfront-price">
								from{' '}
								<span className="price-number">
									£{this.state.currentUpfrontPrice}
								</span>{' '}
								upfront cost
							</p>
							<p className="monthly-price">
								when you pay{' '}
								<span className="price-number">
									£{this.state.currentMonthlyPrice}
								</span>{' '}
								a month
							</p>
						</div>
					</main>
				</div>
			);
		}
	}
	handlePrice = (capacity = 64) => {
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
			currentUpfrontPrice: upfrontPrice,
			currentMonthlyPrice: monthlyPrice
		});
	};

	handleColour = (colourNumber) => {
		this.setState({
			currentImageURL: require(`${
				this.state.phonesData[colourNumber].imageURL
			}`),
			currentImageAlt: this.state.phonesData[colourNumber].imageAlt
		});
	};

	getJSONData = () => {
		const name = data[0].groupName;
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
			name: name,
			phonesData: array
		});
	};

	applyDefaults = () => {
		// const imageURL = this.state.phonesData[2].imageURL;
		// console.log(this.state.phonesData[2].imageURL);
		// const imageAlt = this.state.phonesData[2].imageAlt;
		// const upfrontPrice = this.state.phonesData[2].upfrontPrice;
		// const monthlyPrice = this.state.phonesData[2].monthlyPrice;
		//
		// this.setState({
		// imageURL: imageURL
		// 	imageAlt: imageAlt,
		// 	upfrontPrice: upfrontPrice,
		// 	monthlyPrice: monthlyPrice
		// });
	};
}

export default App;
