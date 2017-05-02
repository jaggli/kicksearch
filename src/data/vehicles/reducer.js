import { FETCH_LIST } from './actions'

const initialState = {
  all: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // redux promise middleware adds _FULFILLED _PENDING and _REJECTED
    case `${FETCH_LIST}_FULFILLED`:
      return {
        ...state,
        all: action.payload
      }
    default:
      return state
  }
}
export default reducer

export const getAllVehicles = state => state.data.vehicles.all

