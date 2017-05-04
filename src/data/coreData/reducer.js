import { FETCH_CORE_DATA } from './actions'

const initialState = {
  all: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // redux promise middleware adds _FULFILLED _PENDING and _REJECTED
    case `${FETCH_CORE_DATA}_FULFILLED`:
      return {
        ...state,
        all: action.payload
      }
    default:
      return state
  }
}
export default reducer

export const getCoreData = state => state.data.coreData.all

