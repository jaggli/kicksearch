import { FETCH_LIST, FETCH_CORE_DATA } from './actions'

const initialState = {
  all: [],
  coreData: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // redux promise middleware adds _FULFILLED _PENDING and _REJECTED
    case `${FETCH_LIST}_FULFILLED`:
      return {
        ...state,
        all: action.payload
      }
    case `${FETCH_CORE_DATA}_FULFILLED`:
      return {
        ...state,
        coreData: action.payload
      }
    default:
      return state
  }
}
export default reducer

export const getList = state => state.data.vehicles.all
export const getCoreData = state => state.data.vehicles.coreData

