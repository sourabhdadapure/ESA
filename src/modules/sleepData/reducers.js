import types from './types'
const initialState = {
  user1: {
    heartRate: [],
    respiratoryRate: [],
    roomTemperature: [],
    bedTemperature: []
  },
  user2: {
    heartRate: [],
    respiratoryRate: [],
    roomTemperature: [],
    bedTemperature: []
  },
  user3: {
    heartRate: [],
    respiratoryRate: [],
    roomTemperature: [],
    bedTemperature: []
  }
}

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

        user1: action.payload.user1,
        user2: action.payload.user2,
        user3: action.payload.user3,
        gettingSleepData: false
      }
    }

    case types.GET_SLEEP_DATA_SUCCESS: {
      return {
        ...state,
        error: action.error,
        gettingSleepData: false
      }
    }

    default:
      return state
  }
}
