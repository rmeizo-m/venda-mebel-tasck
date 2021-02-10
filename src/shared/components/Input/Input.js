import React from 'react';

const Input = ({
  children, id, className, label, error, mg ,...attr
}) => {

  return (
    <div className={`input-wrapper ${mg}`}>
      <input 
        name={id}
        id={id}
        className={className}
        {...attr}
      />
      {label && 
          <label className="input-label" htmlFor={id}>{label}</label>}
        {children}
    </div>
    
  );
};

export default Input;