// import { apiClient } from '../../api/apiClient'

// const actionTypes = {
//   incomeAdded: 'incomes/incomeAdded',
//   incomeDeleted: 'incomes/incomeDeleted',
//   incomesReceived: 'incomes/incomesReceived'
// }

// const initialState = {}

// export default function authReducer(state = initialState, action) {
//   switch (action.type) {
//     case actionTypes.incomeAdded:
//       return [...state, action.payload]
//     case actionTypes.incomeDeleted:
//       const { incomeId } = action.payload
//       return state.filter(income => income._id !== incomeId)
//     case actionTypes.incomesReceived:
//       return action.payload
//     default:
//       return state
//   }
// }