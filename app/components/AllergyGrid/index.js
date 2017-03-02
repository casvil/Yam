import React, { Component } from 'react';
import { GridRow, ListView , Image, Tile, Text, NavigationBar, Title } from '@shoutem/ui';
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

 export default class AllergyGrid extends Component {

   renderRow(data) {
      const cells = data.map(item => {
        return (
          <TouchableOpacity
          key={ item.id }
          activeOpacity={ 0.4 }
          setOpacityTo={0.6}
          onPress={() => this.props.handleAllergy(item.name)}
          >
              <Image
                styleName="medium-square"
                source={{uri: item.url }}
              />
              <Text styleName="h-center">{item.name}</Text>
          </TouchableOpacity>
        )
      })
     return (
       <GridRow columns={ 2 }>
        {cells}
      </GridRow>
     )
   }
   render() {
     const groupedData = GridRow.groupByRows(this.props.allergies, 2)
     return (
      <View>
         <NavigationBar
            styleName="inline"
            centerComponent={<Title>ALLERGIES</Title>}
          />
       <View style={{margin: 20}}>
          <ListView
            data={ groupedData }
            renderRow={this.renderRow.bind(this) }
          />
        </View>
      </View>
     )
   }
 }
