import React from 'react'

const banner = (props) => {

  const hasShadow = props.shadow;

  let classNames = props.className || '';

  if(hasShadow || hasShadow === undefined){
    classNames += ' shadow'
  }

  const style = { ...props.style,
    bgColor: props.background || '',
    txtColor: props.color || ''
  };

  return (
    <div
      className={`banner ${classNames}`}
      style={style}
    >
      {props.children}
    </div>
  )
};

export default banner