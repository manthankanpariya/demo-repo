
import React from 'react'; 
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

import colors from '../components/colors';

const LoginButton = props => {

    
    return(
        <TouchableOpacity {...props}  style={{...styles.btnlayout,...props.style}}>
            <View>
                <Text style={{color:'#fff',fontSize:18}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btnlayout:{
        alignItems: 'center',
        justifyContent: 'center',
        //flex: 1,
        backgroundColor: colors.primary,
        color: '#fff',
        padding: 12,
        width: 160,
        borderRadius: 50,
      },
    
});  
   
export default LoginButton;