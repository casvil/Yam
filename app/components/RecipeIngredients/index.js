import React from 'react';
import { Text, ScrollView } from 'react-native';
import { View, Image, Tile, Caption} from '@shoutem/ui';

export default ({ingredient}) => {
  return (
      <Tile key={ingredient.id} style={{width: 70, marginRight: 10}}>
        <Image
          styleName="small"
          source={{uri: `${ingredient.image}`}}
        />
        <Caption style={{width: 60, textAlign: 'center'}}>{ingredient.name}</Caption>
      </Tile>

  )
}
