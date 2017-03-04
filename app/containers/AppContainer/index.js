import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SurveyContainer from '../SurveyContainer/';
import RecipeListContainer from '../RecipeListContainer'
import RecipeDetailPage from '../RecipeDetailPage'
export default class AppContainer extends Component {

  componentWillMount() {
    this.props.persist
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="survey" component={ SurveyContainer }  hideNavBar={true}/>
          <Scene key="recipeList" component={ RecipeListContainer }  hideNavBar={true}/>
          <Scene key="recipesDetailPage" component={ RecipeDetailPage }  hideNavBar={true}/>
        </Scene>
      </Router>
    );
  }
}
