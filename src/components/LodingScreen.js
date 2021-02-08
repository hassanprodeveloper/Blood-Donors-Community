import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';


const LodingScreen = () => {
    useEffect(() => {
      getDataFromStorage('isLogedInToken');
    }, []);
    const getDataFromStorage = async (key) => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          {
            setlogiCondition(JSON.parse(value));
        console.log('navigation screen #28__ getting from async catch method error__==>', value)
            
          }
        }
      } catch (e) {
        console.log('navigation screen #28__ getting from async catch method error__==>', e)
        setlogiCondition(false);
      }
    };


    return (
    <View style={{backgroundColor: '#c9302c', flex: 1}}>
      <View style={styles.section1}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.homeTitleText}>Blood Donors Community</Text>
          <BarIndicator color="#ffffff" />
        </View>
      </View>
      <View style={styles.section2}>
        <Text style={styles.footerTitle}>
          <Text style={{fontSize: 18}}>©</Text> HA Developers ORG.
        </Text>
      </View>
    </View>
  );
};

// redux functions
// const mapStateToProps = (state) =>({
//   user1: state.userData.signInUser,
//   user2: 'ali'
// });
// const mapDispatchToProps = (dispatch) => ({
//     // setUserInfo: (data) => dispatch(setUserInfoInRedux(data)),
//   });

// export default connect(null, mapDispatchToProps)(LodingScreen);
export default LodingScreen;

// stylesheet
const styles = StyleSheet.create({
  section1: {
    flex: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  section2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  footerTitle: {
    color: '#ffffff',
    fontStyle: 'italic',
    fontSize: 12,
    marginRight: 20,
  },
  homeTitleText: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10,
    marginBottom: 30,
  },
});
