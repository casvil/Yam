
export default (state = {}, action) => {
  switch (action.type) {
    case 'LIKE_ING':
      if (!state.likeIngredients) {
        state.likeIngredients = [action.ingredient]
      } else {
        if (!state.likeIngredients.includes(action.ingredient))
          state.likeIngredients = [...state.likeIngredients, action.ingredient]
      }
      console.log(state);
      return Object.assign({}, state)
    case 'DISLIKE_ING':
      if (!state.dislikeIngredient) {
        state.dislikeIngredient = [action.ingredient]
        if (state.likeIngredients.includes(action.ingredient)) {
          state.likeIngredients.splice(
            state.likeIngredients.indexOf(action.ingredient),1
          )
        }
      } else {
        if (!state.dislikeIngredient.includes(action.ingredient))
          state.dislikeIngredient = [...state.dislikeIngredient,action.ingredient]
      }
      console.log(state);
      return Object.assign({}, state)
      case 'USER_SERVINGS':
        state.userServings = { servings: action.value }
        return Object.assign({}, state)
      case 'USER_ALLERGIES':
        if(!state.allergies) {
          state.allergies = [action.allergy]
        } else {
          state.allergies = [...state.allergies, action.allergy]
        }
        return Object.assign({}, state)
    default:
      return state
  }

}
