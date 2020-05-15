import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './utils/Auth'
import { ExpensesProvider, expenseData } from './context/Expenses';
import { IncomeProvider, incomeData } from './context/Income';

const auth = new Auth()

ReactDOM.render(
  <ExpensesProvider value={expenseData}>
    <IncomeProvider value={incomeData}>
      <App auth={auth} />
    </IncomeProvider>
  </ExpensesProvider>, document.getElementById('root'))

serviceWorker.register()
