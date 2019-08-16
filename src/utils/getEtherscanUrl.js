export const getEtherscanUrl = network => {
	let etherscanUrl;
	switch (network) {
		case 'mainnet':
			etherscanUrl = 'https://etherscan.io/';
			break;

		case 'ropsten':
			etherscanUrl = 'https://ropsten.etherscan.io/';
			break;

		case 'kovan':
			etherscanUrl = 'https://kovan.etherscan.io/';
			break;

		case 'rinkeby':
			etherscanUrl = 'https://rinkeby.etherscan.io/';
			break;

		default:
			etherscanUrl = null;
	}
	return etherscanUrl;
};
