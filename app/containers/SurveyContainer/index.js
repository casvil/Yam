import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'
import { likeIngredient, dislikeIngredient, userServings } from '../../store/actions/'
import IngredientCard from '../../components/IngredientCard/'
import PeopleCard from '../../components/PeopleCard/'

import images from '../../images/'
import Swiper from 'react-native-swiper';

class SurveyContainer extends Component {

  constructor () {
    super()
    this.state = {
      value: 3
    }
  }

  clickLike = (ingredient) => {
    this.props.likeIngredient(ingredient);
  }

  clickDisLike = (ingredient) => {
    this.props.dislikeIngredient(ingredient);
  }

  handleSlideChange = (value) => {
    this.setState({value})
    this.props.userServings(value)
  }


  render() {
    return (
      <Swiper>
          <IngredientCard
          key = { images[0].id }
          ingredient = { images[0].title }
          imageURL = {images[0].url}
          clickLike = { this.clickLike }
          clickDisLike = { this.clickDisLike }
          />
          <PeopleCard
            value = {this.state.value}
            handleChange = { this.handleSlideChange }
          />
      </Swiper>
    )
  }
}

const mapStatetoProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  likeIngredient: (ingredient) => dispatch(likeIngredient(ingredient)),
  dislikeIngredient: (ingredient) => dispatch(dislikeIngredient(ingredient)),
  userServings: (value) => dispatch(userServings(value))
})

export default connect(mapStatetoProps, mapDispatchToProps)(SurveyContainer)
