export const likeIngredient = (ingredient) => ({
  type: 'LIKE_ING',
  ingredient
});

export const dislikeIngredient = (ingredient) => ({
  type: 'DISLIKE_ING',
  ingredient
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

export const addRecipes = (recipes) => ({
  type: 'ADD_RECIPES',
  recipes,
  id: recipes.id
});

export const updateRecipe = (instructions, id) => ({
  type: 'UPDATE_RECIPE',
  instructions,
  id
});

export const getRecipes = () => ({
  type: 'GET_RECIPES',
  api: {
    url: '/recipes/search?diet=vegetarian&instructionsRequired=true&limitLicense=true&number=10&offset=0&query=burger&type=main+course',
    config : {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Mashape-Key':"U22l9xW2HymshjNYfrbP8U3Y4tPbp1stK76jsncRLKVTBHgxnO"
      }
    },
    next: true,
    success: addRecipes
  },
})

export const getRecipesDetail = (id) => ({
  type: 'GET_RECIPES_DETAIL',
  api: {
    url: `/recipes/${id}/analyzedInstructions?stepBreakdown=true`,
    config : {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Mashape-Key':"U22l9xW2HymshjNYfrbP8U3Y4tPbp1stK76jsncRLKVTBHgxnO"
      }
    },
    success: updateRecipe,
    id: id
  },
})
