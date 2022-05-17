import { createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import { SET_USERNAME, SET_FILTER, SET_OPEN, SET_INPUTVALUE } from './actions';

const initialState = {
  userName: [],
  filter: [],
  open: false,
  inputValue: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        userName: [...action.payload]
      }

      case SET_FILTER:
        return {
          ...state,
          filter: [...action.payload]
        }

        case SET_OPEN:
          return {
            ...state,
            open: action.payload
          }

        case SET_INPUTVALUE:
          return {
            ...state,
            inputValue: action.payload
          }

      default:
      return state;
  }
}

export const store = createStore(reducer);
