import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Web3Provider } from "./context/web3-context";
import Media from "react-media";

import App from "./App";
import Mobile from "./components/Mobile";

ReactDOM.render(
	<Media query="(min-width: 320px) and (max-width: 767px)">
		{matches =>
			matches ? (
				<Mobile />
			) : (
				<Web3Provider>
					<App />
				</Web3Provider>
			)
		}
	</Media>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
