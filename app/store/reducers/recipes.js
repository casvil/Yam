'use strict';

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RECIPES':
      console.log(action.recipes);
      state.recipes = Object.assign({}, action.recipes)
      return Object.assign({}, state)
    default:
      return Object.assign({}, state)

  }
}
