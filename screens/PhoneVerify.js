
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
  
  state = { cca2: 'US', countryName: 'india', dialCode: '91' }
  getCountry = (country) => {
    this.setState({ cca2: country.cca2, countryName: country.name, dialCode: country.callingCode })
  }

  render() {
    const getPhoneNo = this.props.navigation.getParam('phoneno');
    return (
      <View style={{ height: '100%' }}>
        <Backgroundmage source={require('../assets/LoginBackground.png')} />
        <View style={styles.screen}>

          <View style={styles.divlogo}>
            <ImageTag style={styles.mainlogo} resizeMode='contain' source={require('../assets/logoinfo.png')} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 20 }}>
    <Text style={{ fontSize: 20, fontWeight: '600' }}>Verify Phone Number</Text>
    <Text style={{color: '#D8D8D8'}}>We just sent a code to <Text style={{color:colors.primary}}>{getPhoneNo}</Text></Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.inputtitle}>
              Enter code
            </Text>
            <Input style={styles.input} />
          </View>
          <View>
            <Text style={styles.btmtext}>
            Choosing next means that you agree to the <Text style={{color:colors.primary, textDecorationLine:"underline"}}>privacy statement</Text> 
            and <Text style={{color:colors.primary, textDecorationLine:"underline"}}>terms of service</Text>
            </Text>
          </View>
          <View style={styles.nextbtn}>
            <LoginButton onPress={()=>{this.props.navigation.navigate({routeName: 'RegisterSuccessScreen'})}} title="Next" />
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
  inputtitle: {
    color: '#D8D8D8',
    marginTop: 10,
  },
  btmtext: {
    color: '#D8D8D8',
    justifyContent:'center',
    textAlign: 'center'
  },
  nextbtn:{
    paddingTop: 40, 
    paddingBottom: 30, 
    alignItems: 'center', 
    marginTop: 80,
    flexDirection: 'column',
    alignItems: 'center',
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