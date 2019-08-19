import React from 'react';
import '../styles/components/StageIndicator.css';

import StatusHelper from './StatusHelper';

import { getEtherscanUrl } from '../utils/getEtherscanUrl';
import { FaEthereum } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import { IoIosNavigate } from 'react-icons/io';
import { GiThunderball } from 'react-icons/gi';

function StageIndicator({
	setSubmitToggle,
	processingStage,
	transactionHash,
	contractAddress,
	network
}) {
	let etherscanUrl = getEtherscanUrl(network);

	return (
		<div className="stageIndicator">
			<div className="stageIndicator__sectionContainer">
				<div className="stageIndicator__section__1 stageIndicator__section">
					<div className="stageIndicator__img">
						<FaEthereum />
					</div>
					<div className="stageIndicator__header">
						<div className="stageIndicator__title">
							Initiating Token Creation
						</div>
						<StatusHelper processingStage={processingStage} elementStage={1} />
					</div>
				</div>
				<div className="stageIndicator__section__2 stageIndicator__section">
					<div className="stageIndicator__img">
						<GiPayMoney />
					</div>
					<div className="stageIndicator__header">
						<div className="stageIndicator__title">Transaction Hash</div>
						{processingStage >= 2 ? (
							<a
								className="stageIndicator__link"
								href={`${etherscanUrl}/tx/${transactionHash}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								View on etherscan
							</a>
						) : null}
						<StatusHelper processingStage={processingStage} elementStage={1} />
					</div>
				</div>
				<div className="stageIndicator__section__3 stageIndicator__section">
					<div className="stageIndicator__img">
						<IoIosNavigate />
					</div>
					<div className="stageIndicator__header">
						<div className="stageIndicator__title">Contract Address</div>
						{processingStage === 3 ? (
							<a
								className="stageIndicator__link"
								href={`${etherscanUrl}/address/${contractAddress}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								View on etherscan
							</a>
						) : null}
						<StatusHelper processingStage={processingStage} elementStage={1} />
					</div>
				</div>
			</div>
			<div className="newTokenButton__container">
				<button
					className="newTokenButton"
					onClick={() => setSubmitToggle(bool => !bool)}
				>
					<span className="newTokenButton__icon">
						<GiThunderball />
					</span>
					Generate New Token
				</button>
			</div>
		</div>
	);
}

export default StageIndicator;
