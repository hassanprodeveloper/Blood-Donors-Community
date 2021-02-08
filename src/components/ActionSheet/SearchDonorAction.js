import React, {createRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {db} from '../../config/firestoreConfig';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
//
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import CitiesDropdownPicker from '../CitiesDropdownPicker';
import BloodGroupPicker from '../BloodGroupPicker';
// import {ScrollView} from 'react-native-gesture-handler';
//
const SearchDonorAction = ({userData}) => {
  const [loaderVisibility, setloaderVisibility] = useState(false);
  const [recipientCity, setrecipientCity] = useState('');
  const [recipientBloodGroup, setrecipientBloodGroup] = useState('');
  // console.log ('Search Donor Action Component __#15__ =>', recipientCity)
  // console.log ('Search Donor Action Component __#16__ =>', recipientBloodGroup)

  const bloodRequest = {
    recipientName: userData.name,
    recipientNumber: userData.mobileNumber,
    recipientCity: recipientCity,
    recipientBloodGroup: recipientBloodGroup,
  };
  // console.log ('Blood Requset __#24__ =>', bloodRequest)

  // fetching user data from firestore
  const getFirestoreData = () => {
    // console.log('firestore data getting successful Good Work', recipientCity, "__ ",recipientBloodGroup )

    if (recipientCity && recipientBloodGroup) {
      setloaderVisibility(true);
      db.collection('cities')
        .doc(recipientCity)
        .collection('campaigns')
        .doc(recipientBloodGroup)
        .get()
        .then((snapshots) => {
          const data = snapshots._data;
          // setUserInfo(snapshots._data);
          confrim(data.allCampaigns);
        })
        .catch((error) => console.alert(error));
    } else {
      setloaderVisibility(false);
      alert('Fill all required fields...');
    }
  };
  //
  const confrim = (data) => {
    setloaderVisibility(false);
    console.log('firestore data getting successful Good Work', data)
    db.ref(data)
    .then((snapshots) => {
console.log('firestore data getting successful  Good Work __#64__ >  ', snapshots)
      // const data = snapshots._data;
      // setUserInfo(snapshots._data);
      // confrim(data.allCampaigns);
    })
    .catch((error) => console.alert(error));
  };
  //
  return (
    <KeyboardAvoidingScrollView>
      <ScrollView>
        <View style={styles.SearchDonorAction}>
          <Text style={styles.seacchActionTitle}>Select City :</Text>
          <CitiesDropdownPicker
            dropdownPlaceHolder="Select Blood Recipient City"
            setCity={setrecipientCity}
          />
          <Text style={styles.seacchActionTitle}>Select Blood Group :</Text>
          <BloodGroupPicker
            dropdownPlaceHolder="Select Required Blood Group"
            setBloodGroup={setrecipientBloodGroup}
          />

          <Button
            style={styles.button}
            color="#ffffff"
            loading= {loaderVisibility}
            onPress={() => getFirestoreData()}
            disabled={loaderVisibility}
          >
          {
            !loaderVisibility ?
            <Icon name="ios-search-sharp" color="#ffffff" size={16} />
          : null
          }
            Search Blood
          </Button>
        </View>
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
export default connect(mapStateToProps, null)(SearchDonorAction);

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
    backgroundColor: '#c9302c',
    width: '100%',
    position: 'absolute',
    bottom: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seacchActionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
