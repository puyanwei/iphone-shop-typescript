import React, { Component } from 'react';
import data from './data/phones.json';

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
		return <div className="App" />;
	}
}

export default App;
