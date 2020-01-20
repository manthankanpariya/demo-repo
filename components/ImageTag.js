
import React from 'react'; 
import {Image, StyleSheet} from 'react-native';

const ImageTag = props => {
    
    return(
       <Image {...props} style={{...styles.image,...props.style}} />
    )
};

const styles = StyleSheet.create({
    image:{
        
    }
    
});  
   
export default ImageTag;