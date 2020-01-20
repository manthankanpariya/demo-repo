
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

  state = { cca2: 'US', countryName: 'india', dialCode: '91' }
  getCountry = (country) => {
    this.setState({ cca2: country.cca2, countryName: country.name, dialCode: country.callingCode })
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <Backgroundmage source={require('../assets/LoginBackground.png')} />
        <View style={styles.screen}>

          <View style={styles.divlogo}>
            <ImageTag style={styles.mainlogo} resizeMode='contain' source={require('../assets/logoinfo.png')} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Forgot Your Password?</Text>
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
              Kindly enter your email or phone number
            </Text>
            <Input style={styles.input} />
          </Card>
          <View style={{ paddingTop: 40, paddingBottom: 30, alignItems: 'center' }}>
            <LoginButton title="Send" onPress={() => { this.props.navigation.navigate({ routeName: 'CreateAccountScreen' }) }} />
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
    paddingTop: 20,
    // alignItems: 'center',
    position: "relative",
  },
  inputtitle: {
    color: '#D8D8D8',
    marginTop: 10,
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