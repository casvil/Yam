import React, { Component } from 'react';
import { View, Button, GridRow, NavigationBar, Subtitle, Title, ListView, Image ,Tile, Overlay} from '@shoutem/ui';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import styles from './styles.js';

export default class RecipeList extends Component {
  renderRow(data) {
    const styles_recipeMeta = StyleSheet.flatten(styles.recipeMeta)
    const cells = data.map(item => {
      return (
        <TouchableOpacity key={item.id} onPress={() => this.props.goToDetailPage({id: item.id})}>
          <Image
            key={ item.id }
            styleName="large-banner"
            source={{ uri: `https://spoonacular.com/recipeImages/${item.image}` }}
            >
          <Tile>
            <Title styleName="md-gutter-bottom">{item.title}</Title>
              <View styleName="actions" style={styles_recipeMeta}>
                <View styleName=" horizontal v-center">
                  <Icon style={styles.icon} name="timelapse"/>
                  <Text style={styles.text}>{item.readyInMinutes} mins</Text>
                </View>
              </View>
          </Tile>
        </Image>
      </TouchableOpacity>
      )
    })
    return (
      <GridRow columns = { 1 }>
        { cells }
      </GridRow>
    )
  }

  render () {
    const groupedData = GridRow.groupByRows(this.props.recipes, 1)
    return (
      <View>
        <NavigationBar
          styleName="inline"
          centerComponent={ <Title>RECIPES</Title> }
        />
        <View>
          <ListView
            data={ groupedData }
            renderRow={ this.renderRow.bind(this) }
          />
      </View>
    </View>
    )
  }
}
