import React from 'react';

const Image = ({
  src, alt, className, width, height, ...attrs
}) => {

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...attrs}
    />
  );
};

export default Image;