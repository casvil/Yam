import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ListView , ScrollView, Text } from 'react-native';
import { NavigationBar, Title, Button, Subtitle, View } from '@shoutem/ui';

import Icon from 'react-native-vector-icons/Ionicons'

import IngredientListItem from '../../components/IngredientListItem/';
import SwipeComponentButton from '../../components/SwipeComponentButton/';
import { dislikeIngredient } from '../../store/actions/'


const index = 1
class IngredientList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stateArr: []
    }
  }

  handleDislike = (ingredient, id) => {
    this.props.dislikeIngredient(ingredient, id)
  }

  handlePress = () => {
    let temp = index++;
    console.log('Props', this.props.state);
    console.log('temp', temp);
    console.log('index', index);
    // if (!this.props.state.user.dislikes[0] || this.props.state.user.dislikes.length === index) {
      this.state.stateArr.push(temp)
      this.setState({ stateArr: this.state.stateArr })
    // }
  }

  render() {
    let Arr = this.state.stateArr.map((el) => {
      return (
        <IngredientListItem
          handleDislike={this.handleDislike}
          key={el}
          id={el}
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
        <IngredientListItem key={0} id={0} handleDislike={this.handleDislike}/>
          { Arr }
      </ScrollView>
    </View>
    )
  }
}

const mapStatetoProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => ({
  dislikeIngredient: (ingredient, id) => dispatch(dislikeIngredient(ingredient, id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(IngredientList)
