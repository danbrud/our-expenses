import { combineReducers } from 'redux'
import accountReducer from './slices/accountSlice'
import expensesReducer from './slices/expensesSlice'
import incomesReducer from './slices/incomesSlice'


export const rootReducer = combineReducers({
  expenses: expensesReducer,
  incomes: incomesReducer,
  account: accountReducer
})