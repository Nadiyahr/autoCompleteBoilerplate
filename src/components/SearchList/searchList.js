import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValueAction, setOpenAction } from '../../store/actions';
import { getFilterSelector, getInputValueSelector } from '../../store/selectors';
import './searchList.css';

export const SearchList = () => {
  const dispatch = useDispatch();
  const filredData = useSelector(getFilterSelector);
  const userInput = useSelector(getInputValueSelector)

  return (
    <ul className="dropDownList">
      {filredData.map((data) => (
        <li
          className="dropDownItem"
          key={data[1]}
          onClick={() => {
            dispatch(setInputValueAction(data))
            dispatch(setOpenAction(false));
          }}
        >
        <strong className="strong">
          {userInput}
        </strong>
        {data[0].slice(userInput.length)}
      </li>
    )) }
  </ul>
  )
}
