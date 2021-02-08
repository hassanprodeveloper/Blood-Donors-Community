import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
// importing functions from action file
import {setUserInfo01} from '../../redux/userDataActions';
import Icon from 'react-native-vector-icons/Ionicons';

const OTPScreen = ({
  route: {
    params: {mobileNumber, userId},
  },
  navigation,
  user1,
}) => {
const userMobileNumber = mobileNumber
  const [confirmation, setConfirmation] = useState('');
  const [code, setCode] = useState('');
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [loaderVisibility, setloaderVisibility] = useState(false);
  console.log('otpScreen mobile number #26___________', code)
  // console.log('conformation uid ===>>>', confirmation);
  // console.log('loged in status ', isLogedIn);
  // functions section
  useEffect(() => {
    signInWithPhoneNumber();
  }, []);
  // requesting otp
  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(userMobileNumber);
      setConfirmation(confirmation);
    } catch (error) {
      navigation.replace('LoginScreen')
      console.log('conformation error ===>>>', error);
      // alert('error 1', error);
    }
  };
  // confirming otp from firebase
  const confirmCode = async () => {
    setloaderVisibility(true)
    try {
      console.log('response successful before ===>>>', code);
      await confirmation.confirm(code);
      console.log('response successful after===>>>', confirmation.confirm(code) );
      // setUserInfo01([userMobileNumber, userId]);
      navigation.replace('PersonalDetails', {userMobileNumber, userId});
    } catch (error) {
      console.log('response error  ===>>>', error);
      alert('Some Thing Went Wrong,');
      // setloaderVisibility(false)
    }
  };

  //

  // functions section end
  return (
    <View style={styles.appContainer}>
      <Animatable.View animation="fadeInUpBig" style={styles.loginCard}>
        <Animatable.Image
          animation="zoomIn"
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.loginCardTitle}>OTP Varification</Text>
        <Text style={styles.loginCardDis}>Confrim Your Mobile Number ...</Text>

        <View style={styles.InputFieldCont}>
          <Text style={styles.InputFieldLable}>Enter OTP :</Text>
          <Text
            style={{...styles.loginCardDis, fontSize: 12, alignSelf: 'center'}}>
            we have sent an OPT to {mobileNumber}
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            onChangeText={(text) => setCode(text)}
          />
        </View>

        <Button
          style={styles.loginButton}
          color="#c9302c"
          mode="contained"
          loading={loaderVisibility}
          // onPress={() => confirmCode()}
          onPress={() => navigation.navigate('PersonalDetails', {mobileNumber, userId})}

          >
          Next
        </Button>

        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 10}}
          onPress={() => navigation.replace('SignupScreen')}>
          <Text style={{...styles.loginCardDis}}>
            <Icon name="ios-arrow-back-outline" size={20} />
            Go back
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 10,
            color: '#161b22',
            marginTop: 10,
            textAlign: 'center',
          }}>
          By Creating Account you agreed to our Terms & conditions and Privacy
          Policy
        </Text>
      </Animatable.View>
    </View>
  );
};
// redux functions
const mapStateToProps = (state) => ({
  user1: state.userData.signInUser,
});
const mapDispatchToProps = (dispatch) => ({
  setUserInfo01: (data) => dispatch(setUserInfo01(data)),
});

// Styling starts down here
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
  InputFieldCont: {
    marginTop: 5,
    padding: 2,
  },
  InputFieldLable: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 15,
    backgroundColor: '#ededed',
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginCardDis: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  loginButton: {
    marginTop: 20,
  },

  indicatorText: {
    fontSize: 10,
    fontStyle: 'italic',
    alignSelf: 'flex-end',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OTPScreen);
