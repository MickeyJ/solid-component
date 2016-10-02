import React, { Component } from 'react'

const form = (props) =>{

  const classNames = props.className || '';

  return(
    <form autoComplete="off" className={`form-container ${classNames}`} style={props.style || {}} onSubmit={(e) => props.handleSubmit(e)}>
      {props.children}
    </form>
  )
};
export default form
