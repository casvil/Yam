import React from 'react';
import { StyleSheet, View, Text, ScrollView, ListView } from 'react-native';
import { NavigationBar, Title, Subtitle, Image, Tile } from '@shoutem/ui';
import RecipeInstructions from '../RecipeInstructions/';
import RecipeIngredients from '../RecipeIngredients/';
import styles from './styles';

export default ({ recipe, instructions }) => {
  let renderInstructions
  let renderIngredients
  const styles_sectionTitle = StyleSheet.flatten(styles.sectionTitle)
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
        <View style={styles_sectionTitle}>
          <Subtitle style={{color: '#FFFFFF'}}>Ingredients</Subtitle>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderIngredients}
        </ScrollView>
          <View style={styles_sectionTitle}>
            <Subtitle style={{color: '#FFFFFF'}}>Instructions</Subtitle>
          </View>
          <ScrollView>
          { renderInstructions }
          </ScrollView>
      </View>
  </View>
  )
}
