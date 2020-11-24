import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router } from 'react-router-dom';
import history from './history';
import 'normalize.css';

document.body.style = 'background: #d8e1e9;';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
