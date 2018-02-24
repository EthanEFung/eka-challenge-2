import React from 'react';
import classNames from 'classnames';
import {
  FlexBox,
  Button
} from '../../components';


export const HomeComponent = props => {
  const { className, children } = props;
  const classes = classNames('home', className);

  return (
    <FlexBox className={classes}>
      <Button className="signup">Sign Up</Button>
    </FlexBox>
  );
};

