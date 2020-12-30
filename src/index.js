import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router-dom';

import './styles/index.css';
import App from './components/stateful/App';

const app = (
  <ReactRouter.BrowserRouter>
    <App />
  </ReactRouter.BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
