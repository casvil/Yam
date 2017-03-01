import React, { Component } from 'react';
import { GridRow, ListView , Image } from '@shoutem/ui';
import { Text, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

 export default class AllergyGrid extends Component {

   renderRow(data) {
      const cells = data.map(item => {
        return (
          <TouchableOpacity
          key={ item.id }
          activeOpacity={ 0.4 }
          onPress={() => this.props.handleAllergy(item.title)}
          >
            <Image
              styleName="medium-square"
              source={{uri: item.url }}
            />
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
        <ListView
          data={ groupedData }
          renderRow={this.renderRow.bind(this) }
        />
     )
   }
 }
