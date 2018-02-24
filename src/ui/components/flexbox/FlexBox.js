
import React from 'react';

export const FlexBox = props => {
  const { children, className } = props;

  return (
    <div className="flex-box">
      {children}
    </div>
  );
};

