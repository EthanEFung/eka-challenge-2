import React from 'react';
import classNames from 'classnames';
import { FlexBox } from '../';

export const Form = props => {
  const { children, className } = props;
  const classes = classNames('form', className);

  return (
    <form className={classes}>
      <FlexBox className="vertical" >
        {children}
      </FlexBox>
    </form>
  );
};
