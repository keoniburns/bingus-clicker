import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'; 


const pausePlay = ({onPause, onPlay, pause, play, }) => {

    let {screenContain, text, textContainer} = styles;

    return (
       <View style = {screenContain}>
           <TouchableOpacity
                onPress = {() => {onPause()}}
           >

               <View style = {textContainer}>

                   <Text style = {text}>
                       {pause}
                   </Text>

               </View>

           </TouchableOpacity>

           <TouchableOpacity
                onPress = {
                    () => {onPlay()}
                }
           >
               
               <View style = {textContainer}>

                   <Text style = {text}>
                       {play}
                   </Text>

               </View>

           </TouchableOpacity>
        </View>
    ); 
};

const styles = StyleSheet.create({

     textContainer: {
        backgroundColor: `#F0FFF0`,
        borderRadius: 10,
        padding: 10,
    }, 

    text: {
        fontSize: 15, 
        color: "#778899",
        fontWeight: "bold",
        alignSelf: "center", 
    }, 

    screenContain: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

});

export default pausePlay; 