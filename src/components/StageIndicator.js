import React from 'react';
import '../styles/components/StageIndicator.css';

import StatusHelper from './StatusHelper';

import { getEtherscanUrl } from '../utils/getEtherscanUrl';
import { FaEthereum } from 'react-icons/fa';
import { GiPayMoney, GiThunderball } from 'react-icons/gi';
import { IoIosNavigate, IoMdCopy, IoIosArrowRoundUp } from 'react-icons/io';

function StageIndicator({
	setSubmitToggle,
	processedStage,
	transactionHash,
	contractAddress,
	ethereumNetwork
}) {
	let etherscanUrl = getEtherscanUrl(ethereumNetwork);

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
						<StatusHelper processedStage={processedStage} elementStage={1} />
					</div>
				</div>
				<div className="stageIndicator__section__2 stageIndicator__section">
					<div className="stageIndicator__img">
						<GiPayMoney />
					</div>
					<div className="stageIndicator__header">
						<div className="stageIndicator__title">Transaction Hash</div>
						{processedStage >= 2 ? (
							<div className="stageIndicator__link__container">
								<a
									className="stageIndicator__link"
									href={`${etherscanUrl}/tx/${transactionHash}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									View on etherscan
									<span className="stageIndicator__extLink">
										<IoIosArrowRoundUp />
									</span>
								</a>
								<span className="stageIndicator__copy">
									<IoMdCopy />
								</span>
							</div>
						) : null}
						<StatusHelper processedStage={processedStage} elementStage={2} />
					</div>
				</div>
				<div className="stageIndicator__section__3 stageIndicator__section">
					<div className="stageIndicator__img">
						<IoIosNavigate />
					</div>
					<div className="stageIndicator__header">
						<div className="stageIndicator__title">Contract Address</div>
						{processedStage === 3 ? (
							<div className="stageIndicator__link__container">
								<a
									className="stageIndicator__link"
									href={`${etherscanUrl}/address/${contractAddress}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									View on etherscan
									<span className="stageIndicator__extLink">
										<IoIosArrowRoundUp />
									</span>
								</a>
								<span className="stageIndicator__copy">
									<IoMdCopy />
								</span>
							</div>
						) : null}
						<StatusHelper processedStage={processedStage} elementStage={3} />
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
