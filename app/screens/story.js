import React, { Component } from 'react';
import {Text, ScrollView, Image, Button} from 'react-native';
import { withNavigation } from 'react-navigation';
import {styles} from '../assets/styles';
import {stories} from '../assets/stories.js';

class Story extends Component {
  constructor(){
    super();
    this.state = {
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

  //<ScrollView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', '0');
    return(
      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{width: 400, height: 400}} source={stories[id].thumbnail}/>
      <Text style={styles.title}> Scene </Text>
      <Text style={styles.text}>{stories[id].scene}</Text>
      <Text style={styles.title}> Story </Text>
      {
        this.state.status ? null :  <Button title="Reveal Story" onPress={this.ShowHideTextComponentView} />
      }
      {
        this.state.status ? <Text style={styles.text}>{stories[id].story}</Text> : null
      }
      </ScrollView>
    );
  }
}

export default withNavigation(Story);