import React from 'react';
import classNames from 'classnames';
import {
  Button,
  FlexBox,
  Footer,
  Form,
  Header,
  Input,
} from '../../components';
import { Link } from 'react-router-dom';

export const UserAddressInfoComponent = props => {
  const { children, className, putUserAddressInfo } = props;
  const classes = classNames('user-address-info', className);

  return (
    <FlexBox className={classes}>
      <Form className="user-address-form" >
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
        <Footer>
          <Link to="/checkout">
            <Button className="save" onClick={putUserAddressInfo.bind(this)}>Save</Button>
          </Link>
          <Link to="/form2">
            <Button className="back">Back</Button>
          </Link>
        </Footer>
      </Form>
    </FlexBox>
  );
};




