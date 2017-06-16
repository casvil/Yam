import React, { Component } from 'react';
import { Row, TextInput } from '@shoutem/ui';
import Swipeout from 'rc-swipeout/lib';

export default class IngredientListItem extends Component {

  handleValue = (value) => {
    this.props.onIngredient(value, this.props.id)
  };

  render() {
    console.log('rendering id ', this.props.id);
    return (
      <TextInput
        placeholder={'e.g Bananas...'}
        onChangeText={(value) => this.handleValue(value)}
        onEndEditing={(event) => this.props.handleDislike(event.nativeEvent.text, this.props.id)}
        value={this.props.value}
      />
    );
  };
}
