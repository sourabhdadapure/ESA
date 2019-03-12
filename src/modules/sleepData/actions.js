import types from './types'
import axios from 'axios'

export function getSleepData() {
  return async function(dispatch) {
    dispatch({
      type: types.GET_SLEEP_DATA_START
    })

    try {
      let user1 = await axios.get(
        'https://s3.amazonaws.com/eight-public/challenge/2228b530e055401f81ba37b51ff6f81d.json'
      )
      let user2 = await axios.get(
        'https://s3.amazonaws.com/eight-public/challenge/d6c1355e38194139b8d0c870baf86365.json'
      )
      let user3 = await axios.get(
        'https://s3.amazonaws.com/eight-public/challenge/f9bf229fd19e4c799e8c19a962d73449.json'
      )

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
