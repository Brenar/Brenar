import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import store from './redux/store'
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from './history'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
