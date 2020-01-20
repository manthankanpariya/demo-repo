
import React, { useState } from 'react'; 
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

import color from '../constants/color';

const NumberContainer = props => {

    return(
        <View>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: color.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number:{
        color: color.accent,
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        borderColor: color.accent,
        borderWidth: 1,
        margin: 10,
        padding: 5,
        borderRadius: 10,
    },
    
});  
   
export default NumberContainer;