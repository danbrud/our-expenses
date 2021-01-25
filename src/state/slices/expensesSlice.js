import { apiClient } from '../../api/apiClient'

const actionTypes = {
  expenseAdded: 'expenses/expenseAdded',
  expenseDeleted: 'expenses/expenseDeleted',
  expensesReceived: 'expenses/expensesReceived'
}

const initialState = []

export default function expensesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.expenseAdded:
      return [...state, action.payload]
    case actionTypes.expenseDeleted:
      const { expenseId } = action.payload
      return state.filter(expense => expense._id !== expenseId)
    case actionTypes.expensesReceived:
      return action.payload
    default:
      return state
  }
}

const expensesReceived = (expenses) => ({
  type: actionTypes.expensesReceived,
  payload: expenses
})

const expenseAdded = (expense) => ({
  type: actionTypes.expenseAdded,
  payload: expense
})

const expenseDeleted = (expenseId) => ({
  type: actionTypes.expenseDeleted,
  payload: { expenseId }
})


//Change this to get current account from state...
export const fetchExpenses = (optionalParam) => async (dispatch, getState) => {
  const { _id: currentAccountId } = getState().account.currentAccount
  const response = await apiClient.getExpenses(currentAccountId, optionalParam)
  dispatch(expensesReceived(response.data))
}

export const saveExpense = (expense) => async (dispatch, getState) => {
  const response = await apiClient.addExpense(expense)
  dispatch(expenseAdded(response.data))
}

export const deleteExpense = (expenseId) => async (dispatch, getState) => {
  const response = await apiClient.deleteExpense(expenseId)
  dispatch(expenseDeleted(response.data._id))
}


export const selectAllExpenses = (state) => state.expenses

export const selectExpensesSum = (state) => state.expenses.reduce((acc, curr) => acc + curr.amount, 0)