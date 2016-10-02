import React, { Component } from 'react'

const navBar = (props) =>{
  const classNames = props.className || '';

  return (
    <nav className={`nav-bar ${classNames}`}>
      {props.children.map((x,i) =>(
        <span key={i}>
            {React.cloneElement(x, {
              activeLinkClass: props.activeLinkClass
            })}
        </span>
      ))}
    </nav>
  )
};


export default navBar