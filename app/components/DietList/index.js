import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Switch, Text } from 'react-native';

import diet from '../../data/diet.js';

export default class DietList extends Component {

  constructor() {
    super()
    this.state = {
      diet: {}
    }
  }

  getDiet = (diet) => {
    this.state.diet =
  }

  handleChange = (name) => {
    this.state.diet[name] = !
  }
  render () {
    return (

    )
  }
}
