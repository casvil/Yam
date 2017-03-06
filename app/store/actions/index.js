export const dislikeIngredient = (ingredient, id) => ({
  type: 'DISLIKE_ING',
  dislike: { [id]: ingredient },
  id,
});

export const userServings = (value) => ({
  type: 'USER_SERVINGS',
  value
});

export const userAllergies = (allergy) => ({
  type: 'USER_ALLERGIES',
  allergy
});

export const userDiet = (diet) => ({
  type: 'USER_DIET',
  diet
});

export const cookRecipe = (recipe) => ({
  type: 'COOK_RECIPE',
  recipe
})

export const userSurvey = () => ({
  type: 'USER_SURVEY'
});

export const addRecipes = (recipes) => ({
  type: 'ADD_RECIPES',
  recipes,
  id: recipes.id
});

export const updateRecipe = (data, id) => ({
  type: 'UPDATE_RECIPE',
  data,
  id
});

export const getRecipes = () => ({
  type: 'GET_RECIPES',
  api: {
    url: '/recipes/search?',
    config : {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Mashape-Key':"U22l9xW2HymshjNYfrbP8U3Y4tPbp1stK76jsncRLKVTBHgxnO"
      }
    },
    next: true,
    success: addRecipes,
    nextFunction: getRecipesDetail
  },
})

export const getRecipesDetail = (id) => ({
  type: 'GET_RECIPES_DETAIL',
  api: {
    url: `/recipes/${id}/information?includeNutrition=false'`,
    config : {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Mashape-Key':"U22l9xW2HymshjNYfrbP8U3Y4tPbp1stK76jsncRLKVTBHgxnO"
      },
    },
    success: updateRecipe,
    id: id
  },
})
