import React from 'react'

const banner = (props) => {

  const hasShadow = props.shadow;
  const style = {...props.style};

  let classNames = props.className || '';

  if(hasShadow || hasShadow === undefined) classNames += ' shadow';

  return (
    <div className={`banner ${classNames}`} style={style} >
      {props.children}
    </div>
  )
};

export default banner