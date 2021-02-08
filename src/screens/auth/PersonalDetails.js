import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {RadioButton, Button, Divider} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
//
import CitiesDropdownPicker from '../../components/CitiesDropdownPicker';
import BloodGroupPicker from '../../components/BloodGroupPicker';
import PersonalDetailsStatus from '../../components/PersonalDetailsStatusIndicator';
//
//
//
const PersonalDetailsScreen = ({
  route: {
    params: {mobileNumber, userId},
  },
  navigation,
}) => {
  // const [mobileNumber, setmob] = useState(8765);
  const [fullName, setfullName] = useState('');
  // const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [passwordcondition, setpasswordcondition] = useState(false);
  const [gender, setgender] = useState('');
  const [adressStreet, setadressStreet] = useState('');
  const [adressCity, setadressCity] = useState('');
  const adress = {
    city: adressCity,
    street: adressStreet,
  };
  const [bloodGroup, setbloodGroup] = useState('');
  const [loaderVisibility, setloaderVisibility] = useState(false);

  const userPersonalDetails = {
    name: fullName,
    mobileNumber: mobileNumber,
    bloodGroup: bloodGroup,
    adress: {
      city: adressCity,
      street: adressStreet,
    },
    gender: gender,
    password: password,
    // uid:
  };

  const nextFunction = () => {
    // if (fullName && passwordcondition === true && adressCity && gender) {
      setloaderVisibility(true);
      navigation.replace('DrawerHome');
      // console.log('#39__ hello condition is working  personal details ');
    // } else {
      // alert('Fill all Required Fields...');
    // }
  };

  return (
    <View style={styles.appContainer}>
      <Animatable.View animation="fadeInUpBig" style={styles.loginCard}>
        <Animatable.Image
          animation="zoomIn"
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.loginCardTitle}>Sign Up To BDC</Text>
        <Text style={{...styles.loginCardDis, fontSize: 18}}>
          Personal Details...
        </Text>
        <ScrollView>
          {/* ----------------- Full Name ------------------- */}
          <View style={styles.InputFieldCont}>
            {/* <Text style={styles.InputFieldLable}>Full Name :</Text> */}
            <PersonalDetailsStatus title="Name" condition={fullName} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Full Name"
              value={fullName}
              onChangeText={(text) => setfullName(text)}
            />
          </View>
          <Divider />
          {/* --------------/// Full Name ///---------------- */}
          {/* ----------------- Mobile Number field ------------------- */}
          <View style={styles.InputFieldCont}>
            {/* <Text style={styles.InputFieldLable}>Mobile Number :</Text> */}
            <PersonalDetailsStatus
              title="Mobile Number"
              condition={mobileNumber}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Number"
              value={mobileNumber}
              editable={false}
            />
          </View>
          <Divider />
          {/* --------------/// Mobile Number field ///---------------- */}
          {/* ----------------- Adress field ------------------- */}
          <View style={styles.InputFieldCont}>
            {/* <View style={{flexDirection: 'row', alignItems: 'center'}}> */}
            {/* <Text style={styles.InputFieldLable}>Adress :</Text> */}
            <PersonalDetailsStatus title="Address" condition={adressCity} />

            <Text
              style={{
                paddingHorizontal: 5,
                marginHorizontal: 5,
                fontStyle: 'italic',
                marginTop: 5,
              }}>
              {adressStreet} {adressCity}
            </Text>
            {/* </View> */}
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

          {/* ----------------- Gender field ------------------- */}
          <View style={styles.InputFieldCont}>
            {/* <Text style={styles.InputFieldLable}>Gender :</Text> */}
            <PersonalDetailsStatus title="Gender" condition={gender} />

            <View
              style={{...styles.alignItemsInRows, justifyContent: 'center'}}>
              <TouchableOpacity
                style={styles.alignItemsInRows}
                onPress={() => setgender('male')}>
                <Text style={styles.RadioButtonLable}>Male :</Text>
                <RadioButton
                  value="male"
                  color="#c9302c"
                  status={gender === 'male' ? 'checked' : 'unchecked'}
                  onPress={() => setgender('male')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.alignItemsInRows}
                onPress={() => setgender('female')}>
                <Text style={styles.RadioButtonLable}>Female :</Text>
                <RadioButton
                  value="female"
                  color="#c9302c"
                  status={gender === 'female' ? 'checked' : 'unchecked'}
                  onPress={() => setgender('female')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.alignItemsInRows}
                onPress={() => setgender('other')}>
                <Text style={styles.RadioButtonLable}>Other :</Text>
                <RadioButton
                  value="other"
                  color="#c9302c"
                  status={gender === 'other' ? 'checked' : 'unchecked'}
                  onPress={() => setgender('other')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Divider />
          {/* --------------/// Gender field ///---------------- */}
          <View style={styles.InputFieldCont}>
            <PersonalDetailsStatus title="Blood Group" condition={bloodGroup} />
            <BloodGroupPicker
              dropdownPlaceHolder="Select Blood Group"
              setBloodGroup={setbloodGroup}
            />
          </View>
          <Divider />
          {/* set password */}
          <View style={styles.InputFieldCont}>
            {/* <Text style={styles.InputFieldLable}>Password:</Text> */}
            <PersonalDetailsStatus title="Password" condition={password} />

            <TextInput
              style={styles.textInput}
              placeholder="Create Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Divider />
          {/* confrim Password */}
          <View style={styles.InputFieldCont}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.InputFieldLable}>Confrim Password:</Text>
              {password !== '' &&
              confPassword !== '' &&
              password === confPassword ? (
                <Animatable.Text
                  animation="bounceIn"
                  style={{
                    ...styles.indicatorText,
                    color: 'green',
                    marginHorizontal: 10,
                  }}>
                  <Icon name="ios-checkmark-circle" size={20} />
                </Animatable.Text>
              ) : (
                <Animatable.Text
                  animation="bounceIn"
                  style={{
                    ...styles.indicatorText,
                    color: 'red',
                    marginHorizontal: 10,
                  }}>
                  <Text>Password not matching...</Text>
                </Animatable.Text>
              )}
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Confrim Password"
              value={confPassword}
              secureTextEntry={true}
              onChangeText={(text) => setConfPassword(text)}
            />
          </View>

          <Button
            style={styles.loginButton}
            color="#c9302c"
            mode="contained"
            loading={loaderVisibility}
            onPress={() => nextFunction()}>
            Next
          </Button>

          <Text
            style={{
              fontSize: 10,
              color: '#161b22',
              marginTop: 10,
              textAlign: 'center',
            }}>
            By pressing the Next button you agreed to Term & conditions and
            Privacy Policy of BDC
          </Text>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#c9302c',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginCard: {
    backgroundColor: '#ffffff',
    height: 600,
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
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginCardDis: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  loginButton: {
    marginTop: 20,
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
export default PersonalDetailsScreen;
