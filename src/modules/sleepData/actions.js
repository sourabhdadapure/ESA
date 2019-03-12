import types from './types'
import constants from '../../utility/constants'
import axios from 'axios'

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
