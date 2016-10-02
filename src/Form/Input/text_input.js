import React from 'react'

const textInput = (props) => {

  const classNames = props.className || '';

  return (
    <div className="input-container">
      <label className={`input-label`} htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        className={`text-input ${classNames}`}
        type={props.type || "text"}
      />
    </div>
  )
};

export default textInput