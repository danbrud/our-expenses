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
import Settings from './components/Settings'


function App() {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [expenses, setExpenses] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState(localStorage.userName)
  const [isLoading, setIsLoading] = React.useState(true)


  useEffect(() => {
    const getExpenses = async (shouldGetByDate = true) => {
      const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''

      const res = await axios.get(`${API_URL}/api/expenses${optionalParam}`)
      setExpenses(res.data)
      setIsLoading(false)
    }

    getExpenses()
  }, [currentDate])

  const changeCurrentDate = async date => setCurrentDate(date)

  const isLoggedIn = () => currentUser ? true : false

  return (
    <Router>
      <NavBar expenses={expenses} />
      <Route exact path="/" render={() => <Home expenses={expenses} currentDate={currentDate} changeCurrentDate={changeCurrentDate} isLoading={isLoading} setExpenses={setExpenses} />} />
      <Route exact path="/add-expense" render={() => isLoggedIn() ? <AddExpense currentUser={currentUser} expenses={expenses} setExpenses={setExpenses} /> : <Login setCurrentUser={setCurrentUser} />} />
      <Route exact path="/reports" render={() => <Reports expenses={expenses} currentDate={currentDate} changeCurrentDate={changeCurrentDate} isLoading={isLoading} />} />
      <Route exact path='/settings' render={() => <Settings />} />
    </Router>
  )
}

export default App