import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterSelector, getInputValueSelector, getListIndexSelector, getOpenSelector, getUserNameSelector } from '../../store/selectors';
import { SearchList } from '../SearchList';
import { loadAction, setFilterAction, setInputValueAction, setListIndexDownAction, setListIndexResetAction, setListIndexUpAction, setOpenAction } from '../../store/actions';
import './select.css'

export const Select = () => {
  const dispatch = useDispatch();
  const data = useSelector(getUserNameSelector)
  const open = useSelector(getOpenSelector);
  const inputValue = useSelector(getInputValueSelector)
  const index = useSelector(getListIndexSelector);
  const filter = useSelector(getFilterSelector);
  const dataArr = data.map(user => [user.username, user.id]);

  const filterTyping = (event) => {
    const { value } = event.target;

    dispatch(setOpenAction(true));
    dispatch(setListIndexResetAction())
    dispatch(setInputValueAction(value))

    const filtredArr = dataArr.filter((data) => value === ''
    ? data
    : data[0].toLowerCase().slice(0, value.length) === value.toLowerCase());
    
    dispatch(setFilterAction(filtredArr))
  }

  const navigationKey = (e) => {
    if (e.keyCode === 40 && index >= 0 && index < filter.length) {
      dispatch(setListIndexDownAction())
    }

    if (e.keyCode === 38 && index >= 0 && index <= filter.length) {
      dispatch(setListIndexUpAction());
    }

    if (e.keyCode === 13) {
      e.preventDefault();
      dispatch(setInputValueAction(filter[index][0]));
      dispatch(setOpenAction(false));
    }
  }

  useEffect(() => {
    dispatch(loadAction())
  },[])

  return (
    <div className="search">
      <label htmlFor="userName">
        <input
          type="text"
          className="userName"
          name="userName"
          id="userName"
          placeholder="Username"
          onFocus={() => {
            dispatch(setOpenAction(true));
            dispatch(setFilterAction(dataArr))
          }}
          onKeyDown={(e) => navigationKey(e)}
          value={inputValue}
          onChange={(e) => filterTyping(e)}
        />
      </label>
      {open && <SearchList />}
    </div>
  )
}
