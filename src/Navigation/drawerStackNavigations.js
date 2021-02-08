import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from './Screens';

const HomeStack = createStackNavigator();
// const DonorLists = createStackNavigator();
// const RequestBlood = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="SignupScreen" component={Screens.SignupScreen} />
      <HomeStack.Screen name="OTPScreen" component={Screens.OTPScreen} />
      <HomeStack.Screen name="LoginScreen" component={Screens.LoginScreen} />
      <HomeStack.Screen name="Home" component={Screens.Home} />
      <HomeStack.Screen
        name="PersonalDetails"
        component={Screens.PersonalDetails}
      />
      <HomeStack.Screen name="About" component={Screens.About} />
    </HomeStack.Navigator>
  );
};

export {HomeStackScreen};
