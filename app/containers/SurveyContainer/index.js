import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Title } from '@shoutem/ui';

import { userServings, userAllergies, getRecipes, userDiet } from '../../store/actions/'
import IngredientCard from '../../components/IngredientCard/';
import PeopleCard from '../../components/PeopleCard/';
import ToggleList from '../../components/ToggleList/';
import IngredientList from '../IngredientList/';
import images from '../../images/'
import { allergies, diet } from '../../data/'

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

  handleDiet = (diet) => {
    this.props.diets(diet)
  }


  render() {
    return (
      <Swiper loop={false}>
          <IngredientList />
          <PeopleCard
            value={ this.state.value }
            handleChange={ this.handleSlideChange }
          />
          <ToggleList
            data={ allergies }
            handleData={ this.handleAllergy }
            title = { <Title>ALLERGIES</Title> }
          />
          <ToggleList
            data={ diet }
            handleData={ this.handleDiet }
            title = { <Title>DIET</Title> }
          />
      </Swiper>
    );
  };
}

const mapStatetoProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => ({
  likeIngredient: (ingredient) => dispatch(likeIngredient(ingredient)),
  dislikeIngredient: (ingredient) => dispatch(dislikeIngredient(ingredient)),
  userServings: (value) => dispatch(userServings(value)),
  allergies: (allergy) => dispatch(userAllergies(allergy)),
  diets: (diet) => dispatch(userDiet(diet)),
  getRecipes: () => dispatch(getRecipes())
})

export default connect(mapStatetoProps, mapDispatchToProps)(SurveyContainer)
