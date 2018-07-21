import React, { Component } from 'react';

import './RatingStars.css';

class RatingStars extends Component {
	render() {
		return (
			<div className="rating-stars">
				<span className="fa fa-star checked" />
				<span className="fa fa-star checked" />
				<span className="fa fa-star checked" />
				<span className="fa fa-star checked" />
				<span className="fa fa-star checked" />
			</div>
		);
	}
}

export default RatingStars;
