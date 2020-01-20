
import React, { useState } from 'react'; 
import {Text, Image, View, Button, StyleSheet} from 'react-native';


const MealDetailsScreen = props => {
     
    return(
        <View style={styles.screen}>
            <Text>The Meal Details Screen!</Text>
            <Button title="Go to Category" onPress={() => props.navigation.popToTop()} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});  
   
export default MealDetailsScreen;