'use strict';

function parseRecipe (data) {
  const id = data.id+ ''
  const recipe = {}
  recipe[id] = data
  return recipe

}

function parseInstructions(data) {
  var instructions = []
  if(Array.isArray(data)) {
    data.forEach(el => {
      if(!el.name) {
        el.steps.forEach(el => instructions.push(el))
      } else {
        instructions.push({title: el.name, substeps: el.steps})
      }
    })
  }
  return instructions
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
      const addedInstructions = {}
      if(state[action.id]) {
        addedInstructions[action.id] = Object.assign({}, state[action.id], {instructions: parseInstructions(action.instructions)})
      }
      parseInstructions(action.instructions)
      return Object.assign({}, state, addedInstructions)
    }
    default:
      return Object.assign({}, state)
  }
}
