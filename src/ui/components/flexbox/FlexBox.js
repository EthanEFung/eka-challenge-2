
import React from 'react';
import classNames from 'classnames';

import './FlexBox.css';

export const FlexBox = props => {
  const { children, className } = props;
  const classes = classNames("flex-box", className)
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

