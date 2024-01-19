import React, { useRef, useEffect } from 'react';

import styles from '@/styles/Custominput.module.css'


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
    <div className={`${styles.cardborder2} ${className}`}>
      {multi ? (
        <textarea
          ref={inputRef}
          className={styles.inptg}
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
          className={styles.inptg}
          type={type}
          name={id}
          id={id}
          placeholder=''
          value={value}
          onChange={handleChange}
        />
      )}
      <span className={styles.hint}>{hint}</span>
    </div>
  );
};

export default CustomInput;
