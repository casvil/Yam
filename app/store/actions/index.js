export const likeIngredient = (ingredient) => ({
  type: 'LIKE_ING',
  ingredient
} );

export const dislikeIngredient = (ingredient) => ({
  type: 'DISLIKE_ING',
  ingredient
})

export const userServings = (value) => ({
  type: 'USER_SERVINGS',
  value
})

export const userAllergies =(allergy) => ({
  type: 'USER_ALLERGIES',
  allergy
})

export const addRecipes = (recipes) => ({
  type: 'ADD_RECIPES',
  recipes
})

export const getRecipes = () => ({
  type: 'GET_RECIPES',
  api: {
    url: '/recipes/search?diet=vegetarian&instructionsRequired=true&limitLicense=true&number=10&offset=0&query=burger&type=main+course',
    config : {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Mashape-Key':""
      }
    },
    next: true,
    success: getRecipesDetail
  },
})

export const getRecipesDetail = (id) => ({
  type: 'GET_RECIPES_DETAIL',
  api: {
    url: `/recipes/${id}/analyzedInstructions?stepBreakdown=true`,
    config : {
      method: 'GET',
      headers: {
        'X-Mashape-Key':""
      }
    },
    success: addRecipes
  },
})
