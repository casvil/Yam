import React from 'react';
import { Text, ScrollView } from 'react-native';
import { View, Image, Screen, Caption} from '@shoutem/ui';
import SwipeComponentButton from '../SwipeComponentButton/'
export default () => {
  return (
    <View style={{flex:1, alignItems: 'stretch'}}>
      <Image
      style={{flex: 1}}
      source= {{uri: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop='}}
      />
    </View>
  )
}
