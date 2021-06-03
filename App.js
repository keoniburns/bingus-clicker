
import React from 'react';
import HomeScreen from './src/screens/homeScreen'; 
import PlayScreen from './src/screens/PlayScreen';
import loadingScreen from './src/screens/loadingScreen'; 
import loginScreen from './src/screens/loginScreen'; 
import { NavigationContainer, useRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import awsconfig from './aws-exports'; 
import Amplify  from 'aws-amplify'; 


Amplify.configure({
  ...awsconfig, 
  Analytics: {
    disabled: true, 
  }, 
}); 


/*const navigator = createStackNavigator(
  {
    Home: HomeScreen, 
    Play: PlayScreen, 
    Load: loadingScreen, 
    Login: loginScreen, 

  },
  {
    HomeScreen : {
      defaultNavigationOptions: {headerShown: false}
    }
  }, 
  
  {
    initialRouteName: "Home", 
    defaultNavigationOptions: { 
    
      title: ""}
  }, 
  
  
);
*/ 

const Stack = createStackNavigator(); 

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>

        <Stack.Screen
            name = 'Home'
            component = {HomeScreen}
            options = {{headerShown: false}}
        />

      <Stack.Screen
            name = 'Load'
            component = {loadingScreen}
            options = {{title: ''}}
      />

      <Stack.Screen
            name = 'Login'
            component = {loginScreen}
            
      />

      <Stack.Screen
            name = 'Play'
            component = {PlayScreen}
            
      />



      </Stack.Navigator>

    </NavigationContainer>
  )
}


export default App;
