import { combineReducers } from 'redux'
import accountReducer from './slices/accountSlice'
import expensesReducer from './slices/expensesSlice'
import incomesReducer from './slices/incomesSlice'
import uiReducer from './slices/uiSlice'


export const rootReducer = combineReducers({
  expenses: expensesReducer,
  incomes: incomesReducer,
  account: accountReducer,
  ui: uiReducer
})