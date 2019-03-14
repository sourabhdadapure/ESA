import types from './types'

export const userSelector = user => (dispatch, getState) => {
  const { sleepData } = getState()
  console.log('STATE', getState())
  dispatch({
    type: user,
    payload: sleepData
  })
}
