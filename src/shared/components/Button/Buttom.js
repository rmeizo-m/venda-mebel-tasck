import React from 'react';

const Button = ({
  children, onClick, className, disabled, active, ...attrb
}) => {

  const onClickAction = (e) => {
    if(disabled){
      e.preventDefault();
    } else {
      return onClick(e);
    }
  }


  const Tag = attrb.href ? 'a' : 'button'

  return (
    <Tag
      {...attrb}
      className={className}
      onClick={onClickAction}
      disabled={disabled}
    >{children}</Tag>
  );
};

export default Button;