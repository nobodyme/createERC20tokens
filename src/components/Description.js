import React from 'react';
import '../styles/components/Description.css';
import DescriptionIcon from '../images/coins.svg';

function Description() {
	return (
		<div className="description">
			<div className="description__title">
				<div className="description__tag">Create</div>
				<div className="description__tag">ERC20 Tokens</div>
			</div>
			<img
				className="description__img"
				src={DescriptionIcon}
				alt="description icon"
				height="300px"
				width="300px"
			/>
		</div>
	);
}

export default Description;
