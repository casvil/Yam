import React, { Component } from 'react';
import { View , Card, Image, Title, Button } from '@shoutem/ui';
import { Text, Slider } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../../images/'
export default class PeopleCard extends Component {
  constructor (props) {
    super(props)
  }


  render() {
    return (
      <View>
        <Image
        styleName="large-square"
        source={{uri: images[0].url }}
        />
        <Slider
        value={ this.props.value }
        minimumValue={ 1 }
        maximumValue={ 6 }
        step={ 1 }
        onValueChange={(value) => this.props.handleChange(value)}
        minimumTrackTintColor={ '#70C1B3' }
        maximumTrackTintColor={ '#C2C2C2' }
        />
        <Text>{this.props.value} people</Text>
      </View>
    )
  }
}
