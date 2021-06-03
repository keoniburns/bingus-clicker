import React  from 'react'; 
import { View, StyleSheet, Image, TouchableOpacity }  from 'react-native'; 


const Clicker = ({imageSource, onClick, onScore}) => {
     
    return(
        <View style = {styles.screenContainer}>
            <TouchableOpacity 
                onPress = {
                     () => { onClick(), onScore()} 
                }
                style = {styles.imagebackground}
            >
                <Image 
                    source = {imageSource} 
                    style = {styles.imageStyle}
                />
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    screenContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    imageStyle: {
        resizeMode: 'contain',
        width: 200, 
        height: 200,
        
    },

    imagebackground: {
        width: 200,
        height: 200, 
        borderRadius: 100, 
        borderWidth: 4, 
        borderColor: '#fff', 
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
    },

    

}); 

export default Clicker; 