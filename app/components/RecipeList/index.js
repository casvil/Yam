// import React, { Component } from 'react';
// import { GridRow, NavigationBar, Title, ListView } from '@shoutem/ui';
// import { TouchableOpacity, View } from 'react-native';
//
// export default class RecipeList extends Component {
//   renderRow(data) {
//     const cells = data.map(item => {
//       return (
//         <TouchableOpacity
//           key={ item.id }
//           activeOpacity={ 0.4 }
//         >
//           <Image
//           styleName="medium-square"
//           source={}
//           />
//           <Text></Text>
//         </TouchableOpacity>
//       )
//     })
//     return (
//       <GridRow columns = { 2 }>
//         { cells }
//       </GridRow>
//     )
//   }
//
//   render () {
//     const groupedData = GridRow.groupByRows(this.props.recipes, 2)
//     return (
//       <View>
//         <NavigationBar
//           styleName="inline"
//           centerComponent={ <Title>RECIPES</Title> }
//         />
//         <View style={{ margin: 20 }}>
//           <ListView
//             data={ groupedData }
//             renderRow={ this.renderRow.bind(this) }
//           />
//       </View>
//     </View>
//     )
//   }
// }
