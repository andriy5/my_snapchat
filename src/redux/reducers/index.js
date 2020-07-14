import { combineReducers } from 'redux'
import {
  ADD_TOKEN
} from '../actions/actions'

function tokenFunction(state = [], action) {
  switch (action.type) {
    case ADD_TOKEN:
      return [
        ...state,
        {
          tokenAuth: action.token,
        }
      ]
    default:
      return state
  }
}

const tokenApp = combineReducers({
  tokenFunction
})

export default tokenApp;