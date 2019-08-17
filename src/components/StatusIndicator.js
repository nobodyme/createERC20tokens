import React from 'react';
import '../styles/components/StatusIndicator.css';
import { getEtherscanUrl } from '../utils/getEtherscanUrl';

function StatusIndicator({
	status,
	transactionHash,
	contractAddress,
	network
}) {
	let etherscanUrl = getEtherscanUrl(network);
	return (
		<div className="statusIndicator">
			<div className="statusIndicator__section__1">
				<div className="statusIndicator__img" />
				<div className="statusIndicator__header">
					<div className="statusIndicator__title">
						Initiation token creation
					</div>
					<div>Success</div>
				</div>
			</div>
			<div className="statusIndicator__section__2">
				<div className="statusIndicator__img" />
				<div className="statusIndicator__header">
					<div className="statusIndicator__title">Transaction Hash</div>
					{status >= 2 ? (
						<a
							className="statusName statusName__active statusName__link"
							href={`${etherscanUrl}/tx/${transactionHash}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							View on etherscan
						</a>
					) : null}
					<div>Success</div>
				</div>
			</div>
			<div className="statusIndicator__section__3">
				<div className="statusIndicator__img" />
				<div className="statusIndicator__header">
					<div className="statusIndicator__title">Transaction Hash</div>
					{status === 3 ? (
						<a
							className="statusName statusName__active statusName__link"
							href={`${etherscanUrl}/address/${contractAddress}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							View on etherscan
						</a>
					) : null}
					<div>Success</div>
				</div>
			</div>
		</div>
	);
}

export default StatusIndicator;
