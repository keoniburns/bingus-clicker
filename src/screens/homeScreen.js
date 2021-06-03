
import React, {useState, useEffect} from 'react'; 
import { View, Text, StyleSheet, ImageBackground, Image, Button } from 'react-native'; 
import PlayButton from '../components/PlayButton';
import {Auth} from 'aws-amplify'; 
import {API , graphqlOperation} from 'aws-amplify';
import { listUsers } from '../graphql/queries';
import { NavigationEvents } from 'react-navigation';



const HomeScreen = ({navigation}) => {
 
    const [users, setUsers] =  useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        checkLogin()
    }, [])

    const checkLogin = () => {
        Auth.currentAuthenticatedUser().then(() => {
            setLoggedIn(true);
        }).catch(() => {
            setLoggedIn(false);
        })
    };

    useEffect(() => {
        getUsers(); 
        
    }, []);

    const getUsers = async () => { 
        try {
            const userData = await API.graphql(graphqlOperation(listUsers));
            const userList = userData.data.listUsers.items; 
            console.log('user list:' , userList);
            setUsers(userList);
        } 
        catch (error) {
            console.log('error getting users', error);
        }
      }

    const signOut = async () => {
        try{
            Auth.signOut();
            setLoggedIn(false); 
        }
        catch (error) { console.log('error signing out', error);}
    } 

    const signIn = async () => {
        try {
            navigator.navigate('Login');
            

        } catch (error) {console.log('error signing in', error);}
    }

    const signUp = async () => {

    }

    return(
       <View style = {styles.screenContainer}>

           { loggedIn ? 
                <Button 
                    title = "sign out"
                    onPress = {signOut}
                />
                    : 

                <Button 
                    title = "sign in"
                    
                
                />
           }
            <ImageBackground style = {styles.background} source = {require('../../assets/background.png')}>
           

                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleStyle}>
                        Welcome to Bingus Clicker!
                    </Text>
                </View>

                <View style = {styles.buttonContainer}>
                    <PlayButton 
                        imageSource = { require('../../assets/sketch-box.png')}
                    
                    />
                </View>

                <View style = {styles.testContainer}>
                    <Image 
                        style = {styles.imageStyle}
                        source = {require('../../assets/meme.png')}
                    />
                </View>
         
            </ImageBackground>
        </View>
    
    ); 
}; 

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        
    }, 
     background: {
        flex: 1, 
        width: '100%', 
        height: '100%',
        opacity: 1
     }, 
    titleContainer: {
        height: '30%', 
        justifyContent: 'center',
        textAlign: 'center'
    },
   
    buttonContainer: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    testContainer: {
        height: '20%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
     
    },
    imageStyle: {
        position:'relative',
        resizeMode: 'contain',
        height: 200, 
        width: 200
    }, 
    textBubble: {

        resizeMode: 'contain', 
        opacity: 2, 
        justifyContent: 'center',
        height: 100, 
        width: 100
    }, 
    titleStyle: {
        fontSize: 50,
        fontFamily:'Comic Sans MS, Comic Sans, cursive',

       
    }
}); 

export default HomeScreen; 