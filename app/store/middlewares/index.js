export default ({ dispatch, getState }) => next => action => {
  let constructedUrl = ''
  if(action.api) {
    const state = getState().user
    const dislikes = []
    if(state.dislikes) {
      state.dislikes.forEach(el => {
        for (var key in el) {
          if (el.hasOwnProperty(key)) {
            dislikes.push(el[key])
          }
        }
      });
    }
    const excludeIngredients= state.dislikes ? `excludeIngredients=${dislikes.join('%2C+')}` : '';
    const intolerances= state.allergies ? `$intolerances=+${state.allergies.join('%2C+')}` : '';
    const diet= state.diets ? `diet='${state.diets.join('%2C+')}`: '';
    const query = '*'
    constructedUrl=`${action.api.url}&${diet}&${excludeIngredients}&instructionsRequired=true${intolerances}&limitLicense=true&number=7&offset=0&query=*&type=main+course`
    const config = action.api.config || { method : 'GET '};
    return fetch (`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com${constructedUrl}`, config)
      .then(res => res.json())
      .then(data => {
        if(action.api.next) {
          data.results.forEach((el) => {
            dispatch(action.api.success(el))
          })
        }
        else {
          dispatch(action.api.success(data , action.api.id))
        }
      })
      .catch((err) => {
        throw err
      })
  } else {
    next(action)
  }
};
