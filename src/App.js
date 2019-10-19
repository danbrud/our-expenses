import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddExpense from './components/AddExpense';
import Home from './components/Home';
import Reports from './components/Reports';
import NavBar from './components/NavBar'
import axios from 'axios'
import './App.css'
const API_URL = 'http://localhost:4000'
// const API_URL = ''


function App() {
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth())
  const [expenses, setExpenses] = React.useState([])
  

  const changeCurrentMonth = async month => setCurrentMonth(month)

  useEffect(() => {
    const getExpenses = async (shouldGetByMonth = true) => {
      const optionalMonthParam = shouldGetByMonth !== -1 ? `?month=${currentMonth}` : ''
  
      const res = await axios.get(`${API_URL}/expenses${optionalMonthParam}`)
      setExpenses(res.data)
    }
    
    getExpenses()
  }, [currentMonth])

  return (
    <Router>
      {/* <NavBar store={this.props.expensesStore} /> */}
      <Route exact path="/" render={() => <Home expenses={expenses} currentMonth={currentMonth} changeCurrentMonth={changeCurrentMonth} />} />
      <Route exact path="/add-expense" render={() => <AddExpense />} />
      <Route exact path="/reports" render={() => <Reports />} />
    </Router>
  )
}

export default App