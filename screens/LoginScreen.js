
import React, { Component } from 'react';
import { Text, Image, View, Button, StyleSheet } from 'react-native';

import MealsNavigation from '../navigation/MealNavigation';
import LoginButton from '../components/LoginButton';
import Backgroundmage from '../components/BackgroundImage';
import ImageTag from '../components/ImageTag';
import * as firebase from "firebase";

export default class LoginScreen extends Component{
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? { routeName: 'LoginWelcomeScreen' } : { routeName: 'LoginScreen1' })
        })
      }
render(){
    return (
        <View style={{ height: '100%' }}>
            <Backgroundmage source={require('../assets/LoginBackground.png')} />
            <View style={styles.screen}>
                <View style={styles.divlogo}>
                    <ImageTag style={styles.mainlogo} resizeMode='contain' source={require('../assets/logoinfo.png')} />
                </View>
                <LoginButton style={styles.btn} title="Login"
                    onPress={() => { this.props.navigation.navigate({ routeName: 'LoginScreen1' }) }} />
                <LoginButton style={styles.btn} title="Sign up"
                    onPress={() => { this.props.navigation.navigate({ routeName: 'CreateAccountScreen' }) }} />
                <LoginButton style={styles.btn} title="Date Picker Screen"
                    onPress={() => { this.props.navigation.navigate({ routeName: 'PickerScreen' }) }} />
                <LoginButton style={styles.btn} title="Image Picker Screen"
                    onPress={() => { this.props.navigation.navigate({ routeName: 'ImagePickerScreen' }) }} />
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    screen: {       
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        //backgroundColor: '#000'
        //height: '100%'
    },
    btn: {
        paddingTop: 10,
        //flex: 1,
        marginTop: 30,
        alignItems: 'center',

    },
    divlogo: {
        alignItems: 'center',
    },
});
