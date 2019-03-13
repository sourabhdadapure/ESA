import types from './types'
import constants from '../../utility/constants'
import axios from 'axios'

//refactor later
function buildMap(arr) {
  const stagesArr = []
  for (let i = 0; i < arr.length; i++) {
    const stageMap = {}
    const stages = arr[i].stages
    for (let char of stages) {
      if (stageMap[char.stage]) {
        stageMap[char.stage] += char.duration
      } else {
        stageMap[char.stage] = char.duration
      }
    }

    stagesArr.push(stageMap)
  }

  return stagesArr
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

      dispatch({
        type: types.GET_SLEEP_DATA_SUCCESS,
        payload: {
          user1: { sleepStages: buildMap(user1.data.intervals) },
          user2: { sleepStages: buildMap(user2.data.intervals) },
          user3: { sleepStages: buildMap(user3.data.intervals) }
        }
      })
    } catch (error) {
      dispatch({
        type: types.GET_SLEEP_DATA_ERROR,
        error
      })
    }
  }
}
