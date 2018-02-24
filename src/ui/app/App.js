import React, { Component } from 'react';
import { Button, FlexBox, Form, Header, Input } from '../';


export class App extends Component {
  render() {


    return (
      <FlexBox className="app">
        <Form>
          <Header>Form: 1</Header>
          <Input className="name" type="text" />
          <Button>Save</Button>
        </Form>
      </FlexBox>
    );
  }
}
