import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

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
    const getAccount = async (id) => {
      const res = await axios.get(`${API_URL}/api/accounts/${id}`)
      setCurrentAccount(res.data)
    }

    const getExpenses = async (shouldGetByDate = true) => {
      const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''

      const res = await axios.get(`${API_URL}/api/expenses/${currentAccount._id}${optionalParam}`)
      setExpenses(res.data)
      setIsLoading(false)
    }

    if (props.auth.authenticated) {
      getAccount(props.auth.decodeToken()._id)
    }

    if (currentAccount._id) {
      getExpenses()
    }
  }, [currentDate, currentAccount._id])

  const changeCurrentDate = async date => setCurrentDate(date)

  const isLoggedIn = () => currentUser ? true : false

  return (
    <Router>
      {props.auth.authenticated ? <NavBar expenses={expenses} logoutUser={logoutUser} /> : null }
      <Switch>
        <ProtectedRoute exact path="/" auth={props.auth} component={Home} expenses={expenses} currentDate={currentDate} changeCurrentDate={changeCurrentDate} isLoading={isLoading} setExpenses={setExpenses} />} />
        <ProtectedRoute exact path="/add-expense" auth={props.auth} component={!currentAccount._id ? Loader : isLoggedIn() && currentAccount.users.includes(localStorage.userName) ? AddExpense : Login} users={currentAccount.users} setCurrentUser={setCurrentUser} currentUser={currentUser} setExpenses={setExpenses} currentAccount={currentAccount}/>} />
        <ProtectedRoute exact path="/reports" auth={props.auth} component={Reports} expenses={expenses} currentDate={currentDate} changeCurrentDate={changeCurrentDate} isLoading={isLoading} />
        <ProtectedRoute exact path='/settings' auth={props.auth} component={!currentAccount._id ? Loader : Settings} currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
        <Route exact path='/signin' render={() => <AccountSignIn setCurrentAccount={setCurrentAccount} auth={props.auth} />} />
        <Route path="*" render={() => <NotFound />}/>
      </Switch>
    </Router>
  )
}

export default App