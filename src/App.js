import React from 'react';
import { Web3Provider } from './context/web3-context';
import CreateToken from './components/CreateToken';
import Description from './components/Description';
import './App.css';

function App() {
	return (
		<Web3Provider>
			<div className="App">
				<Description />
				<CreateToken />
			</div>
		</Web3Provider>
	);
}
export default App;
