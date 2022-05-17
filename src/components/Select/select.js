import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputValueSelector, getOpenSelector, getUserNameSelector } from '../../store/selectors';
// import { users } from '../../api'
import { SearchList } from '../SearchList';
import './select.css'
import { loadAction, setFilterAction, setInputValueAction, setOpenAction } from '../../store/actions';

export const Select = () => {
  const dispatch = useDispatch();
  const data = useSelector(getUserNameSelector)
  const open = useSelector(getOpenSelector);
  const inputValue = useSelector(getInputValueSelector)
  const dataArr = data.map(user => [user.username, user.id]);

  const filterTyping = (event) => {
    const { value } = event.target;

    dispatch(setInputValueAction(value))
    
    const filtredArr = dataArr.filter((data) => value === ''
    ? data
    : data[0].toLowerCase().slice(0, value.length) === value.toLowerCase());
    
    dispatch(setFilterAction(filtredArr))
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
          value={inputValue}
          onChange={(e) => filterTyping(e)}
        />
      </label>
      {open && <SearchList />}
    </div>
  )
}
