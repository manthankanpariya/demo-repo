
import React, { useState } from 'react'; 
import {Text, Image, View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard,
Alert} from 'react-native';
import * as firebase from "firebase";

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameSreen from './screens/GameScreen';
import GameOverSreen from './screens/GameOverScreen';

import HomeScreen from "./screens/HomeScreen";
 
import MealsNavigation from './navigation/MealNavigation';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA6IIaI26-zbrs7oWtLmeRg_zjkjohlgKA",
  authDomain: "my-repo-997ea.firebaseapp.com",
  databaseURL: "https://my-repo-997ea.firebaseio.com",
  projectId: "my-repo-997ea",
  storageBucket: "my-repo-997ea.appspot.com",
  messagingSenderId: "705403226730",
  appId: "1:705403226730:web:43f533ecabd7740adc9813",
  measurementId: "G-5YKJV3YYES"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  
  
    const [userNumber, setUserNumber] = useState();
    const [guessRound, setGuessRound] = useState();
    
    const startGameHandler = selectedNumber =>{
      setUserNumber(selectedNumber);
    };

    const gameOverHandler = numberOfRounds =>{
      setGuessRound(numberOfRounds);
    };

    let content = <StartGameScreen onStartGame ={startGameHandler} /> 

    if(userNumber){
      content = <GameSreen userChoice = {userNumber}/>
    }

     
    // return(
    //    <View style = {styles.screen}>
    //      <Header title="Guess a Number"/>
    //      {content}
    //    </View> 
       
    // )
    return <MealsNavigation/>;
   
};

const styles = StyleSheet.create({
    screen:{
        //flex: 1,
        padding: 10,
        alignItems: 'center',
        
    },
    
});  
   