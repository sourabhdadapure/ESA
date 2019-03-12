import types from './types'
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_SLEEP_DATA_START: {
      return {
        gettingSleepData: true
      }
    }

    case types.GET_SLEEP_DATA_SUCCESS: {
      return {
        gettingSleepData: false,
        user1: action.payload.user1.data,
        user2: action.payload.user2.data,
        user3: action.payload.user3.data
      }
    }

    case types.GET_SLEEP_DATA_SUCCESS: {
      return {
        gettingSleepData: false,
        error: action.error
      }
    }

    default:
      return state
  }
}
