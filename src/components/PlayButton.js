import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'

 


const PlayButton = ({imageSource, onPress}) => {
    const navigation = useNavigation(); 
    return(
        <View>
            <TouchableOpacity style = {styles.buttonStyle}
                onPress = { 
                    onPress = () => navigation.navigate('Load')
                }
            
            >
                <Image
                    source = {imageSource}
                    style = {styles.imageStyle}
                />
                <View style = {styles.viewText}>
                    <Text style = {styles.textStyle}>
                        PLAY!
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );


};

const styles = StyleSheet.create({
    imageStyle: {
        width: 307,
        height: 230, 
        padding: 10, 
        margin: 20,
    },
    buttonStyle: {
        width: 160, 
        height: 120, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewText: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 50, 
        fontWeight: 'bold',
        fontFamily: 'Comic Sans MS, Comic Sans, cursive'

    }
}); 

export default PlayButton; 