import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Switch,
  ScrollView,
  Text,
  Caption,
  Paragraph,
  Drawer,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BloodGroupContainer from './BloodGroupContainer';
// 
// 
// 
const DrawerContent = (props) => {
    //Async Storage  
    const storeDataInStorage = async (value) => {
      try {
        await AsyncStorage.setItem('isLogedInToken', value);
      } catch (error) {
        alert('error while saving data __', error);
      }
    };
    // 
  const userData = props.userData;
  console.log('drawer content props---#33-->' , userData)

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View>
            <Icon
              name="close-sharp"
              color="#c9302c"
              size={25}
              onPress={() => props.navigation.closeDrawer()}
              style={{alignSelf: 'flex-end', marginRight: 15}}
            />
          </View>
          <View style={styles.userInfSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              {/*  */}
              <BloodGroupContainer bloodGroup={userData.bloodGroup} />
{/*  */}
              <View style={{marginLeft: 15}}>
                <Title style={styles.title}>{userData.name}</Title>
                <View>
                  <Caption style={styles.caption}>
                    <Icon name="ios-call-outline" size={12} />
                    {userData.mobileNumber}
                  </Caption>
                  <Caption style={styles.caption}>
                    <Icon name="ios-location-outline" size={12} />
                    {/* {userData.adress.city} */}
                  </Caption>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('PersonalDetails')}>
                <View>
                  <Text style={{fontSize: 8, color: '#c9302c'}}>
                    Edit <Icon name="ios-pencil-outline" size={7} />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* <Drawer.Section style={styles.drawerSection}> */}
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="ios-search-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Search Donors"
              onPress={() => props.navigation.navigate('SearchDonorScreen')}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-add-outline" color={color} size={size} />
              )}
              label="New Campaign"
              onPress={() => props.navigation.navigate('AddCampaignScreen')}
            />
          </View>
          {/* </Drawer.Section> */}
          {/* <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preferences}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={inDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-outline" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            storeDataInStorage('userIsLoginFalse')
            props.navigation.replace('LoginScreen')
          }}
        />
      </Drawer.Section>
    </View>
  );
};

// redux functions
const mapStateToProps = (state) => ({
  userData: state.userData.signInUser,
});
// const mapDispatchToProps = (dispatch) =>({
// setUserInfo01: (data) => dispatch(setUserInfo01(data))
// });
export default connect(mapStateToProps, null)(DrawerContent);

// STYLE SHEET DWON HERE
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 3,
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
