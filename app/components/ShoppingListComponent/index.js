import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ListView, NavigationBar, Title, Row, Text, Image } from '@shoutem/ui';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/EvilIcons'

import ToggleListItem from '../ToggleListItem/';

export default class ToggleList extends Component {

  renderHeader = (section, index, isActive) => {
    const icon = isActive ? "chevron-down" : "chevron-right"
    return (
        <Row>
          <Text>{section.title}</Text>
          <Icon name={icon} size={30}/>
        </Row>
    );
  }

  renderContent = (section) => {
    return (
      section.ingredients.map(el => {
        const name = `${el.amount} ${el.unit} ${el.name}`
        return (
          <ToggleListItem
          key={el.id}
          name = { name }
          handleData={() =>console.log('hey')}
          />
        )
      })
    );
  }
  render() {
    return (
    <View style={{flex: 1}}>
        <NavigationBar
          styleName="inline"
          centerComponent={ this.props.title }
        />
      <ScrollView showsVerticalScrollIndicator={false} style={{margin: 10}}>
        <Accordion
          sections={ this.props.data }
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
        />
      </ScrollView>
    </View>
    );
  };
}
