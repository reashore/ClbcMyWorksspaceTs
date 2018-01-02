
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reactComponent = <App />;
const reactRoot = document.getElementById('reactRoot') as HTMLElement;

ReactDOM.render(reactComponent, reactRoot);

registerServiceWorker();
