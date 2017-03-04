import React, { Component } from 'react';
import { View } from 'react-native';
import { ListView, NavigationBar, Title } from '@shoutem/ui';

import ToggleListItem from '../ToggleListItem/';

export default class ToggleList extends Component {

  renderRow = (row) => {
    return (
      <ToggleListItem
        name = { row }
        handleData={() => this.props.handleData (row)}
      />
    )
  }

  render() {
    const test = {}
    return (
    <View>
      <NavigationBar
        styleName="inline"
        centerComponent={ this.props.title }
      />
      <ListView
        data={ this.props.data }
        renderRow = {(row) => this.renderRow(row) }
      />
    </View>
    );
  };
}
