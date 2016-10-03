import React from 'react'

const boxButton = (props) => {

  const classNameProp = (props.className || '');

  const classNames = (
    classNameProp.indexOf('bg') > -1
      ? classNameProp
      : 'bg-white '+ classNameProp
  ).trim();

  const style = { ...props.style,
    background: props.bgColor || '',
    color: props.txtColor || ''
  };

  return (
    <button
      type={props.type || 'button'}
      className={`box-btn hoverable ${classNames}`}
      style={style}
      onClick={props.onClick || null}
      onMouseDown={props.onMouseDown || null}
    >
      <div className="active-darken"></div>
      <div className="hover-lighten"></div>
      <span className="btn-text">{props.text}</span>
    </button>
  )
};

export default boxButton