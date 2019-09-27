import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddExpense from './components/AddExpense';
import Home from './components/Home';
import Reports from './components/Reports';
// import NavBar from './components/NavBar'

export default function App() {

    return (
      <Router>
        {/* <NavBar />  */}
        <Route exact path="/" render={() => <Home />}/>        
        <Route exact path="/add-expense" render={() => <AddExpense />}/>
        <Route exact path="/reports" render={() => <Reports />} />
      </Router>
    )
}