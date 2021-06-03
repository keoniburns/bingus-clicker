import React from 'react'; 
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 

const Upgrades = ({first, second, third, onPress, onGrandma}) => {
    return(
        <View style = {styles.screenContain}>
            <TouchableOpacity
                onPress = {() => {onGrandma()}}
            >
                <View style ={styles.textContainer}>
                    <Text style = {styles.text}>{first}</Text>
                </View>
            </TouchableOpacity>
                
            <TouchableOpacity
                onPress = {onPress = () => {
                    console.log("you now have nana to help with this bingus")
                }}
            >    
                <View style ={styles.textContainer}>
                    <Text style = {styles.text}>{second}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress = {() => {
                    console.log("you now have nana to help with this bingus")
                }}
            >   
                <View style ={styles.textContainer}>
                    <Text style = {styles.text}>{third}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
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
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }



});


export default Upgrades; 