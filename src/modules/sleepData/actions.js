import types from './types'
import constants from '../../utility/constants'
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

function buildAxes(arr) {
  const arrData = { xAxis: [], yAxis: [] }
  for (let i = 0; i < arr.length; i++) {
    arrData.xAxis.push(arr[i][0])
    arrData.yAxis.push(arr[i][1])
  }
  return arrData
}

function buildArray(arr, arrName) {
  const arrayData = []
  const arrayMap = { xAxis: [], yAxis: [] }
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
  }
  return arrayData
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
            heartRate: buildArray(user1.data, 'heartRate'),
            respiratoryRate: buildArray(user1.data, 'respiratoryRate'),
            roomTemparature: buildArray(user1.data, 'roomTemparature'),
            bedTemparature: buildArray(user1.data, 'bedTemperature')
          },
          user2: {
            heartRate: buildArray(user2.data, 'heartRate'),
            respiratoryRate: buildArray(user2.data, 'respiratoryRate'),
            roomTemparature: buildArray(user2.data, 'roomTemparature'),
            bedTemparature: buildArray(user2.data, 'bedTemperature')
          },
          user3: {
            heartRate: buildArray(user3.data, 'heartRate'),
            respiratoryRate: buildArray(user3.data, 'respiratoryRate'),
            roomTemparature: buildArray(user3.data, 'roomTemparature'),
            bedTemparature: buildArray(user3.data, 'bedTemperature')
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
