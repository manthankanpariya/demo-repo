
import React, { useState } from 'react'; 
import {Text, Image, View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard,
Alert} from 'react-native';

import Card from '../components/Card';
import Input from '../components/input';
import NumberContainer from '../components/NumberContainer';
import color from '../constants/color';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };

    const resetInpuHandler = () =>{
        setEnteredValue('');
        setConfirmed(false);    
    };  

    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const confirmInputHandler  = () =>{
        const choosenNumber = parseInt(enteredValue);
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text:'okay', style:'destrustive', onPress: resetInpuHandler}]
            ) 
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue(); 
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = (
        <Card style={styles.summeryContainer}>
            <Text style={{textAlign: 'center'}}>You Seleted</Text>
            <NumberContainer>
                {selectedNumber}
            </NumberContainer>
            <Button title="START GAME" onPress = {() => props.onStartGame(selectedNumber)} />
        </Card>
        );
        
    }
     
    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}} >
            <View style={styles.screen}>
                <Text style={styles.title}> Game  Start!</Text>
                <Card style={styles.inputcontainer}>
                    <Text>Select a number</Text>
                    <Input style={styles.input} 
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"  
                    maxLength={2}
                    onChangeText = {numberInputHandler}
                    value={enteredValue} />  
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInpuHandler} color={color.primary} />
                        </View> 
                        <View  style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={color.accant} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
                <View style={styles.imageContainer}>
                    <Image resizeMode="cover" style={styles.image} 
                    fadeDuration={1000}
                    //source={require('../assets/IMG-20160113-WA0004.jpg')} 
                    source={{uri: 'https://www.roughguides.com/wp-content/uploads/2016/02/matterhorn-shutterstock_1118486243.jpg'}} 
                     />
                </View>
                
            </View>
        </TouchableWithoutFeedback>
        
    )
};

const styles = StyleSheet.create({
    screen:{
        //flex: 1,
        padding: 10,
        alignItems: 'center',
        
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        //fontFamily: 'open-sons-bold',
    },
    inputcontainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input:{
        width: 50,
        textAlign: 'center',
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginTop: 50,
    },
    image:{
        height: '100%',
        width: '100%',   
    },
    
});  
   
export default StartGameScreen;