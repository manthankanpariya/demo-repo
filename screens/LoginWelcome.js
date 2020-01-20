
import React, { Component, useState } from 'react';
import { Text, Image, View, AsyncStorage, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { NavigationActions, StackActions } from 'react-navigation';
// import { createStore } from 'redux'
// import {Provider  } from 'react-redux';

import ImageTag from '../components/ImageTag';
import Input from '../components/input';
import Card from '../components/Card';
import Counter from '../components/Counter';
import Backgroundmage from '../components/BackgroundImage';
import LoginButton from '../components/LoginButton';
import colors from '../components/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as firebase from "firebase";
// import reducer from '../src/reducer/reducer';

// const store = createStore(reducer);

// console.log(store.getState())


 class NextLoginScreen extends Component {

  saveData(){  
    let name = "Michal";  
    AsyncStorage.setItem('user',name);  
  }  
  displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('user');  
      alert(user);  
    }  
    catch(error){  
      alert(error)  
    }  
  }

  state = {
    email: "",
    displayName: ""    
};

  componentDidMount = () => {
    const {email,displayName} = firebase.auth().currentUser;
    this.setState({email, displayName});
  }

  logout = () => {
    firebase.auth().signOut();
    // this.props.navigation.goBack();
    this.props
      .navigation
      .dispatch(StackActions.reset({
        index: 0,
        actions: [ 
          NavigationActions.navigate({
            routeName: 'LoginScreen1',
            
          }),
        ],
      }))
      console.log('index reset')
  }
  

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
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Welcome {this.state.displayName} & {this.state.email} in NEPTOON</Text>
          </View>
          <LoginButton title="Logout" onPress={this.logout} />
        </View>
        {/* <Provider store={store}>
          <Counter style={styles.counter} />
        </Provider> */}
        <TouchableOpacity onPress ={this.saveData}>  
          <Text>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity>   
        <View style={styles.btngrp}>
          <View style={styles.btn}>
            <Button title="Checkout" onPress={() => {this.props.navigation.navigate({routeName : 'CheckoutScreen'})}} />
          </View>
          <View style={styles.btn}>
            <Button title="Image Picker" onPress={() => {this.props.navigation.navigate({routeName : 'ImagePickerScreen'})}} />
          </View>
          <View style={styles.btn}>
            <Button title="Video Compress" onPress={() => {this.props.navigation.navigate({routeName : 'VideoCompressScreen'})}} />
          </View>
          <View style={styles.btn}>
            <Button title="Data Fatch" onPress={() => {this.props.navigation.navigate({routeName : 'DataFatchScreen'})}} />
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
    alignItems: 'center',
    position: "relative",
  },
  
  divlogo: {
    alignItems: 'center',
  },
  counter:{
    margin: 30,
  },
  btngrp:{
    // flex: 1,
    // maxWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  btn:{
    margin: 10, 
    width: '60%',
  }
});

export default NextLoginScreen;