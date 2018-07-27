import React from 'react';

import './RatingStars.css';

const RatingStars = () => {
	return (
		<div className="rating-stars">
			<span className="fa fa-star checked" />
			<span className="fa fa-star checked" />
			<span className="fa fa-star checked" />
			<span className="fa fa-star checked" />
			<span className="fa fa-star checked" />
		</div>
	);
};

export default RatingStars;
