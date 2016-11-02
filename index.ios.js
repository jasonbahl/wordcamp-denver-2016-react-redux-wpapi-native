/**
 * Sample React Native App for demonstrating React Native, Redux and the WP Rest API at WordCamp Denver 2016
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

// Instantiate the Redux Store
import configureStore from './state';
const store = configureStore();

import App from './app';

class wordcampNative2016 extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('wordcampNative2016', () => wordcampNative2016);
