import React, { useState, useRef} from 'react';
import '../App.css';

export const InputWrap = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState('empty');
  const inputRef = useRef(null);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleOnClick = (e) => {
    dispatch({
      type: 'ADD_CITY',
      payload: inputValue
    })

    setInputValue('');
    inputRef.current.focus();
  };


  return (
    <div className="InputWrap">
      <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef} />
      <button className ="Button" onClick={handleOnClick}>+</button>
    </div>
  );
}