import React, { Component } from 'react';
import { Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../../store/reducers/';

const store = createStore(
  reducers
)

export default class App extends Component {
  render() {
    return (
    <Provider store={ store }>
      <Text>hello</Text>
    </Provider>
    );
  }
}
