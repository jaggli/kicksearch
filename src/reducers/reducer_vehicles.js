import { FETCH_VEHICLES } from '../actions/index'

const INITIAL_STATE = {all: [], post: null}

export default function (state = INITIAL_STATE, action) {
  console.log( action )
  switch (action.type) {
    case FETCH_VEHICLES:
      return { ...state, all: action.payload }
    default:
      return state
  }
}
