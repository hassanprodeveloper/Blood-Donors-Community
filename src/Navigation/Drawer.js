import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContent from '../components/DrawerContent';
import * as Screens from './Screens';

// importing stacks here
// import {HomeStackScreen} from './drawerStackNavigations';
//
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Screens.Home} />
        <Drawer.Screen name="About" component={Screens.About} />
        <Drawer.Screen name="SearchDonorScreen" component={Screens.SearchDonorAction} />
        <Drawer.Screen name="AddCampaignScreen" component={Screens.AddCampaigns} />
      </Drawer.Navigator>
    </>
  );
};

export { AppDrawer};
