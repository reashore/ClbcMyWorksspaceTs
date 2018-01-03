
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyWorkspace } from './pages/MyWorkspace';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const reactComponent = <MyWorkspace />;
const reactRoot = document.getElementById('reactRoot') as HTMLElement;

ReactDOM.render(reactComponent, reactRoot);

registerServiceWorker();
