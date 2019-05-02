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

const TabNavigator = createBottomTabNavigator(
  {
  'How To Play': HowToPlay,
  'Stories': StoryList,
  Story: Story,
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      labelStyle: {
        fontSize: 13,
      },
      style: {
        backgroundColor: '#d7e8f7',
      },
    }
  },
  {
    initialRouteName: 'How To Play',
  },
);

export default createAppContainer(TabNavigator);