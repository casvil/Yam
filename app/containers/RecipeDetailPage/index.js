import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { getRecipesDetail } from '../../store/actions/';
import RecipeDetail from '../../components/RecipeDetail/';

class RecipeDetailPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: 3,
      updated: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.instructions !== nextProps.instructions) {
      this.props.getRecipesDetail(this.props.id)
    }
  }

  componentDidMount() {
    this.props.getRecipesDetail(this.props.id)
  }

  render() {
    return (
      <RecipeDetail
        recipe={ this.props.recipe }
        instructions={ this.props.recipe.instructions }
      />
    )
  }
}

const mapStatetoProps = (state, props) => {
  const recipe = state.recipes[props.id]
  const instructions = state.recipes.instructions
  return { recipe, instructions }
}

const mapDispatchToProps = (dispatch) => ({
  getRecipesDetail: (id) => dispatch(getRecipesDetail(id))
})

export default connect(mapStatetoProps, mapDispatchToProps)(RecipeDetailPage)
