
import React, { Component, useState } from 'react';
import { Text, Image, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import Input from '../components/input';
import Card from '../components/Card';
import ImageTag from '../components/ImageTag';
import Backgroundmage from '../components/BackgroundImage';
import LoginButton from '../components/LoginButton';
import colors from '../components/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default class NextLoginScreen extends Component {

  // constructor(props){
  //   //StatusBarIOS.setHidden(true);
  //   super(props);
  //   this.state = {
  //     cca2: 'US'
  //   };
  // }

  state = { cca2: 'US', countryName: 'india', dialCode: '91' }
  // updateUser = (value) => {
  //   console.log("select country",value)
  //   this.setState({ country: value })
  // }


  getCountry = (country) => {
    console.log("m country code========>", country)
    this.setState({ cca2: country.cca2, countryName: country.name, dialCode: country.callingCode })
  }
  handlePhoneNo = (text) => {
    this.setState({ phoneNo: text })
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <Backgroundmage source={require('../assets/LoginBackground.png')} />
        <View style={styles.screen}>

          <View style={styles.divlogo}>
            <ImageTag style={styles.mainlogo} resizeMode='contain' source={require('../assets/logoinfo.png')} />
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

            <Text style={{ color: colors.primary }}>
              {this.state.countryName}  ({this.state.dialCode})
            </Text>
            {/* {JSON.stringify(this.state.country, null, 2)} */}


            <Text style={styles.inputtitle}>
              <ImageTag style={styles.inputicon} resizeMode='cover' source={require('../assets/smartphone-call.png')} />{'  '}
              Phone Number
            </Text>
            <Input keyboardType="number-pad" style={styles.input} onChangeText={this.handlePhoneNo} />
          </Card>
          <View style={{ paddingTop: 40, paddingBottom: 30, alignItems: 'center' }}>
            <LoginButton onPress={()=>{this.props.navigation.navigate({routeName: 'PhoneVerifyScreen', 
            params: {phoneno: this.state.phoneNo}})}} title="Next" />
          </View>
          <View style={styles.details}>
            <Text style={styles.innerdetail}>By providing your phone number, you agree to receive service notifications for your mobile phone </Text>
            <Text style={{ color: 'grey', marginTop: '5%' }}>or Sign up with email</Text>
            <ImageTag style={styles.mailicon} resizeMode='cover' source={require('../assets/envelope.png')} />
            <Text>Already have an account? <Text style={{ color: colors.primary }}>LOG IN</Text> </Text>
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
    paddingBottom: 40,
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