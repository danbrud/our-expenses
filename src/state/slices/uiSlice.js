
const actionTypes = {
  dateUpdated: 'ui/dateUpdated'
}

const initialState = {
  currentDate: new Date()
}

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.dateUpdated:
      return { ...state, currentDate: action.payload.date }
    default:
      return state
  }
}

export const dateUpdated = (date) => ({
  type: actionTypes.dateUpdated,
  payload: { date }
})

export const selectCurrentDate = (state) => state.ui.currentDate