import React from 'react';
import metamaskFox from '../images/metamaskFox.svg';
// import { FiExternalLink } from 'react-icons/fi';

import '../styles/components/Error.css';

function Error({ web3 }) {
	let description;
	if (web3 === null)
		description =
			'Please connect the site to an etherum wallet like metamask to continue';
	else {
		description = 'User denied access, refresh to continue';
	}

	return (
		<div className="error">
			<div className="error__image">
				<img
					src={metamaskFox}
					alt="metamask"
					style={{ width: 80, height: 80 }}
				/>
			</div>
			{web3 !== 1 ? (
				<div className="error__button__container">
					<button className="error__button">
						{/* <span className="error__button__icon">
						<FiExternalLink />
					</span> */}
						<a
							href="https://metamask.io"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download Metamask
						</a>
					</button>
				</div>
			) : null}
			<div className="error__description__container">
				<div
					className={`error__description ${
						web3 === 1
							? 'description__error__alert'
							: 'description__warning__alert'
					}`}
				>
					{description}
				</div>
			</div>
		</div>
	);
}

export default Error;
