'use strict';

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AppRegistry } from 'react-native';

import AppContainer from './app/containers/AppContainer/';
import reducers from './app/store/reducers/';

const apiCall = ({ dispatch, getState }) => next => action => {
  if(action.api) {
    const config = action.api.config || { method : 'GET '};
    return fetch (`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com${action.api.url}`, config)
      .then(res => res.json())
      .then(data => {
        if(action.api.next) {
          data.results.forEach((el) => {
            dispatch(action.api.success(el.id))
          })
        }
        else {
          console.log(action.api.success(data));
          dispatch(action.api.success(data))
        }
      })
      .catch((err) => {
        throw err
      })
  }
};

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, apiCall)
)

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
export default App;

AppRegistry.registerComponent('Recipe', () => App);
