import types from './types'
import constants from '../../utility/constants'
import { buildAxes } from '../../utility'
import axios from 'axios'

//refactor later
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

function buildArray(arr, arrName) {
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
  console.log('ARRAY MAP', arrayMap)
  return arrayData
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

      const heartRate = buildArray1(user2.data, 'heartRate')

      dispatch({
        payload: {
          user1: {
            heartRate: buildArray1(user1.data, 'heartRate'),
            respiratoryRate: buildArray1(user1.data, 'respiratoryRate'),
            roomTemperature: buildArray1(user1.data, 'roomTemperature'),
            bedTemperature: buildArray1(user1.data, 'bedTemperature')
          },
          user2: {
            heartRate: buildArray1(user2.data, 'heartRate'),
            respiratoryRate: buildArray1(user2.data, 'respiratoryRate'),
            roomTemperature: buildArray1(user2.data, 'roomTemperature'),
            bedTemperature: buildArray1(user2.data, 'bedTemperature')
          },
          user3: {
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
