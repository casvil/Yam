import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, ListView ,ScrollView } from 'react-native';
import { NavigationBar, Title, Button, Subtitle } from '@shoutem/ui';

import Icon from 'react-native-vector-icons/Ionicons'

import IngredientListItem from '../../components/IngredientListItem/';
import { dislikeIngredient } from '../../store/actions/'

const index = 1

class IngredientList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stateArr: []
    }
  }

  handleDislike = (value) => {
    this.props.dislikeIngredient(value)
  }

  handlePress = () => {
    let temp = index++;
    this.state.stateArr.push(temp)
    this.setState({ stateArr: this.state.stateArr })
  }

  render() {
    let Arr = this.state.stateArr.map((el, i) => {
      return (
        <IngredientListItem
          handleDislike={this.handleDislike}
          key={i}
        />
      )
    })
    return (
    <View>
      <NavigationBar
      styleName="inline"
      centerComponent={ <Title>I DONT LIKE</Title> }
      rightComponent={
        <Button
          onPress={() => this.handlePress()}>
          <Icon name ="ios-add" size={30}/>
        </Button>
      }
      />
      <ScrollView>
        <IngredientListItem key = {1} handleDislike={this.handleDislike}/>
          { Arr }
        <Button
          onPress={() => this.handlePress()}>
          <Icon name ="ios-add" size={30}/>
        </Button>
      </ScrollView>
    </View>
    )
  }
}

const mapStatetoProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => ({
  dislikeIngredient: (ingredient) => dispatch(dislikeIngredient(ingredient)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(IngredientList)
