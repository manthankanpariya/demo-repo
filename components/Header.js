import React from 'react'; 
import {Text, View, StyleSheet} from 'react-native';
import color from '../constants/color';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
        
    )
};

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: 60,
        paddingTop: 10,
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    headerTitle: {
        color: '#fff',
        fontSize: 18,
    } 
});

export default Header;