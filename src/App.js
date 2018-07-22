import React, { Component } from 'react';

import data from './data/phones.json';
import RatingStars from './components/RatingStars/RatingStars';
import ColourPicker from './components/ColourPicker/ColourPicker';
import CapacityPicker from './components/CapacityPicker/CapacityPicker';
import iPhoneEightSpaceGrey from './images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			description: null,
			colour: null,
			capacity: null,
			upFrontPrice: null,
			monthlyPrice: null
		};
	}
	componentDidMount() {
		this.getJSONData();
	}
	getJSONData = () => {
		const name = data[0].groupName;
		const description = data[0].deviceSummary[2].displayDescription;
		const colour = data[0].deviceSummary[2].colourName;
		const capacity = data[0].deviceSummary[2].memory;
		const upFrontPrice =
			data[0].deviceSummary[2].priceInfo.hardwarePrice.oneOffDiscountPrice.gross;
		const monthlyPrice =
			data[0].deviceSummary[2].priceInfo.bundlePrice.monthlyPrice.gross;

		this.setState({
			name: name,
			description: description,
			colour: colour,
			capacity: capacity,
			upFrontPrice: upFrontPrice,
			monthlyPrice: monthlyPrice
		});
	};
	render() {
		return (
			<div className="App">
				<aside className=".side-image-container">
					<img
						src={iPhoneEightSpaceGrey}
						alt="iPhone space grey"
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
						<ColourPicker />
						<CapacityPicker />
						<p className="upfront-price">
							from £{this.state.upFrontPrice} upfront cost
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

export default App;
