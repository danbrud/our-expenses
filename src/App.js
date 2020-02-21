import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddExpense from './components/AddExpense';
import Home from './components/Home';
import Reports from './components/Reports';
import NavBar from './components/NavBar'
import axios from 'axios'
import './App.css'
import { API_URL } from './utils/utils'
import Login from './components/Login';
import Settings from './components/Settings'
import Loader from './components/Loader';
import AccountSignIn from './components/AccountSignIn';





function App(props) {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [currentAccount, setCurrentAccount] = React.useState({})
  const [expenses, setExpenses] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState(localStorage.userName)
  const [isLoading, setIsLoading] = React.useState(true)

  const logoutUser = () => {
    props.auth.logout()
    setCurrentAccount({})
  }


  useEffect(() => {
    const getAccount = async () => {
      const res = await axios.get(`${API_URL}/api/accounts/dan@gmail.com`)
      setCurrentAccount(res.data)
    }

    const getExpenses = async (shouldGetByDate = true) => {
      const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''

      const res = await axios.get(`${API_URL}/api/expenses/${currentAccount._id}${optionalParam}`)
      setExpenses(res.data)
      setIsLoading(false)
    }


    // if (!currentAccount._id) {
    //   // getAccount()
    //   props.auth.checkAuthentication()
    // }
    if (props.auth.authenticated) {
      setCurrentAccount(props.auth.decodeToken())
    }

    if (currentAccount._id) {
      getExpenses()
    }
  }, [currentDate, currentAccount._id])

  const changeCurrentDate = async date => setCurrentDate(date)

  const isLoggedIn = () => currentUser ? true : false

  return (
    <Router>
      <NavBar expenses={expenses} logoutUser={logoutUser} />
      <Route exact path="/" render={() => <Home expenses={expenses} currentDate={currentDate} changeCurrentDate={changeCurrentDate} isLoading={isLoading} setExpenses={setExpenses} />} />
      <Route exact path="/add-expense" render={() => !currentAccount._id ? <Loader /> : isLoggedIn() ? <AddExpense currentUser={currentUser} setExpenses={setExpenses} currentAccount={currentAccount} /> : <Login users={currentAccount.users} setCurrentUser={setCurrentUser} />} />
      <Route exact path="/reports" render={() => <Reports expenses={expenses} currentDate={currentDate} changeCurrentDate={changeCurrentDate} isLoading={isLoading} />} />
      <Route exact path='/settings' render={() => !currentAccount._id ? <Loader /> : <Settings currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />} />
      <Route exact path='/signin' render={() => <AccountSignIn setCurrentAccount={setCurrentAccount} auth={props.auth} />} />
    </Router>
  )
}

export default App