
import React from 'react'; 
import {StyleSheet, TextInput} from 'react-native';



const Input = props => {

    // conts =  onFocus => props {
    //     this.setState({
    //         backgroundColor: 'green'
    //     })
    //   };
    
    return(
       <TextInput    {...props} style={{...styles.input,...props.style}} />
    )
};

const styles = StyleSheet.create({
    input:{
        height: 40,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        //marginVertical: 10,
        marginBottom: 15,
    }
    
});  
   
export default Input;