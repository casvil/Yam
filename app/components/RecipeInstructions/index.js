import React from 'react';
import { Text, ScrollView } from 'react-native';
import { View, Row , Divider, Caption, Subtitle, Image} from '@shoutem/ui';

export default ({step}) => {
  return (
      <View>
        <Row>
          <View styleName="vertical">
            <View>
              <Subtitle styleName="top">{step.number}</Subtitle>
            </View>
            <Subtitle>{step.step}</Subtitle>
          </View>
        </Row>
        <Divider styleName="line"/>
    </View>
  )
}
