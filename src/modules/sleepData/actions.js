import types from './types'
import constants from '../../utility/constants'
import axios from 'axios'

//refactor later
function buildMap(arr) {
  const stageMap = {}
  const stages = arr.data.intervals[0].stages
  for (let char of stages) {
    if (stageMap[char.stage]) {
      stageMap[char.stage] += char.duration
    } else {
      stageMap[char.stage] = char.duration
    }
  }

  return stageMap
}

export function getSleepData() {
  return async function(dispatch) {
    dispatch({
      type: types.GET_SLEEP_DATA_START
    })

    try {
      let user1 = await axios.get(constants.USER1_BASE_URL)
      let user2 = await axios.get(constants.USER2_BASE_URL)
      let user3 = await axios.get(constants.USER3_BASE_URL)

      const user1Map = buildMap(user1)
      const user2Map = buildMap(user2)
      const user3Map = buildMap(user3)

      console.log('CHAR MAPS ', user1Map, user2Map, user3Map)

      dispatch({
        type: types.GET_SLEEP_DATA_SUCCESS,
        payload: { user1, user2, user3 }
      })
    } catch (error) {
      dispatch({
        type: types.GET_SLEEP_DATA_ERROR,
        error
      })
    }
  }
}
