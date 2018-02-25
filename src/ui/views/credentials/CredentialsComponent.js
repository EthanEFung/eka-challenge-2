
import React, { Component } from 'react';
import classNames from 'classnames';
import {
  Button,
  FlexBox,
  Form,
  Footer,
  Header,
  Input,
} from '../../components';
import { Link } from 'react-router-dom';
import './CredentialsComponent.css';

export class CredentialsComponent extends Component {
  render() {
    const { children, className, putCredentials, id } = this.props;
    const classes = classNames('credentials', 'vertical', className);
    return (
      <Form className={classes} >
        <Input id="username" className="username" label="username" />
        <Input id="email" className="email" label="email" />
        <Input id="password" className="password" label="password" />
        <Footer>
          <Link to="/form2">
            <Button className="save" onClick={putCredentials.bind(this)}> Save</Button>
          </Link>
        </Footer>
      </Form>
    );
  }
};


