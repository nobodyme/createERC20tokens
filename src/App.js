import React, { useState } from 'react';
import CreateToken from './components/CreateToken';
import Description from './components/Description';
import './App.css';

import { useWeb3 } from './context/web3-context';

function App() {
	const web3 = useWeb3();
	const [ethereumNetwork, setEthereumNetwork] = useState(null);

	React.useEffect(() => {
		if (web3 !== null && web3 !== 1) {
			web3.eth.net.getNetworkType().then(currentNetwork => {
				setEthereumNetwork(currentNetwork);
			});
		}
	}, [web3]);

	return (
		<div className="App">
			<Description ethereumNetwork={ethereumNetwork} />
			<CreateToken ethereumNetwork={ethereumNetwork} />
		</div>
	);
}
export default App;
