import types from './types'

export const userSelector = user => {
  return function(dispatch) {
    dispatch({
      type: types.SELECTED_USER,
      payload: user
    })
  }
}
