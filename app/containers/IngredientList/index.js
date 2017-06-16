import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ListView , ScrollView, Text } from 'react-native';
import { NavigationBar, Title, Button, Subtitle, View } from '@shoutem/ui';

import Icon from 'react-native-vector-icons/Ionicons'

import IngredientListItem from '../../components/IngredientListItem/';
import SwipeComponentButton from '../../components/SwipeComponentButton/';
import { dislikeIngredient } from '../../store/actions/'


class IngredientList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stateArr: [""],
      index: 1
    }
  }

  handleDislike = (ingredient, id) => {
    this.props.dislikeIngredient(ingredient, id)
  }

  addInput = () => {
    // const length = this.state.stateArr.length
    // console.log(length, this.state.index);
    // console.log(this.state.stateArr);
    // if(length < this.state.index || this.state.stateArr[length-1] === "") return

    let nextIndex = this.state.index+1;
    this.setState({ stateArr: this.state.stateArr.concat(""), index: nextIndex })
    // console.log('state', this.state);
    // console.log('dislikes', this.props.state.user.dislikes);
    // console.log('prooops', this.props);
    // console.log('index', this.state.index);
  }

  getIngredient = (ingr, i) => {
    console.log('current ingredient', ingr, ' id', i);
    const newStateArr = [
      ...this.state.stateArr.slice(0, i),
      ingr,
      ...this.state.stateArr.slice(i+1, this.state.stateArr.length)
    ]
    console.log('New Array: ', newStateArr);
    this.setState({
      stateArr: newStateArr
    })
    newStateArr[newStateArr.length-1]!=="" && this.addInput()
  }

  render() {
    let Arr = this.state.stateArr.map((el, i) => {
      console.log(el);
      return (
        <IngredientListItem
          onIngredient={this.getIngredient}
          handleDislike={this.handleDislike}
          key={i}
          id={i}
        />
      )
    })
    return (
    <View>
      <NavigationBar
      styleName="inline"
      centerComponent={ <Title>I DONT LIKE</Title> }
      />
      <ScrollView>
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
