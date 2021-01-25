import { apiClient } from '../../api/apiClient'

const actionTypes = {
  accountSet: 'account/accountSet',
  accountUpdated: 'account/accountUpdated'
}

// categories: ["רכב"]
// expenses: (24) ["5ebe56fe7d9c4ec368d64579", "5ebe7c5373521ce40e996d16", "5ebeb5aa7f811c06d191dff6", "5fc3aae365a871774f08434b", "5fc3ab4a65a871774f08434c", "5fc3ab6965a871774f08434d", "5fc3ab8365a871774f08434e", "5fc3ac6065a871774f08434f", "5fc3af2c65a871774f084350", "5fc3b28565a871774f084351", "5fc3b31965a871774f084352", "5fc3b3ff65a871774f084353", "5fc8c4dfe2e9e53fdbbf2592", "60007c6550f5abc3808301f7", "60007ca57ef708c3d246d406", "60007cc8367359c413cca988", "60007d07ba8fa7c4717ee881", "60007e597bf3a7c6810678d6", "60007e617bf3a7c6810678d7", "60007f07bee21ac7651510b2", "60007f17bee21ac7651510b3", "60008034e51bd4c957b25ce8", "600ec33432b9fb3ff3ba7b7a", "600ee85fadcd265434b67dd3"]
// incomes: (6) ["5ebeac6c8ce3e2ff795e9903", "600ec9ef78843f4709c684cf", "600eca1478843f4709c684d0", "600ecf3c4517ce484fa8a795", "600ecfb04517ce484fa8a796", "600ed2cacabeb24c94949db5"]
// password: "$2a$10$89wFUC6B7EqZaiEnSCyv/O6spXAGdDDccXpRUhlaJki543/4Cbwzy"
// username: "dantheman@g.com"
// users: ["tal"]
// __v: 0
// _id: "5ebd920b59c634bae851e87f"

const initialState = {}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.accountSet:
      return action.payload
    case actionTypes.accountUpdated:
      const { fieldToUpdate, updatedValue } = action.payload
      return { ...state, [fieldToUpdate]: updatedValue }
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


export const selectCurrentAccount = (state) => state.account