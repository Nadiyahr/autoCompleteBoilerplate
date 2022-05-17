import axios from 'axios';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_FILTER = 'SET_FILTER';
export const SET_OPEN = 'SET_OPEN';
export const SET_INPUTVALUE = 'SET_INPUTVALUE';
export const SET_LISTINDEX_DOWN = 'SET_LISTINDEX_DOWN';
export const SET_LISTINDEX_UP = 'SET_LISTINDEX_UP';
export const SET_LISTINDEX_RESET = 'SET_LISTINDEX_RESET';

export const setUserNameAction = (payload) => ({
  type: SET_USERNAME,
  payload,
});

export const loadAction = () => async (dispatc) => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users')
  const setUserNamesAction = setUserNameAction(result.data)

  dispatc(setUserNamesAction)
}

export const setFilterAction = (payload) => ({
  type: SET_FILTER,
  payload,
});

export const setOpenAction = (payload) => ({
  type: SET_OPEN,
  payload,
});

export const setInputValueAction = (payload) => ({
  type: SET_INPUTVALUE,
  payload,
});

export const setListIndexDownAction = () => ({
  type: SET_LISTINDEX_DOWN,
});

export const setListIndexUpAction = () => ({
  type: SET_LISTINDEX_UP,
});

export const setListIndexResetAction = () => ({
  type: SET_LISTINDEX_RESET,
});
