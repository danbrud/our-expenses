const { combineReducers } = require("redux");
const { default: expensesReducer } = require("./slices/expensesSlice");

export const rootReducer = combineReducers({
  expenses: expensesReducer
})