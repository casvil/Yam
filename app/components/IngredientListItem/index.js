import React, { Component } from 'react';
import { Row, TextInput } from '@shoutem/ui';
import Swipeout from 'rc-swipeout/lib';

export default class IngredientListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  };

  handleValue = (value) => {
    this.setState({ value })
  }

  render() {
    return (
        <TextInput
          placeholder={'e.g Bananas...'}
          onChangeText={(value) => this.handleValue(value)}
          onEndEditing={(event) => this.props.handleDislike(event.nativeEvent.text, this.props.id)}
          value={this.state.value}
        />
    );
  };
}
