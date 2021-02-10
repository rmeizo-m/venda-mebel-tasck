import React from 'react';

const ButtonGroup = ({
  children, className, ...attrs
}) => {

  return (
    <div
      className={className}
      {...attrs}
    >
      {children}
    </div>
  )
}
export default ButtonGroup;