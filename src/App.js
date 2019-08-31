import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddExpense from './components/AddExpense';
import Home from './components/Home';

export default function App() {

    return (
      <Router>
        <Route exact path="/" render={() => <Home />}/>        
        <Route exact path="/add-expense" render={() => <AddExpense />}/>
      </Router>
    )
}