import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, ScrollView } from 'react-native';
import { View, Image, Screen, Title, Tile} from '@shoutem/ui';
import Spinner  from 'react-native-spinkit';
import { Actions } from 'react-native-router-flux';
import SwipeComponentButton from '../SwipeComponentButton';

class Main extends Component {


  componentWillReceiveProps(nextProps) {
    if(nextProps.user) {
      !nextProps.user.survey ? this.goToSurvey() : this.goToRecipes()
    } else {
      this.goToSurvey()
    }
  }

  componentDidMount() {
    this.goToSurvey()
  }

  goToSurvey = () => {
    setTimeout(() => {
      Actions.pop()
      Actions.survey()
    },3000)
  }
  goToRecipes = () => {
    setTimeout(() => {
      Actions.pop()
      Actions.recipeList()
    },3000)
  }

  render() {
    return (
      <View style={{flex:1, alignItems: 'stretch'}}>
        <Image
        style={{flex: 0.5 }}
        blurRadius={1}
        source= {{uri: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop='}}
        >
        <Tile>
          <Spinner isVisible={true} size={100} color={'#FFFFFF'} type={'Arc'}/>
          <Title>FINDING RECIPES JUST FOR YOU</Title>
        </Tile>
        </Image>
      </View>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    recipes: state.recipes
  }
}




export default connect(mapStatetoProps)(Main)
