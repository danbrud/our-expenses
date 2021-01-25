import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import axios from 'axios'
import './App.css'
import { API_URL } from './utils/utils'
import { useDispatch } from 'react-redux'
import { fetchExpenses } from './state/slices/expensesSlice'
import MainRouter from './components/MainRouter'

function App({ auth }) {
  const dispatch = useDispatch()

  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentAccount, setCurrentAccount] = useState({})
  const [currentUser, setCurrentUser] = useState(localStorage.userName)
  const [isLoading, setIsLoading] = useState(true)

  const logoutUser = () => {
    auth.logout()
    setCurrentAccount({})
  }


  useEffect(() => {
    const getAccount = async (id) => {
      const res = await axios.get(`${API_URL}/api/accounts/${id}`)
      setCurrentAccount(res.data)
    }

    const getExpenses = async (shouldGetByDate = true) => {
      const optionalParam = shouldGetByDate ? `?date=${currentDate}` : ''
      dispatch(fetchExpenses(currentAccount._id, optionalParam))
      setIsLoading(false)
    }

    if (auth.authenticated) {
      getAccount(auth.decodeToken()._id)
    }

    if (currentAccount._id) {
      getExpenses()
    }
  }, [currentDate, currentAccount._id])

  const changeCurrentDate = async date => setCurrentDate(date)

  const isLoggedIn = () => currentUser ? true : false

  return (
    <>
      {auth.authenticated && <NavBar logoutUser={logoutUser} />}
      <MainRouter
        auth={auth}
        isLoggedIn={isLoggedIn}
        changeCurrentDate={changeCurrentDate}
        currentDate={currentDate}
        currentAccount={currentAccount}
        setIsLoading={setIsLoading}
        setCurrentAccount={setCurrentAccount}
        isLoading={isLoading}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </>
  )
}

export default App