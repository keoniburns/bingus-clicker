import React, {useState, useEffect} from 'react'; 
import { StyleSheet, View, Text,} from 'react-native'; 
import Clicker from '../components/Clicker';
import Upgrades from '../components/Upgrades'; 
import {API , graphqlOperation} from 'aws-amplify';
import { listUsers } from '../graphql/queries'; 
 

const PlayScreen = () => { 

    let {screenContainer, top, headerContainer,textContainer, text, middle, bottom, leaderBoard} = styles;

    const [clicks, setClicks] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
   

    useEffect(() => {
        if (isRunning){

            const id = window.setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);

            return () => window.clearInterval(id); 
        }
    },[isRunning])
    
    var cps = (clicks / (Math.floor(timer) % 60)); 
    cps = cps.toFixed(2); 

    
    let seconds = ("0" + (Math.floor(timer) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timer / 60) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timer / 3600)).slice(-2);

    const [users, setUsers] =  useState([]);

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

    

    return(
        <View style = {screenContainer}>
            <View style = {headerContainer}>

                <View style = {textContainer}>

                        <Text style = {text}>
                            time elapsed:
                            {hours}:{minutes}:{seconds}
                        </Text>

                </View>

                <View style = {textContainer}>

                    <Text style = {text}>
                        score: {score}
                    </Text>

                </View>

                

            </View>

             <View style = {top}>

                <Clicker
                    onClick = {() => setClicks(clicks + 1)}
                    onScore = {() => setScore(score + 1)}
                    imageSource = { require ('../../assets/bingus.png')}
                />

                <View style = {textContainer}>
                    <Text style = {text}>
                        {clicks} clicks!!!!
                    </Text>
                </View>
                <View style = {textContainer}>

                    <Text style = {text}>
                        clicks per second: {cps}
                    </Text>

                </View>
                
            </View>

            <View style = {middle}>
                <Upgrades 
                    first= "grandma" 
                    onGrandma = {(onClick) => {setClicks(clicks => clicks + 1)}}
                    second = "sweatshop"
                    third = "bingus replicator"
                />
                
               
            </View>

            <View style = {bottom}>
                <Text>
                    Leaderboard
                </Text>

            </View>

            <View style = {leaderBoard}>
                <View style = {textContainer}>

                    <userList>
                        { users.map(user => { 
                            return(
                                <Text style = {text}>
                                    {user.name}: {user.score} clicks
                                </Text>
                            ); 
                        })}
                    </userList>

                </View>
            </View>
                
                    
            

        </View>
    );
};


const styles = StyleSheet.create({
    screenContainer: {
        flex : 1,
    },
    top : {
        height: '50%',
        justifyContent: "center", 
        alignItems: 'center',
        backgroundColor : "#e0ffff"
    },
    headerContainer: {
        height: '10%', 
        alignItems: 'center',
        backgroundColor : "#e0ffff",
        flexDirection: "row",
    },
    textContainer: {
        backgroundColor: `#f5deb3`,
        borderRadius: 10,
        padding: 10,
        margin: 20
    },
    text: {
        fontSize: 15, 
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center", 

    },
    middle: {
        height: "10%",
        backgroundColor: "#ffdab9",
        justifyContent: "center"
    
    },
    bottom: {
        height: '5%',
        backgroundColor: "#ffefd5",
        alignItems: 'center', 
        justifyContent:'center'
        
    }, 

    leaderBoard: {
        height: '25%',
        backgroundColor: "#ffefd5",
        flexDirection: "column", 
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        alignContent: 'stretch'
    
    }

 
   
}); 

export default PlayScreen; 
