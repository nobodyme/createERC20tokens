import React from 'react';
import '../styles/components/StatusIndicator.css';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
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
			<div className="statusIndicator__steps">
				<div className="statusIndicator__bar">
					<div className="status__defaultBar defaultBar__1" />
					<div
						className={`status__valueBar valueBar__1 ${
							status === 1
								? 'valueBar__status__1__half'
								: status >= 2
								? 'valueBar__status__1'
								: ''
						}`}
					/>
				</div>
				<div className="statusIndicator__bar">
					<div className="status__defaultBar" />
					<div
						className={`status__valueBar ${
							status === 3 ? 'valueBar__status__2' : ''
						}`}
					/>
				</div>
			</div>
			<div className="statusIndicator__name">
				<div
					className={`statusName ${status >= 1 ? 'statusName__active' : ''}`}
				>
					Token initiation
				</div>
				{status >= 2 ? (
					<a
						className="statusName statusName__active statusName__link"
						href={`${etherscanUrl}/tx/${transactionHash}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						Transaction Hash <FaExternalLinkSquareAlt />
					</a>
				) : (
					<div className="statusName">Transaction Hash</div>
				)}
				{status === 3 ? (
					<a
						className="statusName statusName__active statusName__link"
						href={`${etherscanUrl}/address/${contractAddress}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						Contract Address <FaExternalLinkSquareAlt />
					</a>
				) : (
					<div className="statusName">Contract Address</div>
				)}
			</div>
		</div>
	);
}

export default StatusIndicator;
