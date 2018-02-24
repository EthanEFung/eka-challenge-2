

import React from 'react';
import classNames from 'classnames';
import {
  Button,
  FlexBox,
  Header,
  Input,
} from '../../components';

export const ProfileInfoComponent = props => {
  const { children, className } = props;
  const classes = classNames('profile-info', 'vertical', className);

  return (
    <FlexBox className={classes} >
      <Input
        id="first-name"
        className="first-name"
        label="first name"
      />
      <Input
        id="last-name"
        className="last-name"
        label="last name"
      />
      <Input
        id="phone-number"
        className="phone-number"
        label="phone number"
      />
      <Button className="save" >Save</Button>
    </FlexBox>
  );
};



