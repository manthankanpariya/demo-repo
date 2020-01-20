
import React, { useState, Component } from 'react';
import { BackHandler, Alert, Switch, SafeAreaView, ScrollView, Text, Image, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import * as firebase from "firebase";
import { NavigationActions, StackActions } from 'react-navigation'

import Input from '../components/input';
import Card from '../components/Card';
import ImageTag from '../components/ImageTag';
import Backgroundmage from '../components/BackgroundImage';
import LoginButton from '../components/LoginButton';
import colors from '../components/colors';

class LoginScreen1 extends Component {

  resetStack = () => {
    console.log("hi")
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
   }

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };

  state = {
    email: '',
    password: '',
    errorMessage: ''
  }

  handleEmail = (text) => {
    this.setState({ email: text })
    const emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailResult = emailValidate.test(text);
    if (emailResult == false) {
      this.setState({ emaiAlert: <Text style={styles.notValid}>Not valid valid Email!</Text> })
    } else {
      this.setState({ emaiAlert: undefined })
    }
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }

  // checklogin = (email, pass) => {
  //   console.log(email);
  //   console.log(pass);
  //   // if (email.length === 0 && pass.length === 0) {
  //   //   this.setState({ emaiAlert: <Text style={styles.notValid}>Required fields!</Text> }) 
  //   // }


  //   if (email === '' || pass === '') {
  //     this.setState({ inputvalidation: <Text style={styles.notValid}>Please enter Email and Password!</Text> })
  //     return 
  //   } else {
  //     if (email == 'test@gmail.com' && pass == '123') {
  //       console.log('true!');
  //       this.props.navigation.navigate({ routeName: 'LoginWelcomeScreen' , param : {emailId : email}})
  //     } else {
  //       this.setState({ inputvalidation: <Text style={styles.notValid}>Incorrect Email or Password!</Text> })
  //     }

  //   }

  // }

  checklogin = (email, pass) => {
    if (email === '' || pass === '') {
      this.setState({ errorMessage: 'Please enter Email and Password!' })
    } else {
      firebase.auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => this.props.navigation.navigate({routeName:'LoginWelcomeScreen'}))
        .catch(error => this.setState({ errorMessage: error.message }))
        //this.props.navigation.navigate({ routeName: 'LoginWelcomeScreen' , param : {emailId : email}})
    }
  }

  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = { showPassword: true, }
  }

  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
    console.log("false")
  }
  
  render() {
    return (

      <View style={{ height: '100%' }}>
        {this.resetStack}
        <Backgroundmage source={require('../assets/LoginBackground.png')} />
        <ScrollView>
          <View style={styles.screen}>

            <View style={styles.divlogo}>
              <ImageTag style={styles.mainlogo} resizeMode='contain' source={require('../assets/logoinfo.png')} />
            </View>
            {this.state.errorMessage && <Text style={styles.notValid}>{this.state.errorMessage}</Text>}
            <Card>

              {this.state.inputvalidation}
              <Text style={styles.inputtitle}>
                <ImageTag style={styles.inputicon} resizeMode='cover' source={require('../assets/man-user.png')} />{'  '}
                Email/Phone number
                </Text>
              <Input style={styles.input} onChangeText={this.handleEmail} />
              {this.state.emaiAlert}
              <Text style={styles.inputtitle}>
                <ImageTag style={styles.inputicon} resizeMode='cover' source={require('../assets/locked-padlock.png')} />{'  '}
                Password
            </Text>
              <Input style={styles.input} secureTextEntry={this.state.showPassword} onChangeText={this.handlePassword} />
              <Switch onValueChange={this.toggleSwitch} value={!this.state.showPassword} />

            </Card>

            <Text onPress={() => { this.props.navigation.navigate({ routeName: 'ForgotPasswordScreen' }) }}
              style={styles.forpassfield}>Forgot password?</Text>
            <View style={{ paddingTop: 40, alignItems: 'center' }}>
              <LoginButton title="Login" onPress={() => this.checklogin(this.state.email, this.state.password)} />
            </View>

            <View style={{ flexDirection: "row", justifyContent: 'center', paddingTop: 40 }}>
              <Text>Not a member? </Text><Text onPress={() => { this.props.navigation.navigate({ routeName: 'CreateAccountScreen' }) }} style={{ color: 'red' }}> SIGN UP</Text>
            </View>
          </View>
        </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({

  screen: {
    //flex: 1,
    padding: 20,
    paddingTop: 40,
    // paddingBottom: 100,
    // alignItems: 'center',
    position: "relative",

  },
  notValid: {
    color: 'red',
    paddingBottom: 5,
  },
  inputtitle: {
    color: 'grey',
  },
  reqfield: {
    color: 'red',
    paddingBottom: 10,
  },
  divlogo: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  input: {

  },
  inputicon: {
    height: 10,
    width: 10,
  },
  forpassfield: {
    textAlign: 'right',
    paddingTop: 30,
    color: colors.primary,
  },

  loginbtn: {
    padding: 60,
    borderRadius: 50,
  },

});

export default LoginScreen1;