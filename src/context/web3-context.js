import React, { useState } from 'react';
import Web3 from 'web3';

const Web3Context = React.createContext();

function Web3Provider(props) {
	const [web3, setWeb3] = useState(null);

	React.useLayoutEffect(() => {
		const getWeb3 = async () => {
			if (window.ethereum) {
				setWeb3(new Web3(new Web3(window.ethereum).currentProvider));
				try {
					await window.ethereum.enable();
				} catch (error) {
					// error code 1 is set when user denied access
					setWeb3(1);
				}
			} else {
				// error code 2 is set when ethereum object not found
				setWeb3(2);
			}
		};
		getWeb3();
	}, []);

	if (web3 === 1) {
		return <div>User denied access to ethereum wallet</div>;
	} else if (web3 === 2) {
		return <div>Install metamask</div>;
	}

	return <Web3Context.Provider value={web3} {...props} />;
}

function useWeb3() {
	const context = React.useContext(Web3Context);
	if (context === undefined) {
		throw new Error(`useWeb3 must be used within a Web3Provider`);
	}
	return context;
}

export { Web3Provider, useWeb3 };
