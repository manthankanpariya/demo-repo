
import React, { useState } from 'react'; 
import {Text, Image, View, StyleSheet} from 'react-native';


const FavoriteScreen = props => {
     
    return(
        <View style={styles.screen}>
            <Text>The Favorite Screen!</Text>
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
   
export default FavoriteScreen;