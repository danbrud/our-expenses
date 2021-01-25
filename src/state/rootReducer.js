import { combineReducers } from 'redux'
import expensesReducer from './slices/expensesSlice'
import incomesReducer from './slices/incomesSlice'


export const rootReducer = combineReducers({
  expenses: expensesReducer,
  incomes: incomesReducer
})