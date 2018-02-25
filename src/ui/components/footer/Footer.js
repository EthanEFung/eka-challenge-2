import React from 'react';
import classNames from 'classnames';
import { FlexBox } from '../'
import './Footer.css';

export const Footer = props => {
  const { children, className } = props;
  const classes = classNames('footer', className);

  return (
    <FlexBox className={classes}>
      {children}
    </FlexBox>
  );
};
