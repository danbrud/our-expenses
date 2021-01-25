import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './utils/Auth'
import { Provider } from 'react-redux';
import { store } from './state/store';

const auth = new Auth()

ReactDOM.render(
  <Provider store={store}>
    <App auth={auth} />
  </Provider>, document.getElementById('root'));

serviceWorker.register();
