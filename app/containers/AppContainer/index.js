import React, { Component } from 'react';
import { Scene, Router, Switch } from 'react-native-router-flux';
import { connect } from 'react-redux';

import SurveyContainer from '../SurveyContainer/';
import RecipeListContainer from '../RecipeListContainer';
import RecipeDetailPage from '../RecipeDetailPage';
import Main from '../../components/Main/';

export default class AppContainer extends Component {

  componentWillMount() {
    this.props.persist
  }

  render() {
    return (
      <Router>
        <Scene
          key="root"
          component={ connect(state => ({user: state.user}))(Switch) }
          tabs={ true }
          selector={ props => props.user.survey ? 'survey': 'main'}
        >
          <Scene key="survey" component={ SurveyContainer }  hideNavBar={true}/>
          <Scene key="main" component={ Main }  hideNavBar={true}/>
          <Scene key="recipeList" component={ RecipeListContainer }  hideNavBar={true}/>
          <Scene key="recipesDetailPage" component={ RecipeDetailPage }  hideNavBar={true}/>
        </Scene>
      </Router>
    );
  }
}
