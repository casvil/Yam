import React from 'react';
import { View , Card, Image, Title, Button } from '@shoutem/ui';
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles }  from './styles.js'

export default({ingredient, imageURL, clickLike, clickDisLike}) => {
    return (
      <View>
        <Image
          styleName="large-square"
          source={{uri: imageURL }}
        />
        <View styleName="vertical h-center">
        </View>
        <View styleName = "horizontal flexible">
          <Button styleName="full-width">
            <Icon size={20} name="star" color="#70C1B3" />
          </Button>
          <Button styleName="full-width" onPress={() => clickLike(ingredient)}>
            <Icon size={20} name="heart" color="#F08B89"/>
          </Button>
          <Button styleName="full-width" onPress={() => clickDisLike(ingredient)}>
            <Icon size={20} name="close" color="#FFE066" />
          </Button>
        </View>
      </View>
    )
}
