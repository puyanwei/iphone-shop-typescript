import React, { Component } from 'react';

import data from './data/phones.json';
import RatingStars from './components/RatingStars/RatingStars';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iphone: data
		};
	}
	componentDidMount = () => {
		console.log(this.state.iphone);
	};
	render() {
		return (
			<div className="App">
				<aside className=".side-image-container">
					<img
						src={require('./images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png')}
						alt="iPhone space grey"
						style={{ width: '70%' }}
					/>
				</aside>
				<main>
					<h1 className="product-title">
						{this.state.iphone[0].groupName}
					</h1>
					<RatingStars />
					<p className="product-description">
						{
							this.state.iphone[0].deviceSummary[2]
								.displayDescription
						}
					</p>
					<h2>COLOUR COMPONENT</h2>
					<h2>CAPACITY COMPONENT</h2>
					<p className="upfront-price">
						from £{
							this.state.iphone[0].deviceSummary[2].priceInfo
								.hardwarePrice.oneOffDiscountPrice.gross
						}{' '}
						upfront cost
					</p>
					<p className="monthly-price">
						when you pay £{
							this.state.iphone[0].deviceSummary[2].priceInfo
								.bundlePrice.monthlyPrice.gross
						}{' '}
						a month
					</p>
				</main>
			</div>
		);
	}
}

export default App;
