import React from 'react';
import classNames from 'classnames';

export const Button = props => {
  const { children, className, onClick } = props;
  const classes = classNames('button', className);

  return (
    <button
      className={classes}
      onClick={onClick}>
      {children}
    </button>
  );
};

