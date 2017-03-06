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
    console.log(this.props.cooked);
      if(!this.props.cooked || this.props.cooked < 6 ) {
        this.props.getRecipes()
      }
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
  return {
      recipes: state.recipes.recipe,
      cooked: state.recipes.cooked
   }
}

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(RecipeListContainer)
