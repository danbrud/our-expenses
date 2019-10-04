import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import { Expenses } from './stores/Expenses';
import { GeneralStore } from './stores/GeneralStore';


const expensesStore = new Expenses()
const generalStore = new GeneralStore()
const stores = { expensesStore, generalStore }

ReactDOM.render(<Provider {...stores}><App /></Provider>, document.getElementById('root'));

serviceWorker.register();
