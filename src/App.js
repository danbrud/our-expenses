import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddExpense from './components/AddExpense';
import Home from './components/Home';
import Reports from './components/Reports';
import NavBar from './components/NavBar'
import { observer, inject } from 'mobx-react';
import axios from 'axios'
const API_URL = 'http://localhost:4000'
// const API_URL = ''


function App() {
  const currentMonth = new Date().getMonth()

  const getExpenses = async (shouldGetByMonth = true) => {
    const optionalMonthParam = shouldGetByMonth !== -1 ? `?month=${currentMonth}` : ''

    const res = await axios.get(`${API_URL}/expenses${optionalMonthParam}`)
    return res.data
  }


  return (
    <Router>
      {/* <NavBar store={this.props.expensesStore} /> */}
      <Route exact path="/" render={() => <Home getExpenses={getExpenses} />} />
      <Route exact path="/add-expense" render={() => <AddExpense />} />
      <Route exact path="/reports" render={() => <Reports />} />
    </Router>
  )
}

export default App