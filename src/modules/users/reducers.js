import types from './types'

const initialState = {
  initialState: types.USER_1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_1: {
      return {
        selectedUser: action.payload.user1
      }
    }
    case types.USER_2: {
      return {
        ...state,
        selectedUser: action.payload.user2
      }
    }
    case types.USER_3: {
      return {
        ...state,
        selectedUser: action.payload.user3
      }
    }
    default:
      return state
  }
}
