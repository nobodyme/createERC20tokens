import React, { useState } from 'react';
import { useWeb3 } from '../context/web3-context';

import '../styles/components/CreateToken.css';

import CreateTokenForm from './CreateTokenForm';
import Error from './Error';
import StageIndicator from './StageIndicator';

function CreateToken({ ethereumNetwork }) {
	const web3 = useWeb3();

	const [processingStage, setProcessingStage] = useState(0);
	const [transactionHash, setTransactionHash] = useState(null);
	const [contractAddress, setContractAddress] = useState(null);
	const [submitToggle, setSubmitToggle] = useState(false);

	return (
		<div className="createToken">
			{web3 === null || web3 === 1 ? (
				<Error web3={web3} />
			) : (
				<div className="createToken__card">
					<div className="createToken__container">
						<div className="createToken__form">
							{submitToggle === false ? (
								<>
									<div className="createToken__formHeader">Generate Tokens</div>
									<CreateTokenForm
										web3={web3}
										setSubmitToggle={setSubmitToggle}
										setProcessingStage={setProcessingStage}
										setTransactionHash={setTransactionHash}
										setContractAddress={setContractAddress}
									/>
								</>
							) : (
								<StageIndicator
									setSubmitToggle={setSubmitToggle}
									processingStage={processingStage}
									transactionHash={transactionHash}
									contractAddress={contractAddress}
									ethereumNetwork={ethereumNetwork}
								/>
							)}
						</div>
						<div className="createToken__formDisclaimer">
							{submitToggle === false
								? 'We take no responsibility for any security problems you might experience, please verify the contract yourself.'
								: 'You can close the tab or browser anytime now. The deployment will continue and you can check the result in your connected wallet.'}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default CreateToken;
