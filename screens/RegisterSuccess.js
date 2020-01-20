
import React, { Component, useState } from 'react';
import { Text, Image, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import Input from '../components/input';
import Card from '../components/Card';
import ImageTag from '../components/ImageTag';
import Backgroundmage from '../components/BackgroundImage';
import LoginButton from '../components/LoginButton';
import colors from '../components/colors';


export default class NextLoginScreen extends Component {

  render() {
    const getEmailId = this.props.navigation.getParam('emailId');
    return (
      <View style={{ height: '100%' }}>
        <Backgroundmage source={require('../assets/LoginBackground.png')} />
        <View style={styles.screen}>
          <View style={styles.divlogo}>
            <ImageTag style={styles.mainlogo} resizeMode='contain' source={require('../assets/logoinfo.png')} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Your Registration is Completed</Text>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Welcome in NEPTOON</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  screen: {
    //flex: 1,
    padding: 20,
    paddingTop: 50,
    // alignItems: 'center',
    position: "relative",
  },
  
  divlogo: {
    alignItems: 'center',
  },
  
});

// export default NextLoginScreen;
//AppRegistry.registerComponent('NextLoginScreen', () => NextLoginScreen);