import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'; 
import PacmanLoader from 'react-spinners/PacmanLoader';




const loadingScreen = ({navigation}) => {

    const [ loading, setLoading] = useState(true); 
    
    useEffect(() => {
        setLoading(true);
        setTimeout (() => {
            setLoading(false)
        },5000)
    },[])

    return(
        <View style = {styles.container}>
            {
                loading ? (

                    <PacmanLoader 
                        color={'#e0ffff'} 
                        loading ={loading} 
                        size={100} 
                    />
                )
                : 
                (
                    navigation.navigate('Play')
                )
            }       
        
        </View>
    ); 
}



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%', 
        height: '100%',
        backgroundColor: '#f5deb3'
        
    }
}); 



export default loadingScreen;
