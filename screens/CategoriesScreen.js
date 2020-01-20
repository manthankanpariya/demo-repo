
import React, { useState } from 'react'; 
import {Text, Image, View, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';



const CategoriesScreen = props => {

    const  renderGridItem = (itemData) => {
        return( 
        <TouchableOpacity onPress={() => {props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {categoryId: itemData.item.id}
            });}}>
            <View style={styles.gridItem}>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
        );
    }
      
    return(
        <View style={styles.screen}>
            <FlatList data={CATEGORIES} keyExtractor={(item,index) => item.id} renderItem={renderGridItem} numColumns={2} />
            <Button title="Go to meals!" onPress={()=>{props.navigation.push('CategoryMeals')}} />
        </View>
    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories',
    headerStyle:{
        backgroundColor:'#000',
    },
    headerTintColor: '#fff',
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem:{
        //flex:1,
        margin: 15,
        height: 100,
    }
});  
   
export default CategoriesScreen;