import React, {Component} from 'react';
import {Button, TouchableOpacity, ScrollView, Text} from 'react-native';
import {styles} from '../assets/styles';

class HowToPlay extends Component {

  _onViewStories = () => {
    this.props.navigation.navigate('Stories');
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Minute Mystery</Text>
        <Text style={styles.text}>Minute mystery is a simple game of lateral, out-of-the box thinking.</Text>

        <Text style={styles.title}>How to play</Text>
        <Text style={styles.text}>One player (the narrator) reads the scene out loud 
        to the rest of the players (the detectives). The narrator also reads the story, 
        without sharing it with the detectives. </Text>

        <Text style={styles.text}>The detectives have to figure out the story 
        that has led to this scene. </Text>     
        
        <Text style={styles.text}>The detectives can ask the narrator as many questions as 
        they want, but the narrator can only answer “yes”, “no”, or “maybe”. </Text>

        <TouchableOpacity style={styles.buttonStyle} onPress={this._onViewStories}>
          <Text style={{fontSize:20,color:'#518ef7'}}>Select a Story!</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
//<Button type="outline" title="Select a Story!" onPress={this._onViewStories} />

export default HowToPlay;