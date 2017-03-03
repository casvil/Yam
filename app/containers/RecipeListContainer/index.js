import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getRecipes, getRecipesDetail } from '../../store/actions/';
import RecipeList from '../../components/RecipeList/index.js';

class RecipeListContainer extends Component  {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getRecipes()
  }

  render() {
    return (
      <RecipeList
        recipes={this.props.recipes}
        getRecipesDetail={this.props.getRecipesDetail}
      />
    )
  }

}

const mapStatetoProps = (state) => {
  return { recipes: state.recipes }
}

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes()),
  getRecipesDetail: (id) => dispatch(getRecipesDetail(id))

})

export default connect(mapStatetoProps, mapDispatchToProps)(RecipeListContainer)
