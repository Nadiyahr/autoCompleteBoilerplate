import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputValueSelector, getOpenSelector } from '../../store/selectors';
import { users } from '../../api'
import { SearchList } from '../SearchList';
import './select.css'
import { setFilterAction, setInputValueAction, setOpenAction } from '../../store/actions';

export const Select = () => {
  const dispatch = useDispatch();
  const open = useSelector(getOpenSelector);
  const data = users.map(user => [user.username, user.id]);
  
  const inputValue = useSelector(getInputValueSelector)

  const filterTyping = (event) => {
    const { value } = event.target;

    dispatch(setInputValueAction(value))

    const filtredArr = data.filter((data) => value === ''
      ? data
      : data[0].toLowerCase().slice(0, value.length) === value.toLowerCase());

      dispatch(setFilterAction(filtredArr))
  }

  useEffect(() => {
    dispatch(setFilterAction(data))

    console.log(open);
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
          onFocus={() => dispatch(setOpenAction(true))}
          value={inputValue}
          onChange={(e) => filterTyping(e)}
        />
      </label>
      {open && <SearchList />}
    </div>
  )
}
