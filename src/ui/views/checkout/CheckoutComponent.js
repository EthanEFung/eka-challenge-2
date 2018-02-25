import React from 'react';
import classNames from 'classnames';
import {
  FlexBox,
} from '../../components';


export const CheckoutComponent = props => {
  const { className, children } = props;
  const classes = classNames('checkout', 'vertical', className);

  return (
    <FlexBox className={classes}>
      <p>Thank you!</p>
      <p>You've been successfully onboarded.</p>
    </FlexBox>
  );
};

