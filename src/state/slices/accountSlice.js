import { apiClient } from '../../api/apiClient'
import { LS_ACCOUNT_USER } from '../../utils/consts'

const actionTypes = {
  accountSet: 'account/accountSet',
  accountUpdated: 'account/accountUpdated',
  userSelected: 'account/userSelected',
}

const initialState = {
  accountUser: localStorage.getItem(LS_ACCOUNT_USER),
  currentAccount: {}
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.accountSet:
      return { ...state, currentAccount: action.payload }
    case actionTypes.accountUpdated:
      const { fieldToUpdate, updatedValue } = action.payload
      return {
        ...state,
        currentAccount: {
          ...state.currentAccount, [fieldToUpdate]: updatedValue
        }
      }
    case actionTypes.userSelected:
      return { ...state, accountUser: action.payload.selectedUser }
    default:
      return state
  }
}

export const accountSet = (account) => ({
  type: actionTypes.accountSet,
  payload: account
})

const accountUpdated = (updateValue) => ({
  type: actionTypes.accountUpdated,
  payload: updateValue
})

export const accountUserSelected = (selectedUser) => ({
  type: actionTypes.userSelected,
  payload: { selectedUser }
})

//Change this to get current account from state...
export const fetchAccount = (accountId) => async (dispatch, getState) => {
  const response = await apiClient.getAccount(accountId)
  dispatch(accountSet(response.data))
}

export const updateAccount = (updateProperties) => async (dispatch, getState) => {
  const { _id: accountId } = getState().account
  const { fieldToUpdate } = updateProperties

  const response = await apiClient.updateAccount(accountId, updateProperties)
  dispatch(accountUpdated({
    fieldToUpdate: fieldToUpdate, updatedValue: response.data[fieldToUpdate]
  }))
}


export const selectCurrentAccount = (state) => state.account.currentAccount

export const selectAccountUser = (state) => state.account.accountUser