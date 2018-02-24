import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  Button,
  CredentialsComponent,
  CheckoutComponent,
  FlexBox,
  Form,
  Header,
  HomeComponent,
  Input,
  ProfileInfoComponent,
  UserAddressInfoComponent,
} from '../';


export class AppComponent extends Component {
  render() {
    return (
      <Router className="app">
        <div>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/form1" component={CredentialsComponent} />
          <Route path="/form2" component={ProfileInfoComponent} />
          <Route path="/form3" component={UserAddressInfoComponent} />
          <Route path="/checkout" component={CheckoutComponent} />
        </div>
      </Router>
    );
  }
}
