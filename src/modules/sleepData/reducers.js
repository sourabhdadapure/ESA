import types from './types'

const axes = [
  { xAxis: [], yAxis: [] },
  { xAxis: [], yAxis: [] },
  { xAxis: [], yAxis: [] }
]
const user = {
  sleepStages: { awake: [], light: [], deep: [], out: [] },
  heartRate: axes,
  respiratoryRate: axes,
  roomTemperature: axes,
  bedTemperature: axes
}
const initialState = {
  user1: user,
  user2: user,
  user3: user
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

    case types.GET_SLEEP_DATA_ERROR: {
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
