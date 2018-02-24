import React from 'react';
import classNames from 'classnames';
import {
  Button,
  FlexBox,
  Header,
  Input,
} from '../../components';

export const UserAddressInfoComponent = props => {
  const { children, className } = props;
  const classes = classNames('user-address-info', 'vertical', className);

  return (
    <FlexBox className={classes} >
      <Input
        id="address"
        className="address"
        label="address"
      />
      <Input
        id="city"
        className="city"
        label="city"
      />
      <Input
        id="country"
        className="country"
        label="country"
      />
      <Input
        id="state"
        className="state"
        label="state"
      />
      <Input
        id="zip-code"
        className="zip-code"
        label="zip code"
      />
      <Button className="save" >Save</Button>
    </FlexBox>
  );
};




