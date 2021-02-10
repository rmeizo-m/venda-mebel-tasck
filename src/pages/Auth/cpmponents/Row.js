import React from 'react';
import Image from '../../../shared/components/Image';

const Row = ({
  className, image, text, ...attr
}) => {
  return (
    <div className={className} >
      <Image
        src={image}
        width="180px"
        height="54px"
        alt="logo"
        {...attr}
      />
      <p className="row-title">{text}</p>
    </div>
  );
};

export default Row;