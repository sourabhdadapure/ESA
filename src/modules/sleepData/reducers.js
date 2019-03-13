import types from './types'
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_SLEEP_DATA_START: {
      return {
        ...state,
        gettingSleepData: true
      }
    }

    case types.GET_SLEEP_DATA_SUCCESS: {
      return {
        ...state,
        gettingSleepData: false,
        user1: action.payload.user1,
        user2: action.payload.user2,
        user3: action.payload.user3
      }
    }

    case types.GET_SLEEP_DATA_SUCCESS: {
      return {
        ...state,
        gettingSleepData: false,
        error: action.error
      }
    }

    default:
      return state
  }
}
