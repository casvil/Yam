import React from 'react';
import { Text } from 'react-native';
import { Button, View } from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
export default () => {
  return (
    <View styleName="horizontal h-center">
      <Button
        styleName="full-width, dark"
        style={{borderRadius: 20, width: 125, padding: 5, backgroundColor: '#000' }}
        onPress={() => Actions.recipeList()}>
        <Text style={{color: '#FFF'}}>EXIT SURVEY</Text>
      </Button>
    </View>
  )
}
