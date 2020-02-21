import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './utils/Auth'

const auth = new Auth()

ReactDOM.render(<App auth={auth} />, document.getElementById('root'));

serviceWorker.register();
