import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationBar, Title, Subtitle, Image, Tile } from '@shoutem/ui';
import RecipeInstructions from '../RecipeInstructions/';
import RecipeIngredients from '../RecipeIngredients/';

export default ({ recipe, instructions }) => {
  let renderInstructions
  let renderIngredients
  if(instructions) {
    renderInstructions = instructions.map((step) => {
      return (
        <RecipeInstructions step={step} key={recipe.id + step.number}/>
      )
    })

    renderIngredients = instructions.map((step) => {
      return step.ingredients.map(el => {
        return (
          <RecipeIngredients ingredient={el}/>
        )
      })
    })
  }
  return (
  <View>
    <NavigationBar
       styleName="inline"
       centerComponent={<Title>RECIPE</Title>}
    />
    <Image
      key={ recipe.id }
      styleName="large-banner"
      source={{ uri: `https://spoonacular.com/recipeImages/${recipe.image}` }}
      >
      <Tile>
        <Title styleName="md-gutter-bottom">{recipe.title}</Title>
      </Tile>
    </Image>
      <View style={{margin: 20}}>
        <View style={{backgroundColor: '#000000', borderRadius: 10, width: 100, alignItems: 'center', padding: 2, marginBottom: 10}}>
          <Subtitle style={{color: '#FFFFFF'}}>Ingredients</Subtitle>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderIngredients}
        </ScrollView>
      </View>
      <View style={{backgroundColor: '#000000', borderRadius: 10, width: 100, alignItems: 'center', padding: 2, margin: 20, marginBottom: 10}}>
        <Subtitle style={{color: '#FFFFFF'}}>Instructions</Subtitle>
      </View>
      <ScrollView pagingEnabled={true}>
        { renderInstructions }
      </ScrollView>
  </View>
  )
}
