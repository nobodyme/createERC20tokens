import React, { useState } from 'react';
import '../styles/components/Description.css';
import DescriptionIcon from '../images/coins.svg';

import { useWeb3 } from '../context/web3-context';

function Description() {
	const web3 = useWeb3();
	const [network, setNetwork] = useState(null);

	React.useEffect(() => {
		if (web3 !== null) {
			web3.eth.net.getNetworkType().then(currentNetwork => {
				setNetwork(`${currentNetwork} network`);
			});
		}
	}, [web3]);

	return (
		<div className="description">
			<div className="description__network">
				{network && <span className="description__networkInfo">{network}</span>}
			</div>
			<div className="description__header">
				<div className="description__title">
					<div className="description__tag">Create</div>
					<div className="description__tag">ERC20 Tokens</div>
				</div>
				<img
					className="description__img"
					src={DescriptionIcon}
					alt="description icon"
					height="300px"
					width="300px"
				/>
			</div>
		</div>
	);
}

export default Description;
