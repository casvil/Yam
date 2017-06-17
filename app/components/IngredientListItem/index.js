import React, { Component } from 'react';
import { Row, TextInput } from '@shoutem/ui';
import Swipeout from 'rc-swipeout/lib';
import AutoComplete from 'react-native-autocomplete';
import { AppRegistry, StyleSheet, Text, View, AlertIOS } from 'react-native';

import { Apples } from '../../data/index.js'

const styles = StyleSheet.create({
  autocomplete: {
    alignSelf: 'stretch',
    height: 50,
    margin: 10,
    marginTop: 10,
    backgroundColor: '#FFF',
    borderColor: 'lightblue',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 290
  }
});

export default class IngredientListItem extends Component {
  state = { data: [] }

  constructor(props) {
    super(props);
    this.onTyping = this.onTyping.bind(this)
  }

  onTyping(text) {
    console.log(Apples);
    const apples = Apples
        .filter(apple => apple.name.toLowerCase().startsWith(text.toLowerCase()))
        .map(apple => apple.name);

    console.log('filtered ', apples);
    this.setState({ data: apples });
  }

  onSelect = (value) => {
    AlertIOS.alert('You choosed', value);
    this.handleValue(value);
    this.props.handleDislike(value, this.props.id)
  }

  handleValue = (value) => {
    this.props.onIngredient(value, this.props.id);
  }

  // <TextInput
  // placeholder={'e.g Bananas...'}
  // value={this.props.value}
  // onChangeText={(value) => this.handleValue(value)}
  // onEndEditing={(event) => this.props.handleDislike(event.nativeEvent.text, this.props.id)}
  // />

  render() {
    console.log('rendering id ', this.props.id);
    console.log('state to render', this.state.data);
    return (
      <View>
        <View style={styles.container}>
          <AutoComplete
            style={styles.autocomplete}

            suggestions={this.state.data}
            onTyping={this.onTyping}
            onSelect={this.onSelect}

            placeholder="Search for an apple"
            clearButtonMode="always"
            returnKeyType="go"
            textAlign="center"
            clearTextOnFocus

            autoCompleteTableTopOffset={10}
            autoCompleteTableLeftOffset={20}
            autoCompleteTableSizeOffset={-40}
            autoCompleteTableBorderColor="lightblue"
            autoCompleteTableBackgroundColor="azure"
            autoCompleteTableCornerRadius={8}
            autoCompleteTableBorderWidth={1}

            autoCompleteFontSize={15}
            autoCompleteRegularFontName="Helvetica Neue"
            autoCompleteBoldFontName="Helvetica Bold"
            autoCompleteTableCellTextColor={'dimgray'}

            autoCompleteRowHeight={40}
            autoCompleteFetchRequestDelay={100}

            maximumNumberOfAutoCompleteRows={6}
          />
        </View>
      </View>
    );
  };
}
