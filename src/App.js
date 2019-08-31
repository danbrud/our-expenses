import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddExpense from './components/AddExpense';
import Expenses from './components/Expenses';

export default function App() {

    return (
      <Router>
        <Route exact path="/" render={() => <Expenses />}/>        
        <Route exact path="/add-expense" render={() => <AddExpense />}/>
      </Router>
    )
}