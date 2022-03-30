import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screen/splashscreen/SplashScreen';
import LoginScreen from '../screen/loginscreen/LoginScreen';
import HomeScreen from '../screen/homescreen/HomeScreen';
import IdeasListScreen from '../screen/ideasList/IdeasListScreen';
import Category from '../screen/category/Category';
import Signup from '../screen/signup/Signup';
import SignUpVerify from '../screen/signup/SignUpVerify';
import IdeaDetails from '../screen/idea/IdeaDetails';
import ExpertDetailsScreen from '../screen/expertscreen/ExpertDetailsScreen';
import ExpertDirectoryScreen from '../screen/expertscreen/ExpertDirectoryScreen';
import ChallengesListScreen from '../screen/challengesList/ChallengesListScreen';
import ChallengeDetail from '../screen/challengedetails/ChallengeDetail';

const Stack = createStackNavigator();

export default function index() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName={"Category"}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="IdeasListScreen" component={IdeasListScreen} />
                <Stack.Screen name="IdeaDetails" component={IdeaDetails} />

                <Stack.Screen name="Category" component={Category}  />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="SignUpVerify" component={SignUpVerify} />

                <Stack.Screen name="ExpertDetailsScreen" component={ExpertDetailsScreen} />
                <Stack.Screen name="ExpertDirectoryScreen" component={ExpertDirectoryScreen} />

                <Stack.Screen name="ChallengesListScreen" component={ChallengesListScreen} />
                <Stack.Screen name="ChallengeDetail" component={ChallengeDetail} />
            
            </Stack.Navigator>
        </NavigationContainer>
    );

}