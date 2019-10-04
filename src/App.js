import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddExpense from './components/AddExpense';
import Home from './components/Home';
import Reports from './components/Reports';
import NavBar from './components/NavBar'
import { observer, inject } from 'mobx-react';

@inject('expensesStore')
@observer
class App extends Component {

  render() {
    console.log(this.props.expensesStore.sumCurrentMonth)

    return (
      <Router>
        <NavBar store={this.props.expensesStore}/>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/add-expense" render={() => <AddExpense />} />
        <Route exact path="/reports" render={() => <Reports />} />
      </Router>
    )
  }
}

export default App