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
				<aside>
					<img
						src={require('./images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png')}
						alt="iPhone space grey"
						style={{ width: '70%' }}
					/>
				</aside>
				<main>
					<h1>Apple iPhone 8</h1>
					<RatingStars />
					<p>
						All glas design, advanced cameras, wireless charging and
						a smart A11 Bionic chip. Intelligence never looked
						better
					</p>
					<h2>COLOUR COMPONENT</h2>
					<h2>CAPACITY COMPONENT</h2>
					<p>from £1149 upfront cost</p>
					<p>when you pay £43.20 a month</p>
				</main>
			</div>
		);
	}
}

export default App;
