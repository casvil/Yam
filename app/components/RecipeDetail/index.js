import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { NavigationBar, Title, Subtitle, Image, Tile, Button, ListView } from '@shoutem/ui';
import Icon from 'react-native-vector-icons/EvilIcons'
import { Actions } from 'react-native-router-flux';

import RecipeInstructions from '../RecipeInstructions/';
import RecipeMetaData from '../RecipeMetaData/';
import styles from './styles';

export default ({ recipe, instructions }) => {
  let renderInstructions
  let renderIngredients
  let renderEquipment
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
          <RecipeMetaData data={ el } width={ 70 } tileHeight={ 120 } imageHeight={ 70 }/>
        )
      })
    })

    renderEquipment = instructions.map((step) => {
      return step.equipment.map(el => {
        return (
          <RecipeMetaData data={ el } width={ 90 } tileHeight= { 100 }imageHeight={ 50 }/>
        )
      })
    })
  }
  return (
  <View style={{flex:1}}>
    <NavigationBar
       styleName="inline"
       centerComponent={<Title>RECIPE</Title>}
       leftComponent={
         <Button
           onPress={() => Actions.recipeList()}>
           <Icon name="chevron-left" size={30}/>
         </Button>
       }
       rightComponent={
         <Button
           onPress={() => Actions.recipeList()}>
           <Icon name="cart" size={30}/>
         </Button>
       }
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
      <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false}>
        <View style={ styles_sectionTitle }>
          <Subtitle style={{ color: '#FFFFFF' }}>Equipment</Subtitle>
        </View>
        <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false }>
          {renderEquipment}
        </ScrollView>
        <View style={styles_sectionTitle}>
          <Subtitle style={{color: '#FFFFFF'}}>Ingredients</Subtitle>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderIngredients}
        </ScrollView>
        <View style={styles_sectionTitle}>
          <Subtitle style={{color: '#FFFFFF'}}>Instructions</Subtitle>
        </View>
          { renderInstructions }
      </ScrollView>
  </View>
  )
}
