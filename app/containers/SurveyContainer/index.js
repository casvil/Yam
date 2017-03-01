import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';

import { likeIngredient, dislikeIngredient, userServings, userAllergies } from '../../store/actions/'
import IngredientCard from '../../components/IngredientCard/';
import PeopleCard from '../../components/PeopleCard/';
import AllergyGrid from '../../components/AllergyGrid';

import images from '../../images/'

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

  handleAllergy = (allergy) => {
    this.props.allergies(allergy)
  }


  render() {
    return (
      <Swiper loop={false}>
          <IngredientCard
          key={ images[0].id }
          ingredient={ images[0].title }
          imageURL={images[0].url}
          clickLike={ this.clickLike }
          clickDisLike={ this.clickDisLike }
          />
          <PeopleCard
            value={ this.state.value }
            handleChange={ this.handleSlideChange }
          />
          <AllergyGrid
            allergies={ images }
            handleAllergy={ this.handleAllergy }
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
  userServings: (value) => dispatch(userServings(value)),
  allergies: (allergy) => dispatch(userAllergies(allergy))
})

export default connect(mapStatetoProps, mapDispatchToProps)(SurveyContainer)
