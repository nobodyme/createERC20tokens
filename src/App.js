import React, { useState } from 'react';
import { Web3Provider } from './context/web3-context';
import CreateToken from './components/CreateToken';
import Description from './components/Description';
import './App.css';

function App() {
	const [status, setStatus] = useState(0);
	const [transactionHash, setTransactionHash] = useState(null);
	const [contractAddress, setContractAddress] = useState(null);

	return (
		<Web3Provider>
			<div className="App">
				<CreateToken
					setStatusHandler={setStatus}
					setTransactionHash={setTransactionHash}
					setContractAddress={setContractAddress}
				/>
				<Description
					status={status}
					transactionHash={transactionHash}
					contractAddress={contractAddress}
				/>
			</div>
		</Web3Provider>
	);
}
export default App;
