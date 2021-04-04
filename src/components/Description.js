import React from "react";
import "../styles/components/Description.css";

function Description({ ethereumNetwork }) {
	return (
		<div className="description">
			<div className="description__header">
				<div className="description__title">
					<div className="description__tag description__token">ERC20</div>
					<div className="description__tag">Create Tokens</div>
					<div className="description__network">
						{ethereumNetwork !== null ? (
							<span className="description__networkInfo networkInfo__active">
								Connected to {ethereumNetwork} network
							</span>
						) : (
							<span className="description__networkInfo networkInfo__inactive">
								Not connected
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Description;
