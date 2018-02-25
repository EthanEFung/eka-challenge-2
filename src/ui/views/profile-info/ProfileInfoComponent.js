

import React, { Component } from 'react';
import classNames from 'classnames';
import {
  Button,
  Form,
  Footer,
  Header,
  Input,
} from '../../components';
import { Link } from 'react-router-dom';

export class ProfileInfoComponent extends Component {
  render() {
    const { children, className, putProfileInfo } = this.props;
    const classes = classNames('profile-info', 'vertical', 'right', className);

    return (
      <Form className={classes} >
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
        <Footer>
          <Link to="/form3">
            <Button className="save" onClick={putProfileInfo.bind(this)}>
              Save
          </Button>
          </Link>
          <Link to="/form1">
            <Button className="back">Back</Button>
          </Link>
        </Footer>
      </Form>
    );
  };
}



