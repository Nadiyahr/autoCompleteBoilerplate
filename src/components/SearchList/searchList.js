import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValueAction, setOpenAction, setListIndexResetAction } from '../../store/actions';
import { getFilterSelector, getInputValueSelector, getListIndexSelector } from '../../store/selectors';
import './searchList.css';

export const SearchList = () => {
  const dispatch = useDispatch();
  const filredData = useSelector(getFilterSelector);
  const userInput = useSelector(getInputValueSelector);
  const index = useSelector(getListIndexSelector);

  return (
    <ul className="dropDownList" id="ul">
      {filredData.map((data, i) => (
        <li
          className={`dropDownItem ${index === (i + 1) ? 'active' : null}` }
          key={data[1]}
          onClick={(e) => {
            e.preventDefault()
            dispatch(setInputValueAction(data[0]))
            dispatch(setOpenAction(false));
            dispatch(setListIndexResetAction())
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
