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

function MainRouter({ auth, setIsLoading, isLoading }) {

  return (
    <Switch>
      <ProtectedRoute
        exact
        path='/'
        component={Home}
        auth={auth}
        isLoading={isLoading}
      />
      <ProtectedRoute
        exact
        path='/add-expense'
        component={AddExpense}
        auth={auth}
      />
      <ProtectedRoute
        exact
        path='/reports'
        component={Reports}
        auth={auth}
        isLoading={isLoading}
      />
      <ProtectedRoute
        exact
        path='/income'
        component={Income}
        auth={auth}
      />
      <ProtectedRoute
        exact
        path='/cashflow'
        component={ComingSoon}
        auth={auth}
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