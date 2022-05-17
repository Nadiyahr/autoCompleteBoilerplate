import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValueAction, setOpenAction } from '../../store/actions';
import { getFilterSelector, getInputValueSelector, getListIndexSelector } from '../../store/selectors';
import './searchList.css';

export const SearchList = () => {
  const dispatch = useDispatch();
  const filredData = useSelector(getFilterSelector);
  const userInput = useSelector(getInputValueSelector);
  const index = useSelector(getListIndexSelector);

  return (
    <ul className="dropDownList">
      {filredData.map((data, i) => (
        <li
          className={`dropDownItem ${index === (i + 1) ? 'active' : null}` }
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
