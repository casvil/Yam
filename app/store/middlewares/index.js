export default ({ dispatch, getState }) => next => action => {
  let constructedUrl = ''
  if(action.api) {
    const user = getState().user
    const cooked = getState().recipes.cooked
    const dislikes = []
    if(user.dislikes) {
      user.dislikes.forEach(el => {
        for (var key in el) {
          if (el.hasOwnProperty(key)) {
            dislikes.push(el[key])
          }
        }
      });
    }
    const excludeIngredients= user.dislikes ? `excludeIngredients=${dislikes.join('%2C+')}` : '';
    const intolerances= user.allergies ? `$intolerances=+${user.allergies.join('%2C+')}` : '';
    const diet= user.diets ? `diet='${user.diets.join('%2C+')}`: '';
    const offset = cooked ? cooked + 7 : 0
    const query = '*'
    constructedUrl=`${action.api.url}&${diet}&${excludeIngredients}&instructionsRequired=true${intolerances}&limitLicense=true&number=7&offset=${offset}&type=main+course`
    const config = action.api.config || { method : 'GET '};
    return fetch (`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com${constructedUrl}`, config)
      .then(res => res.json())
      .then(data => {
        if(action.api.next) {
          data.results.forEach((el) => {
            dispatch(action.api.success(el))
            dispatch(action.api.nextFunction(el.id))
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
