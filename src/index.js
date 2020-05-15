import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './utils/Auth'
import { ExpensesProvider, expenseData } from './context/Expenses';

const auth = new Auth()

ReactDOM.render(
  <ExpensesProvider value={expenseData}>
    <App auth={auth} />
  </ExpensesProvider>, document.getElementById('root'))

serviceWorker.register()
