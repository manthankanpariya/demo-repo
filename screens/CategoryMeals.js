
import React, { useState } from 'react'; 
import {Text, Image, View, Button, StyleSheet} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoriesMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    //const selectedCategory  = CATEGORIES.find(cat => cat.id === catId);
    
    return(
        <View style={styles.screen}>
            <Text>The Categories Meals Screen!</Text>
            {/* <Text>{selectedCategory.title}</Text> */}
            <Button title="Go to meals Detail!" onPress={()=>{props.navigation.navigate({routeName: 'MealDetail'})}} />
            <Button title="Go Back" onPress={()=>{props.navigation.goBack()}} />
        </View>
    );
};

// CategoriesMealsScreen.navigationOptions = navigationData => {
//     const catId = navigationData.navigation.getParam('categoryId');
//     const selectedCategory  = CATEGORIES.find(cat => cat.id === catId);

//     return{
//         headerTitle: selectedCategory.title,
        
//     };
// };

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});  
   
export default CategoriesMealsScreen;