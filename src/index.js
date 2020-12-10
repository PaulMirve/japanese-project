import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router } from 'react-router-dom';
import history from './history';
import 'normalize.css';

/**
 * Color palette
 * #FFFFFF
 * #00171F
 * #003459
 * #007EA7
 * #00A8E8
 */

document.body.style = 'background: #ffffff; font-family: Roboto, sans- serif; position: relative; min-height: 100vh';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
