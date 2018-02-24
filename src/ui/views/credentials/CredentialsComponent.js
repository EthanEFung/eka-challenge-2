
import React from 'react';
import classNames from 'classnames';
import {
  Button,
  FlexBox,
  Header,
  Input,
} from '../../components';

export const CredentialsComponent = props => {
  const { children, className } = props;
  const classes = classNames('credentials', 'vertical', className);

  return (
    <FlexBox className={classes} >
      <Input id="username" className="username" label="username" />
      <Input id="email" className="email" label="email" />
      <Input id="password" className="password" label="password" />
      <Button className="save" >Save</Button>
    </FlexBox>
  );
};

