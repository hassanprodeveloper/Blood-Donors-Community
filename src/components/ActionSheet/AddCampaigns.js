import React, {createRef, useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import {db} from '../../config/firestoreConfig';
import {connect} from 'react-redux';
// import Icon from 'react-native-vector-icons/Ionicons';
//
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import CitiesDropdownPicker from '../CitiesDropdownPicker';
import BloodGroupPicker from '../BloodGroupPicker';
import {ScrollView} from 'react-native-gesture-handler';
//
const AddCampaignsScreen = ({userData}) => {
  const [loaderVisibility, setloaderVisibility] = useState(false);
  const [fullName, setfullName] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');
  const [adressStreet, setadressStreet] = useState('');
  const [adressCity, setadressCity] = useState('');
  const adress = {
    city: adressCity,
    street: adressStreet,
  };
  const [bloodGroup, setbloodGroup] = useState('');

    const campaignDetails = {
      name: fullName,
      mobileNumber: mobileNumber,
      bloodGroup: bloodGroup,
      adress: {
        city: adressCity,
        street: adressStreet,
      },
    };

    const nextFunction = () => {
      if (fullName && mobileNumber && adressCity && bloodGroup) {
        console.log('add campaigns # 37 ___', campaignDetails)
        setloaderVisibility(true);
        // navigation.replace('Home');
        setloaderVisibility(false);
    } else {
          console.log('add campaigns # 41 ___', campaignDetails)
        alert('Fill all Required Fields...');
      }
    };
  return (
    <KeyboardAvoidingScrollView>
      <ScrollView>
        {/* ----------------- Full Name ------------------- */}
        <View style={styles.InputFieldCont}>
          <Text style={styles.InputFieldLable}>Campaigner Name :</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Campaigner Name"
            value={fullName}
            onChangeText={(text) => setfullName(text)}
          />
        </View>
        <Divider />
        {/* --------------/// Full Name ///---------------- */}
        {/* ----------------- Mobile Number field ------------------- */}
        <View style={styles.InputFieldCont}>
          <Text style={styles.InputFieldLable}>Mobile Number :</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Number"
            value={mobileNumber}
            onChangeText={(text) => setmobileNumber(text)}
          />
        </View>
        <Divider />
        {/* --------------/// Mobile Number field ///---------------- */}
        {/* ----------------- Adress field ------------------- */}
        <View style={styles.InputFieldCont}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.InputFieldLable}>Adress :</Text>

            <Text
              style={{
                paddingHorizontal: 5,
                marginHorizontal: 5,
                fontStyle: 'italic',
                marginTop: 5,
              }}>
              {adressStreet} {adressCity}
            </Text>
          </View>
          <View style={styles.alignItemsInRows}>
            <TextInput
              style={{...styles.textInput, width: 185}}
              placeholder="Enter Your Street "
              value={adressStreet}
              onChangeText={(text) => setadressStreet(text)}
            />
            <View style={{width: 150}}>
              <CitiesDropdownPicker
                setCity={setadressCity}
                dropdownPlaceHolder="Select City"
              />
            </View>
          </View>
        </View>
        <Divider />
        {/* --------------/// Adress field ///---------------- */}

        <View style={styles.InputFieldCont}>
          <Text style={styles.InputFieldLable}>Donate Blood :</Text>
          <BloodGroupPicker
            dropdownPlaceHolder="Select Blood Group"
            setBloodGroup={setbloodGroup}
          />
        </View>
        <Divider />
        <View style={{height: 120}} />
        <Button
          style={styles.button}
          color="#c9302c"
          mode="contained"
          loading={loaderVisibility}
          disabled={loaderVisibility}
          onPress={() => nextFunction()}>
          Next
        </Button>
      </ScrollView>
    </KeyboardAvoidingScrollView>
  );
};
// redux
const mapStateToProps = (state) => ({
  userData: state.userData.signInUser,
});
//   const mapDispatchToProps = (dispatch) =>({
//   addUser: (data) => dispatch(updateUser1(data))
//   });
export default connect(mapStateToProps, null)(AddCampaignsScreen);

// // // styling
const styles = StyleSheet.create({
  SearchDonorAction: {
    height: 350,
    padding: 10,
    paddingBottom: 20,
    // backgroundColor: '#323739'
    // backgroundColor: '#c9302c'
  },
  button: {
    // backgroundColor: '#c9302c',
    width: '95%',
    // position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -100,
  },
  seacchActionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  InputFieldCont: {
    marginTop: 5,
    padding: 3,
  },
  InputFieldLable: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textInput: {
    fontSize: 15,
    backgroundColor: '#ededed',
    height: 40,
    color: '#000000',
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginCardDis: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  loginButton: {
    marginTop: 20,
    zIndex: -500,
  },
  alignItemsInRows: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  RadioButtonLable: {
    fontSize: 15,
  },

  indicatorText: {
    fontSize: 10,
    fontStyle: 'italic',
    alignSelf: 'flex-end',
  },
});
