import { combineReducers } from 'redux'
import sleepData from './sleepData'
import users from './users'

const rootReducer = combineReducers({
  sleepData,
  users
})

export default rootReducer
