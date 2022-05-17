export const SET_USERNAME = 'SET_USERNAME';
export const SET_FILTER = 'SET_FILTER';
export const SET_OPEN = 'SET_OPEN';
export const SET_INPUTVALUE = 'SET_INPUTVALUE';

export const setUserNameAction = (payload) => ({
  type: SET_USERNAME,
  payload,
});

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
