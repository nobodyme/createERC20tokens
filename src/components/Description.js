import React from 'react';
import '../styles/components/Description.css';
import DescriptionIcon from '../images/coins.svg';

function Description() {
	return (
		<div className="description">
			{/* <img
				src={DescriptionIcon}
				alt="description icon"
				height="400px"
				width="400px"
			/> */}
			<div className="description__tag">Create </div>
			<div className="description__tag">ERC20 tokens</div>
		</div>
	);
}

export default Description;
