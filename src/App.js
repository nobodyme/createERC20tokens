import React from 'react';
import { Web3Provider } from './context/web3-context';
import CreateToken from './components/CreateToken';
import Description from './components/Description';
import './App.css';

function App() {
	return (
		<div className="Provider">
			<Web3Provider>
				<div className="App">
					<CreateToken />
					<Description />
				</div>
			</Web3Provider>
		</div>
	);
}
export default App;
