import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddExpense from './AddExpense'
import Home from './data/Home'
import Reports from './reports/Reports'
import Settings from './Settings'
import AccountSignIn from './signin/AccountSignIn'
import ProtectedRoute from './ProtectedRoute'
import NotFound from './general/NotFound'
import Income from './data/Income'
import ComingSoon from './general/ComingSoon'

function MainRouter(
  {
    auth, changeCurrentDate, currentDate,
    setIsLoading, isLoading, currentUser, setCurrentUser
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
        component={AddExpense}
        auth={auth}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
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
      />
      <ProtectedRoute
        exact
        path='/settings'
        component={Settings}
        auth={auth}
      />
      <Route
        exact
        path='/signin'
        render={() => <AccountSignIn auth={auth} />}
      />
      <Route
        path='*'
        render={() => <NotFound />}
      />
    </Switch>
  )
}

export default MainRouter