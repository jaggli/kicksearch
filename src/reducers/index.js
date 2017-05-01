import { combineReducers } from 'redux'
import VehiclesReducer from './reducer_vehicles'

const rootReducer = combineReducers({
  vehicles: VehiclesReducer
})

export default rootReducer
