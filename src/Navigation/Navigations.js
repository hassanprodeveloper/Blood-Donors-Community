import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from './Screens';
import {AppDrawer} from './Drawer';
const {Screen, Navigator} = createStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';

const Navigations = (props) => {
  const loginCondition = true
  // useEffect(() => {
  //   getDataFromStorage('isLogedInToken');
  // }, []);
  // const [loginCondition, setloginCondition] = useState('')

  // const getDataFromStorage = async (key) => {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     if (value !== null) {
  //       {
  //        return setloginCondition(JSON.parse(value));
          
  //       }
  //     }
  //   } catch (e) {
  //     console.log('navigation screen #28__ getting from async catch method error__==>', e)
  //     setloginCondition(false);
  //   }
  // };
  // console.log('navigation screen #30__ useState method result showing__==>', loginCondition)

  // if( loginCondition && loginCondition === true){
    return (    
      <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
              <Screen name="LoginScreen" component={Screens.LoginScreen} />
              <Screen name="SignupScreen" component={Screens.SignupScreen} />
              <Screen name="OTPScreen" component={Screens.OTPScreen} />
              <Screen
                name="PersonalDetails"
                component={Screens.PersonalDetails}
              />
              <Screen name="DrawerHome" component={AppDrawer} />
        </Navigator>
      </NavigationContainer>
    );
  // }else{
  //   return (    
  //     <NavigationContainer>
  //       <Navigator screenOptions={{headerShown: false}}>
  //             {/* <Screen name="DrawerHome" component={AppDrawer} />
  //             <Screen name="LoginScreen" component={Screens.LoginScreen} />
  //             <Screen name="SignupScreen" component={Screens.SignupScreen} />
  //             <Screen name="OTPScreen" component={Screens.OTPScreen} />
  //             <Screen
  //               name="PersonalDetails"
  //               component={Screens.PersonalDetails}
  //             /> */}
      
  //             <Screen name="LoginScreen" component={Screens.LoginScreen} />
  //             <Screen name="SignupScreen" component={Screens.SignupScreen} />
  //             <Screen name="OTPScreen" component={Screens.OTPScreen} />
  //             <Screen
  //               name="PersonalDetails"
  //               component={Screens.PersonalDetails}
  //             />
  //             <Screen name="DrawerHome" component={AppDrawer} />
  //       </Navigator>
  //     </NavigationContainer>
  //   );
  // }

};
// redux functions
const mapStateToProps = (state) =>({
  isLogedInToken: state.userData.isLoginToken,
});
// 
export default connect(mapStateToProps, null)(Navigations);
