import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  SET_USERNAME,
  SET_FILTER,
  SET_OPEN,
  SET_INPUTVALUE,
  SET_LISTINDEX_DOWN,
  SET_LISTINDEX_UP,
  SET_LISTINDEX_RESET,
} from './actions';

const initialState = {
  userName: [],
  filter: [],
  open: false,
  inputValue: '',
  listIndex: 0
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

        case SET_LISTINDEX_DOWN:
          return {
            ...state,
            listIndex: state.listIndex += 1
          }

        case SET_LISTINDEX_UP:
          return {
            ...state,
            listIndex: state.listIndex -= 1
          }

        case SET_LISTINDEX_RESET:
          return {
            ...state,
            listIndex: 0
          }

      default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
