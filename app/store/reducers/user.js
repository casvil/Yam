export default (state = {}, action) => {
  switch (action.type) {
    case 'LIKE_ING': {
      const newValues = { };
      if (!state.likeIngredients) {
        newValues.likeIngredients = [action.ingredient]
      } else {
        if (!state.likeIngredients.includes(action.ingredient))
          newValues.likeIngredients = [...state.likeIngredients, action.ingredient]
        if (state.dislikeIngredient.includes(action.ingredient)) {
          newValues.dislikeIngredient.splice(
            state.dislikeIngredient.indexOf(action.ingredient), 1
          )
        }
      }
      return Object.assign({}, state, newValues)
    }
    case 'DISLIKE_ING':{
      if (!state.dislikeIngredient) {
        newValues.dislikeIngredient = [action.ingredient]
        if (state.likeIngredients.includes(action.ingredient)) {
          newValues.likeIngredients.splice(
            state.likeIngredients.indexOf(action.ingredient), 1
          )
        }
      } else {
        if (!state.dislikeIngredient.includes(action.ingredient))
          newValues.dislikeIngredient = [...state.dislikeIngredient, action.ingredient]
      }
      return Object.assign({}, state, newValues)
    }
    case 'USER_SERVINGS':
      return Object.assign({}, state, { servings: action.value });
    case 'USER_ALLERGIES': {
      const newValues = {}
      if (!state.allergies) {
        newValues.allergies = [action.allergy]
      } else {
        if (!state.allergies.includes(action.allergy)) {
          newValues.allergies = [...state.allergies, action.allergy]
        }
      }
      return Object.assign({}, state, newValues);
    }
    default:
      return state
  }

}
