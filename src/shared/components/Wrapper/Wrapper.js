import { memo } from "react";

const Wrapper = ({children, className}) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className={className}>
            {children}
        </div>
      </div>
    </div>
  )
}

export default memo(Wrapper); 