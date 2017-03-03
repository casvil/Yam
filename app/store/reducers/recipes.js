'use strict';

function parseRecipe (data) {
  const id = data.id+ ''
  const recipe = {}
  recipe[id] = data
  return recipe

}
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RECIPES':
    const  newValues = {}
        if(!state.recipes) {
          newValues.recipes = parseRecipe(action.recipes)
        }
        else {
          newValues.recipes= Object.assign({}, state.recipes, parseRecipe(action.recipes))
        }
      return Object.assign({}, state, newValues)
    default:
      return Object.assign({}, state)

  }
}
