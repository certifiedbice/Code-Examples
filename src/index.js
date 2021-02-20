import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { ContextProvider } from './context/Context'

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
  	</React.StrictMode>,
  	document.getElementById('root')
);