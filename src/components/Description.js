import React, { useState } from 'react';
import '../styles/components/Description.css';

import { useWeb3 } from '../context/web3-context';

function Description() {
	const web3 = useWeb3();
	const [network, setNetwork] = useState(null);

	React.useEffect(() => {
		if (web3 !== null) {
			web3.eth.net.getNetworkType().then(currentNetwork => {
				setNetwork(currentNetwork);
			});
		}
	}, [web3]);

	return (
		<div className="description">
			<div className="description__header">
				<div className="description__title">
					<div className="description__tag description__token">ERC20</div>
					<div className="description__tag">Generate Tokens</div>
					<div className="description__network">
						{network && (
							<span className="description__networkInfo">
								Connected to {network} network
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Description;
