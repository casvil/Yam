import React, { Component } from 'react';
import { View, Button, GridRow, NavigationBar, Subtitle, Title, ListView, Image ,Tile, Overlay} from '@shoutem/ui';
import { Text, TouchableOpacity, ScrollView, WebView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import URL from './checkout.html'

export default class Checkout extends Component {

  constructor(props) {
    super(props)
    //
    // this.formData = new FormData();
    // this.formData.append('products[5144][id]','5144')
    // this.formData.append('products[5144][qty]','1')
    // this.formData.append('products[26642][id]','26642')
    // this.formData.append('products[26642][qty]','1')
    // console.log('FORM DATA ', this.formData);

    // this.formData = 'products[5144][id]=5144&products[5144][qty]=6'
  }

  // loadCookie () {
  //   // access to this.props.cookie
  // }
  //
  // getHTML(cookie) {
  //   Object.assign(cookie, {
  //     domain: 'ulabox.com',
  //     path:'/'
  //   })
  //   const cookieString = Object.keys(cookie)
  //     .map(key => ({key, value: cookie[key]}))
  //     .reduce((accum, el) => {
  //       return accum + `;${el.key}=${el.value}`;
  //     }, "")
  //
  //   return `
  //     <!DOCTYPE html>
  //     <html>
  //       <head>
  //         <meta charset="utf-8">
  //         <title></title>
  //         <script>
  //           document.cookie=${cookieString};
  //           location.href='https://www.ulabox.com/mi-carrito';
  //         </script>
  //       </head>
  //       <body>
  //
  //       </body>
  //     </html>
  //   `
  // }
  // [{"key":"products[5144][id]","value":"5144","description":""},{"key":"products[5144][qty]","value":"1","description":""},{"key":"products[26642][id]","value":"26642","description":""},{"key":"products[26642][qty]","value":"1","description":""}]

  render () {
    console.log(this.formData);
    return (
      <WebView
        source={{
          uri: 'https://www.ulabox.com/mi-carrito/productos/mas',
          method: 'POST',
          body: 'products%5B17202%5D%5Bid%5D=17202&products%5B17202%5D%5Bqty%5%3D=5',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          }
        }}
        style={{marginTop: 20}}
      />
    )
  }
}

// https://www.ulabox.com/mi-carrito
