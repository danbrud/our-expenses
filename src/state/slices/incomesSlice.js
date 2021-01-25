import { apiClient } from '../../api/apiClient'

const actionTypes = {
  incomeAdded: 'incomes/incomeAdded',
  incomeDeleted: 'incomes/incomeDeleted',
  incomesReceived: 'incomes/incomesReceived'
}

const initialState = []

export default function incomesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.incomeAdded:
      return [...state, action.payload]
    case actionTypes.incomeDeleted:
      const { incomeId } = action.payload
      return state.filter(income => income._id !== incomeId)
    case actionTypes.incomesReceived:
      return action.payload
    default:
      return state
  }
}

const incomesReceived = (incomes) => ({
  type: actionTypes.incomesReceived,
  payload: incomes
})

const incomeAdded = (income) => ({
  type: actionTypes.incomeAdded,
  payload: income
})

const incomeDeleted = (incomeId) => ({
  type: actionTypes.incomeDeleted,
  payload: { incomeId }
})


//Change this to get current account from state...
export const fetchIncomes = (optionalParam) => async (dispatch, getState) => {
  const { _id: currentAccountId } = getState().account.currentAccount
  const response = await apiClient.getIncomes(currentAccountId, optionalParam)
  dispatch(incomesReceived(response.data))
}

export const saveIncome = (income) => async (dispatch, getState) => {
  const response = await apiClient.addIncome(income)
  dispatch(incomeAdded(response.data))
}

export const deleteIncome = (incomeId) => async (dispatch, getState) => {
  const response = await apiClient.deleteIncome(incomeId)
  dispatch(incomeDeleted(response.data._id))
}


export const selectAllIncomes = (state) => state.incomes

export const selectIncomesSum = (state) => state.incomes.reduce((acc, curr) => acc + curr.amount, 0)