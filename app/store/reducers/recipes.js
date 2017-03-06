'use strict';
import { REHYDRATE } from 'redux-persist/constants'

function parseInstructions(data) {
  console.log(data);
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
    const recipe = Object.assign({}, action.recipes, { cooked: false })
        if(!state) {
          newValues = {[action.id]: recipe}
        }
        else {
          newValues= Object.assign({}, state, {[action.id]: recipe})
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
    case 'COOK_RECIPE': {
      const recipe = Object.assign({}, action.recipe, { cooked: true})
      const newValues = {[recipe.id] : recipe }
      newValues[recipe.id] = recipe
      // if(!state.cooked || state.cooked === 7) {
      //   newValues.cooked = 1
      // } else {
      //   newValues.cooked = state.cooked + 1
      // }

      return Object.assign({}, state, newValues)
    }
    case REHYDRATE:
      const incoming = action.payload.recipes
      if (incoming) return Object.assign({}, incoming)
      return state
    default:
      return Object.assign({}, state)
  }
}
