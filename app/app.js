/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import StoryList from './screens/storylist';
import HowToPlay from './screens/howToPlay';
import Story from './screens/story';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}


const TabNavigator = createBottomTabNavigator(
  {
  Home: HomeScreen,
  'Stories': StoryList,
  Story: {screen: Story},
  'How To Play': HowToPlay,
  },
  {
    initialRouteName: 'Stories',
  }
);

export default createAppContainer(TabNavigator);