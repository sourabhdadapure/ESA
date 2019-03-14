import types from './types'
import constants from '../../utility/constants'
import { buildAxes, buildBarGraphAxes } from '../../utility'
import axios from 'axios'

//refactor
function buildMap(arr) {
  const stagesArr = []
  const stagesObj = {}
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

function buildArray1(arr, arrName) {
  const arrayData = []
  const arrayMap = []
  for (let i = 0; i < arr.intervals.length; i++) {
    switch (arrName) {
      case 'heartRate':
        arrayData.push(arr.intervals[i].timeseries.heartRate)
        break
      case 'respiratoryRate':
        arrayData.push(arr.intervals[i].timeseries.respiratoryRate)
        break
      case 'roomTemperature':
        arrayData.push(arr.intervals[i].timeseries.tempRoomC)
        break
      case 'bedTemperature':
        arrayData.push(arr.intervals[i].timeseries.tempBedC)
        break
      default:
        arrayData.push(arr.intervals[i].timeseries.heartRate)
        break
    }
    arrayMap.push(buildAxes(arrayData[i]))
  }

  return arrayMap
}

export function getSleepData() {
  return async function(dispatch) {
    try {
      dispatch({
        type: types.GET_SLEEP_DATA_START
      })
      const user1 = await axios.get(constants.USER1_BASE_URL)
      const user2 = await axios.get(constants.USER2_BASE_URL)
      const user3 = await axios.get(constants.USER3_BASE_URL)

      dispatch({
        payload: {
          user1: {
            sleepStages: buildBarGraphAxes(buildMap(user1.data.intervals)),
            heartRate: buildArray1(user1.data, 'heartRate'),
            respiratoryRate: buildArray1(user1.data, 'respiratoryRate'),
            roomTemperature: buildArray1(user1.data, 'roomTemperature'),
            bedTemperature: buildArray1(user1.data, 'bedTemperature')
          },
          user2: {
            sleepStages: buildBarGraphAxes(buildMap(user2.data.intervals)),
            heartRate: buildArray1(user2.data, 'heartRate'),
            respiratoryRate: buildArray1(user2.data, 'respiratoryRate'),
            roomTemperature: buildArray1(user2.data, 'roomTemperature'),
            bedTemperature: buildArray1(user2.data, 'bedTemperature')
          },
          user3: {
            sleepStages: buildBarGraphAxes(buildMap(user3.data.intervals)),
            heartRate: buildArray1(user3.data, 'heartRate'),
            respiratoryRate: buildArray1(user3.data, 'respiratoryRate'),
            roomTemperature: buildArray1(user3.data, 'roomTemperature'),
            bedTemperature: buildArray1(user3.data, 'bedTemperature')
          }
        },
        type: types.GET_SLEEP_DATA_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: types.GET_SLEEP_DATA_ERROR,
        error
      })
    }
  }
}
