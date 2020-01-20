
import React, { Component, useState } from 'react';
import { Text, Image, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { NavigationActions, StackActions } from 'react-navigation';

import Input from '../components/input';
import Card from '../components/Card';
import ImageTag from '../components/ImageTag';
import Backgroundmage from '../components/BackgroundImage';
import LoginButton from '../components/LoginButton';
import colors from '../components/colors';  
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as firebase from "firebase";
import {connect} from 'react-redux';

class Counter extends Component {

  render() {
    
    return (
      
        <View style={this.props.style}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={this.props.increaseCounter}>
              <Text>Increase</Text>
            </TouchableOpacity>
            <Text>{this.props.counter}</Text>
            <TouchableOpacity onPress = {this.props.decreaseCounter}>
              <Text>Decrease</Text>
            </TouchableOpacity> 
          </View>
        </View>

    );
  }
}

mapStateToProps = (state) => {
    return{
        counter:state.counter
    }
}

mapDispatchToProps = (dispatch) => {
    return{
        increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    }
}

const styles = StyleSheet.create({

 
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)