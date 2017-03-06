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
        if(!state.recipe) {
          newValues.recipe = {[action.id]: recipe}
        }
        else {
          if(!state.recipe[action.id]) {
            newValues.recipe = Object.assign({}, state.recipe, {[action.id]: recipe})
            }
          }
        return Object.assign({}, state, newValues)
      }
    case 'UPDATE_RECIPE': {
      const addedInstructions = {}
      const recipe = Object.assign({}, state.recipe[action.id], {instructions: parseInstructions(action.instructions)})
      if(state.recipe[action.id]) {
        addedInstructions.recipe = Object.assign({}, state.recipe, {[action.id]: recipe})
      }
      return Object.assign({}, state, addedInstructions)
    }
    case 'COOK_RECIPE': {
      const recipe = Object.assign({}, action.recipe, { cooked: true})
      const newValues  = {}
      newValues.recipe = Object.assign({}, state.recipe, {[recipe.id] : recipe })
      const cooked =  state.cooked ? state.cooked++ : 1
      return Object.assign({}, state, newValues, { cooked })
    }
    case REHYDRATE:
      const incoming = action.payload.recipes
      if (incoming) return Object.assign({}, incoming)
      return state
    default:
      return Object.assign({}, state)
  }
}
