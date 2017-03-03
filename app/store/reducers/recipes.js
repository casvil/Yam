'use strict';

function parseRecipe (data) {
  const id = data.id+ ''
  const recipe = {}
  recipe[id] = data
  return recipe

}
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RECIPES': {
    const  newValues = {};
        if(!state) {
          newValues = parseRecipe(action.recipes)
        }
        else {
          newValues= Object.assign({}, state, parseRecipe(action.recipes))
        }
        return Object.assign({}, state, newValues)
      }
    case 'UPDATE_RECIPE': {
      const newValues = {}
      if(state[action.id]) {
        console.log(state[action.id]);
        newValues.instructions = action.instructions
      }
      const addedInstructions = {}
      addedInstructions[action.id] = Object.assign({}, state[action.id], newValues)
      console.log(addedInstructions);
      return Object.assign({}, state, addedInstructions)
    }
    default:
      return Object.assign({}, state)
  }
}
