import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExpenses } from './state/slices/expensesSlice'
import MainRouter from './components/MainRouter'
import { accountSet, fetchAccount, selectCurrentAccount } from './state/slices/accountSlice'
import { selectCurrentDate } from './state/slices/uiSlice'

function App({ auth }) {
  const dispatch = useDispatch()

  const currentAccount = useSelector(selectCurrentAccount)
  const currentDate = useSelector(selectCurrentDate)

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
  }, [currentDate, currentAccount._id, dispatch])
  

  return (
    <>
      {auth.authenticated && <NavBar logoutUser={logoutUser} />}
      <MainRouter
        auth={auth}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </>
  )
}

export default App