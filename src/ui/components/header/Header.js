
import React from 'react';
import classNames from 'classnames';

export const Header = props => {
  const { children, className } = props;
  const classes = classNames('header', className);

  return (
    <header className={classes}>
      {children}
    </header>
  );
};

