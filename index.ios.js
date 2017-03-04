'use strict';

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore , autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { AppRegistry, AsyncStorage } from 'react-native';

import AppContainer from './app/containers/AppContainer/';
import reducers from './app/store/reducers/';
import user from './app/store/reducers/user'

const apiCall = ({ dispatch, getState }) => next => action => {
  let constructedUrl = ''
  if(action.api) {
    const state = getState().user
    const dislikes = []
    if(state.dislikes) {
      state.dislikes.forEach(el => {
        for (var key in el) {
          if (el.hasOwnProperty(key)) {
            dislikes.push(el[key])
          }
        }
      });
    }
    const excludeIngredients= state.dislikes ? `excludeIngredients=${dislikes.join('%2C+')}` : '';
    const intolerances= state.allergies ? `$intolerances=+${state.allergies.join('%2C+')}` : '';
    const diet= state.diets ? `diet='${state.diets.join('%2C+')}`: '';
    const query = '*'
    constructedUrl=`${action.api.url}&${diet}&${excludeIngredients}&instructionsRequired=true${intolerances}&limitLicense=true&number=7&offset=0&query=*&type=main+course`
    const config = action.api.config || { method : 'GET '};
    return fetch (`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com${constructedUrl}`, config)
      .then(res => res.json())
      .then(data => {
        if(action.api.next) {
          data.results.forEach((el) => {
            dispatch(action.api.success(el))
          })
        }
        else {
          dispatch(action.api.success(data , action.api.id))
        }
      })
      .catch((err) => {
        throw err
      })
  } else {
    next(action)
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk, apiCall))
const store = createStore(
  reducers,
  compose (middleware, autoRehydrate())
)

const persist = persistStore(store, { storage: AsyncStorage })
const App = () => (
  <Provider store={store}>
    <AppContainer persist = {persist} />
  </Provider>
)
export default App;

AppRegistry.registerComponent('Recipe', () => App);
