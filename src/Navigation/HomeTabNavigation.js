import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {NavigationContainer} from '@react-navigation/native';
// import * as HomeScreens from '../components/HomeScreensComponents/AllHomeTabScreens'
import Donor_List from '../components/HomeScreensComponents/DonorList';
import Home from '../screens/HomeTab';
// import MyFlatList from '../components/HomeScreensComponents/FlatList'
// import Icon from 'react-native-vector-icons/Ionicons';
const HomeTab = createMaterialTopTabNavigator();

const HomeTabScreen = () => {
  return (
    // <NavigationContainer>
    <HomeTab.Navigator
      tabBarOptions={{
        activeTintColor: '#000000',
        labelStyle: {fontSize: 14},
        backgroundColor: '#c9302c',
        style: {    backgroundColor: '#f5f5f5',},
      }}>
      <HomeTab.Screen options={{ tabBarLabel: 'Home' }} name="TabHome"  component={Home} />
      <HomeTab.Screen options={{ tabBarLabel: 'Donor List' }} name="Donor_List" component={Donor_List} />
      {/* <HomeTab.Screen name="Settings" component={HomeScreens.Donor_list2} /> */}
    </HomeTab.Navigator>
    // </NavigationContainer>
  );
};

export default HomeTabScreen;
