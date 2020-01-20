
import React from 'react'; 
import {Image, StyleSheet} from 'react-native';

const Backgroundimage = props => {
    
    return(
       <Image resizeMode='cover' {...props} style={{...styles.bgimage,...props.style}} />
    )
};

const styles = StyleSheet.create({
    bgimage:{
      position: "absolute",
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }
    
});  
   
export default Backgroundimage;