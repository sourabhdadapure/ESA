import types from './types'

const initialState = {
  initialState: types.USER_1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECTED_USER:
      return { ...state, selectedUser: action.payload }
    default:
      return state
  }
}
