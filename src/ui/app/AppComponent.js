import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Button,
  CredentialsContainer,
  CheckoutComponent,
  FlexBox,
  Form,
  Header,
  HomeContainer,
  Input,
  ProfileInfoContainer,
  UserAddressInfoContainer,
} from '../';

import './AppComponent.css';


export class AppComponent extends Component {
  render() {
    return (
      <Router className="app">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/form1" component={CredentialsContainer} />
          <Route path="/form2" component={ProfileInfoContainer} />
          <Route path="/form3" component={UserAddressInfoContainer} />
          <Route path="/checkout" component={CheckoutComponent} />
        </Switch>
      </Router>
    );
  }
}
