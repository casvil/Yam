import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getRecipes, getRecipesDetail } from '../../store/actions/';
import RecipeList from '../../components/RecipeList/index.js';
import { Actions } from 'react-native-router-flux';
class RecipeListContainer extends Component  {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      this.props.getRecipes()
  }

  goToDetailPage = (id) => {
    Actions.recipesDetailPage(id)
  }

  render() {
    return (
      <RecipeList
        recipes={ this.props.recipes }
        goToDetailPage = { this.goToDetailPage }
      />
    )
  }

}

const mapStatetoProps = (state) => {
  return { recipes: state.recipes }
}

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(RecipeListContainer)
