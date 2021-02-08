import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {db} from '../../config/firestoreConfig';
import * as Animatable from 'react-native-animatable';
import {Button} from 'react-native-paper';
import IntlPhoneInput from 'react-native-intl-phone-input';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
//
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
// importing functions from action file
import {setUserInfoInRedux} from '../../redux/action';
//
const LoginScreen = ({navigation, setUserInfo}) => {
  const [userNumber, setuserId] = useState('');
  const [userId, setuserNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loaderVisibility, setloaderVisibility] = useState(false);

  //Async Storage
  const storeDataInStorage = async (value) => {
    try {
      await AsyncStorage.setItem('isLogedInToken', value);
    } catch (error) {
      alert('error while saving data __', error);
    }
  };
  // console.log('Login screen #31__ call Back function value',value )
  // const getDataFromStorage = async (key) => {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     if (value !== null) {
  //       {
  //         console.log(
  //           'Login screen #31__ getting from async',
  //           JSON.parse(value),
  //         );
  //       }
  //     }
  //   } catch (e) {
  //     alert('error while getting data __', error);
  //   }
  // };

  const onChangeText = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    setuserNumber(`${dialCode}${phoneNumber}`);
    setuserId(unmaskedPhoneNumber);
  };
  // confrim password && navigate to home screen
  const confrimPassword = (userFirestorePassword) => {
    if (password === userFirestorePassword) {
      // setUserInfo(userDetails)
      storeDataInStorage('userIsLoginTrue');
      setloaderVisibility(false);
      navigation.replace('DrawerHome');
    } else {
      setloaderVisibility(false);
      alert('Something Went Wrong');
    }
  };
  // fetching user data from firestore
  const getFirestoreData = () => {
    if (userId && password) {
      setloaderVisibility(true);
      db.collection('users')
        .doc(userNumber)
        .get()
        .then((snapshots) => {
          const userFirestorePassword = snapshots._data.password;
          setUserInfo(snapshots._data);
          confrimPassword(userFirestorePassword);
        })
        .catch((error) => console.alert(error));
    } else {
      alert('Fill all required fields...');
    }
  };

  return (
    <View style={styles.appContainer}>
      <Animatable.View animation="fadeInUp" style={styles.loginCard}>
        <Animatable.Image
          animation="zoomIn"
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.loginCardTitle}>Welcome To BDC</Text>
        <Text style={styles.loginCardDis}>Login to your Account ...</Text>

        <IntlPhoneInput
          onChangeText={(text) => onChangeText(text)}
          defaultCountry="PK"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.loginButton}
          color="#c9302c"
          mode="contained"
          loading={loaderVisibility}
          onPress={() => getFirestoreData()}>
          Login
        </Button>

        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginTop: 10}}
          onPress={() => navigation.replace('SignupScreen')}>
          <Text style={{...styles.loginCardDis, fontSize: 13}}>
            Don't have an Account ? Create Account
          </Text>
        </TouchableOpacity>
        <Text></Text>
      </Animatable.View>
      {/* <OrientationLoadingOverlay
        visible={loaderVisibility}
        color="white"
        indicatorSize="large"
      /> */}
    </View>
  );
};
// redux functions
// const mapStateToProps = (state) =>({
//   user1: state.userData.signInUser,
//   user2: 'ali'
// });
const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (data) => dispatch(setUserInfoInRedux(data)),
});
// styles sheet
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#c9302c',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginCard: {
    backgroundColor: '#ffffff',
    // height: 350,
    borderRadius: 15,
    padding: 10,
    paddingTop: 45,
    width: '100%',
    position: 'relative',
    marginBottom: -10,
    paddingBottom: 15,
  },
  logo: {
    width: 90,
    height: 90,
    borderWidth: 7,
    borderColor: '#c9302c',
    borderRadius: 50,
    position: 'absolute',
    top: -45,
    alignSelf: 'center',
  },
  loginCardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'center',
  },
  textInput: {
    fontSize: 15,
    backgroundColor: '#ededed',
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  loginCardDis: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  loginButton: {
    marginTop: 20,
  },
});
export default connect(null, mapDispatchToProps)(LoginScreen);
