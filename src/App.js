import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import axios from 'axios'
import './App.css'
import { API_URL } from './utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExpenses } from './state/slices/expensesSlice'
import MainRouter from './components/MainRouter'
import { accountSet, fetchAccount, selectCurrentAccount } from './state/slices/accountSlice'

function App({ auth }) {
  const dispatch = useDispatch()

  const currentAccount = useSelector(selectCurrentAccount)

  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentUser, setCurrentUser] = useState(localStorage.userName)
  const [isLoading, setIsLoading] = useState(true)

  const logoutUser = () => {
    auth.logout()
    dispatch(accountSet({}))
  }


  useEffect(() => {
    const getAccount = async (id) => {
      dispatch(fetchAccount(id))
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

  return (
    <>
      {auth.authenticated && <NavBar logoutUser={logoutUser} />}
      <MainRouter
        auth={auth}
        changeCurrentDate={changeCurrentDate}
        currentDate={currentDate}
        currentAccount={currentAccount}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </>
  )
}

export default App