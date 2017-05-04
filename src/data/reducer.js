import { combineReducers } from 'redux'
import vehicles from './vehicles/reducer'
import coreData from './coreData/reducer'

export default combineReducers({
  vehicles,
  coreData
})
