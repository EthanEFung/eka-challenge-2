import React from 'react';
import classNames from 'classnames';

export const Input = props => {
  const { children, className, type } = props;
  const classes = classNames("input", className);

  return (
    <input className={classes} type={type}>
      {children}
    </input>
  );
};

