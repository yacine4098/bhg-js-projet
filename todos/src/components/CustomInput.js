import React, { useRef, useEffect } from 'react';

const CustomInput = ({ id, hint = 'Your Hint Text', type = 'text', multi = false, className, value, onChange, autoFocus }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus();
    }
  }, [inputRef, autoFocus]);

  const handleChange = (event) => {
    onChange(id, event.target.value);
  };

  return (
    <div className={`cardborder2 ${className}`}>
      {multi ? (
        <textarea
          ref={inputRef}
          className='inptg'
          name={id}
          id={id}
          placeholder=''
          value={value}
          style={{ resize: 'none' }} // Set resize to none
          onChange={handleChange}
        />
      ) : (
        <input
          ref={inputRef}
          className='inptg'
          type={type}
          name={id}
          id={id}
          placeholder=''
          value={value}
          onChange={handleChange}
        />
      )}
      <span className='hint'>{hint}</span>
    </div>
  );
};

export default CustomInput;
