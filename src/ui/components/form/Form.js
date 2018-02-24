import React from 'react';
import classNames from 'classnames';

export const Form = props => {
  const { children, className } = props;
  const classes = classNames('form', className);



  return (
    <form className={classes}>
      {children}
    </form>
  );
};
