import React from 'react';
import classNames from 'classnames';
import { FlexBox } from '../';


export const Input = props => {
  const { children, className, type, label, id } = props;
  const classes = classNames("input", className);

  return (
    <FlexBox className={classes}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </FlexBox>
  );
};

