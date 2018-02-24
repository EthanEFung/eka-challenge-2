
import React from 'react';
import './FlexBox.css';

export const FlexBox = props => {
  const { children, className } = props;

  return (
    <div className="flex-box">
      {children}
    </div>
  );
};

