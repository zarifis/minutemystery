import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

class HowToPlay extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> How to play </Text>

        <Text style={styles.textSecond}>One player (the narrator) reads the scene out loud 
        to the rest of the players (the detectives). The narrator also reads the story, 
        without sharing it with the detectives. </Text>

        <Text style={styles.textSecond}>The detectives have to figure out the story 
        that has led to this scene. </Text>
        
        <Text style={styles.textSecond}>The detectives can ask the narrator as many questions as 
        they want, but the narrator can only answer “yes”, “no”, or “maybe”. </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textFirst: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },
  textSecond: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
});

export default HowToPlay;