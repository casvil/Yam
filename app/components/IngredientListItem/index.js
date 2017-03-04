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
      <Swipeout
        autoClose={true}
        right={[
          {
            text: 'delete',
            onPress: () => console.log('delete'),
            style:{backgroundColor: '#3E98bE', color: '#FFFFFF'}
          }
        ]}
      >
        <TextInput
          placeholder={'e.g Bananas...'}
          onChangeText={(value) => this.handleValue(value)}
          onSubmitEditing={(value) => this.props.handleDislike(value)}
          value={this.state.value}
        />
      </Swipeout>
    );
  };
}
