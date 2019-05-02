import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

import StoryItem from './StoryItem';
import {stories} from '../assets/stories.js';

export default class StoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: stories
    }
  }

  _renderItem = ({item}) => (
    <StoryItem
      id={item.id}
      title={item.title}
      scene={item.scene}
      story={item.story}
      thumbnail={item.thumbnail}
    />
  );

  _keyExtractor = (item) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.stories}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#F5FCFF',
  }
});