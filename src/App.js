import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddExpense from './components/AddExpense';

@observer
class App extends Component {

  render() {

    return (
      <Router>
        
        <Route exact path="/add-expense" render={() => <AddExpense />}/>
      </Router>
    )
  }
}

export default App;
