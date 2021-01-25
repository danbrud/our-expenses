import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddExpense from './AddExpense'
import Home from './data/Home'
import Reports from './reports/Reports'
import Settings from './Settings'
import Loader from './Loader'
import AccountSignIn from './signin/AccountSignIn'
import ProtectedRoute from './ProtectedRoute'
import NotFound from './general/NotFound'
import Income from './data/Income'
import ComingSoon from './general/ComingSoon'
import Login from './Login'

function MainRouter(
  {
    auth, isLoggedIn, changeCurrentDate, currentDate, currentAccount,
    setIsLoading, setCurrentAccount, isLoading, currentUser, setCurrentUser
  }
) {

  return (
    <Switch>
      <ProtectedRoute
        exact
        path='/'
        component={Home}
        auth={auth}
        currentDate={currentDate}
        changeCurrentDate={changeCurrentDate}
        isLoading={isLoading}
      />
      <ProtectedRoute
        exact
        path='/add-expense'
        component={!currentAccount._id ? Loader : isLoggedIn() && currentAccount.users.includes(localStorage.userName) ? AddExpense : Login}
        auth={auth}
        users={currentAccount.users}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        currentAccount={currentAccount}
      />
      <ProtectedRoute
        exact
        path='/reports'
        component={Reports}
        auth={auth}
        currentDate={currentDate}
        changeCurrentDate={changeCurrentDate}
        isLoading={isLoading}
      />
      <ProtectedRoute
        exact
        path='/income'
        component={Income}
        auth={auth}
        currentDate={currentDate}
        changeCurrentDate={changeCurrentDate}
        currentAccount={currentAccount}
      />
      <ProtectedRoute
        exact
        path='/cashflow'
        component={ComingSoon}
        auth={auth}
        currentDate={currentDate}
        changeCurrentDate={changeCurrentDate}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        currentAccount={currentAccount}
      />
      <ProtectedRoute
        exact
        path='/settings'
        component={!currentAccount._id ? Loader : Settings}
        auth={auth}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <Route
        exact
        path='/signin'
        render={() => <AccountSignIn setCurrentAccount={setCurrentAccount} auth={auth} />}
      />
      <Route
        path='*'
        render={() => <NotFound />}
      />
    </Switch>
  )
}

export default MainRouter