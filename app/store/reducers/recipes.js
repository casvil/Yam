'use strict';
import { REHYDRATE } from 'redux-persist/constants'

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
    const recipe = Object.assign({}, action.recipes, { cooked: false })
        if(!state.recipe) {
          newValues.recipe = {[action.id]: recipe}
        }
        else {
          if(!state.recipe[action.id]) {
            newValues.recipe = Object.assign({}, state.recipe, {[action.id]: recipe})
            }
          }
        return Object.assign({}, state, newValues, { lastFetched: Date.now()})
      }
    case 'UPDATE_RECIPE': {
      const addedData = {}
      const recipe = Object.assign(
        {}, state.recipe[action.id],
        {instructions: parseInstructions(action.data.analyzedInstructions)},
        {ingredients: action.data.extendedIngredients}
      )
      if(state.recipe[action.id]) {
        addedData.recipe = Object.assign({}, state.recipe, {[action.id]: recipe})
      }
      // let ingredients = []
      // action.data.extendedIngredients.forEach(el => ingredients.push(el))
      // console.log(ingredients);
      // if(!state.ingredientsList) {
      //   addedData.ingredientList  = [ingredients]
      // } else {
      //   addedData.ingredientList = [...state.ingredientList, ingredients]
      // }
      return Object.assign({}, state, addedData)
    }
    case 'COOK_RECIPE': {
      const recipe = Object.assign({}, action.recipe, { cooked: true})
      const newValues  = {}
      newValues.recipe = Object.assign({}, state.recipe, {[recipe.id] : recipe })
      console.log(state.cooked++, typeof state.cooked);
      const cooked =  state.cooked ? state.cooked++ : 1
      console.log(cooked);
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
