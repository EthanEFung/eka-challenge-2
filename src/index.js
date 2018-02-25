// this is the glue that holds it all together

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, } from 'redux';
import { Provider } from 'react-redux'


import { AppComponent, AppContainer } from './ui'

import { store } from './application';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);