import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyWorkspace from './pages/MyWorkspace';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyWorkspace />, div);
});
