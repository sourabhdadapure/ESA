import types from './types'

export const userSelector = user => (dispatch, getState) => {
  const { sleepData } = getState()
  dispatch({
    type: user,
    payload: sleepData
  })
}
