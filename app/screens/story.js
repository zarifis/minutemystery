import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { withNavigation } from 'react-navigation';

import {stories} from '../assets/stories.js';

class Story extends Component {
  constructor(){
    super();
    this.state ={
      status:false
    }
  }

  ShowHideTextComponentView = () =>{
    if(this.state.status == true) {
        this.setState({status: false})
    }
    else{
      this.setState({status: true})
    }
  }

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', '0');
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={stories[id].thumbnail}/>
      <Text style={styles.textFirst}> Scene </Text>
      <Text style={styles.textSecond}>{stories[id].scene}</Text>
      <Text style={styles.textFirst}> Story </Text>
      {
        this.state.status ? null :  <Button title="Reveal Story" onPress={this.ShowHideTextComponentView} />
      }
      {
        this.state.status ? <Text style={styles.textSecond}>{stories[id].story}</Text> : null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    textFirst: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
    },
    textSecond: {
      fontSize: 16,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 30,
    },
  });

export default withNavigation(Story);