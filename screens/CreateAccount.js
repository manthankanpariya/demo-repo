
import React, { Component, useState } from 'react';
import { Text, ScrollView, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import * as firebase from "firebase";

import Input from '../components/input';
import Card from '../components/Card';
import ImageTag from '../components/ImageTag';
import Backgroundmage from '../components/BackgroundImage';
import LoginButton from '../components/LoginButton';
import colors from '../components/colors';



export default class NextLoginScreen extends Component {

  state = { cca2: 'US', countryName: 'india', dialCode: '91', dis: 'true', name: '', email: '', password: '', errorMessage: null}
  getCountry = (country) => {
    console.log("m country code========>", country)
    this.setState({ cca2: country.cca2, countryName: country.name, dialCode: country.callingCode })
  }



  handleEmail = (text) => {
    this.setState({ email: text })
    const emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailResult = emailValidate.test(text);
    if (emailResult == false) {
      this.setState({ dis: 'true' })
      this.setState({ emaiAlert: <Text style={styles.notValid}>Not valid valid Email!</Text> })
    } else {
      this.setState({ emaiAlert: undefined })
      this.setState({ dis: undefined })
    }
  }

  createAccount = () => {
    firebase.auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(userCredentials => {
      return userCredentials.user.updateProfile({displayName: this.state.name}); })
      .catch(error => this.setState({errorMessage: error.message}))
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <Backgroundmage source={require('../assets/LoginBackground.png')} />
        <ScrollView>
          <View style={styles.screen}>

            <View style={styles.divlogo}>
              <ImageTag style={styles.mainlogo} resizeMode='contain' source={require('../assets/logoinfo.png')} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>Create account</Text>
            </View>
            <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
            <Card style={styles.card}>
              <Text style={styles.inputtitle}>
                <ImageTag style={styles.inputicon} resizeMode='cover' source={require('../assets/global.png')} />{'  '}
                Country
                </Text>
              <CountryPicker
                // onChange={this.updateUser}
                onSelect={this.getCountry}
                //withCallingCode={this.state.cca2}
                cca2={this.state.cca2}
                translation='eng'
                style={{ color: colors.primary }}
              />
              <Text>

                {this.state.countryName}  ({this.state.dialCode})</Text>
              {/* {JSON.stringify(this.state.country, null, 2)} */}


              <Text style={styles.inputtitle}>
                <ImageTag style={styles.inputicon} resizeMode='cover' source={require('../assets/envelope-grey.png')} />{'  '}
                Name
            </Text>
              <Input style={styles.input} onChangeText={name => this.setState({name})} />
              {this.state.emaiAlert}

              <Text style={styles.inputtitle}>
                <ImageTag style={styles.inputicon} resizeMode='cover' source={require('../assets/envelope-grey.png')} />{'  '}
                Email
            </Text>
              <Input style={styles.input} onChangeText={email => this.setState({email})} />

              <Text style={styles.inputtitle}>
                <ImageTag style={styles.inputicon} resizeMode='cover' source={require('../assets/envelope-grey.png')} />{'  '}
                Password
            </Text>
              <Input style={styles.input} onChangeText={password => this.setState({password})} />

            </Card>
            <View style={{ paddingTop: 40, paddingBottom: 30, alignItems: 'center' }}>
              <LoginButton
                onPress={this.createAccount} title="Next" />
                {/* <LoginButton disabled={this.state.dis} style={!this.state.dis ? '' : styles.disabled}
                onPress={this.createAccount} title="Next" /> */}
            </View>
            <View style={styles.details}>
              <Text style={{ color: 'grey', marginTop: '5%' }}>Use Phone Number Instead</Text>
              <ImageTag style={styles.mailicon} resizeMode='cover' source={require('../assets/envelope.png')} />
              <Text>Already have an account? <Text style={{ color: colors.primary }}>LOG IN</Text> </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  screen: {
    //flex: 1,
    padding: 20,
    paddingTop: 20,
    // alignItems: 'center',
    position: "relative",
  },
  inputtitle: {
    color: '#D8D8D8',
    marginTop: 10,
  },
  disabled: {
    backgroundColor: 'grey',
  },
  notValid: {
    color: 'red',
    paddingBottom: 5,
  },
  card: {

  },
  divlogo: {
    alignItems: 'center',
  },
  inputicon: {
    height: 10,
    width: 10,
  },
  loginbtn: {
    padding: 60,
    borderRadius: 50,
    backgroundColor: '#56cfa1',
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerdetail: {
    textAlign: 'center'
  },
  mailicon: {
    width: 30,
    height: 30,
    marginTop: 20,
    marginBottom: 20
  },
});

// export default NextLoginScreen;
//AppRegistry.registerComponent('NextLoginScreen', () => NextLoginScreen);