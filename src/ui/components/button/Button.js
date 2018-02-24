import React from 'react';
import classNames from 'classnames';

export const Button = props => {
  const { children, className } = props;
  const classes = classNames('button', className);

  return (
    <button className={classes}>{children}</button>
  );
};

