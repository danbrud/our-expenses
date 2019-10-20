import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddExpense from './components/AddExpense';
import Home from './components/Home';
import Reports from './components/Reports';
import NavBar from './components/NavBar'
import axios from 'axios'
import './App.css'
import { API_URL } from './utils'
import Login from './components/Login';


function App() {
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth())
  const [expenses, setExpenses] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState(localStorage.userName)


  useEffect(() => {
    const getExpenses = async (shouldGetByMonth = true) => {
      const optionalMonthParam = shouldGetByMonth !== -1 ? `?month=${currentMonth}` : ''
      
      const res = await axios.get(`${API_URL}/api/expenses${optionalMonthParam}`)
      setExpenses(res.data)
    }
    
    getExpenses()
  }, [currentMonth])
  
  const changeCurrentMonth = async month => setCurrentMonth(month)

  const isLoggedIn = () => currentUser ? true : false

  return (
    <Router>
      <NavBar expenses={expenses} />
      <Route exact path="/" render={() => <Home expenses={expenses} currentMonth={currentMonth} changeCurrentMonth={changeCurrentMonth} />} />
      <Route exact path="/add-expense" render={() => isLoggedIn() ? <AddExpense currentUser={currentUser} expenses={expenses} setExpenses={setExpenses} /> : <Login setCurrentUser={setCurrentUser} />} />
      <Route exact path="/reports" render={() => <Reports expenses={expenses} currentMonth={currentMonth} changeCurrentMonth={changeCurrentMonth} />} />
    </Router>
  )
}

export default App