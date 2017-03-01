import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'
import { likeIngredient, dislikeIngredient } from '../../store/actions/'
import IngredientCard from '../../components/IngredientCard/'
import images from '../../images/'
import Swiper from 'react-native-swiper';

class SurveyContainer extends Component {


  clickLike = (ingredient) => {
    this.props.likeIngredient(ingredient);
  }

  clickDisLike = (ingredient) => {
    this.props.dislikeIngredient(ingredient);
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
          <IngredientCard
          key = { images[1].id }
          ingredient = { images[1].title }
          imageURL = {images[1].url}
          clickLike = { this.clickLike }
          clickDisLike = { this.clickDisLike }
          />
          <IngredientCard
          key = { images[2].id }
          ingredient = { images[2].title }
          imageURL = {images[2].url}
          clickLike = { this.clickLike }
          clickDisLike = { this.clickDisLike }
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
  dislikeIngredient: (ingredient) => dispatch(dislikeIngredient(ingredient))
})

export default connect(mapStatetoProps, mapDispatchToProps)(SurveyContainer)
