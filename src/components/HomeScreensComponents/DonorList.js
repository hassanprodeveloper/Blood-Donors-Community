import React, {useState} from 'react';
import {connect} from 'react-redux';
import MyFlatList from './FlatList';
import {RadioButton, Button, Divider} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import {ScrollView} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/Ionicons';

const Donors_List = ({donorData, userData}) => {
  const donorsData = donorData;
  const [checkFilter, setcheckFilter] = useState('');
  // const userCity = userData.adress.city;
  return (
    <>
      {/*  */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* <Text style={styles.InputFieldLable}>
          FILTERS <Icon name="ios-filter" size={15} />
        </Text>
        <View style={{...styles.alignItemsInRows, justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.alignItemsInRows}
            onPress={() => setcheckFilter('AllDonors')}>
            <Text style={styles.RadioButtonLable}>All Donors :</Text>
            <RadioButton
              value="AllDonors"
              color="#c9302c"
              status={checkFilter === 'AllDonors' ? 'checked' : 'unchecked'}
              onPress={() => setcheckFilter('AllDonors')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.alignItemsInRows}
            onPress={() => setcheckFilter(userCity)}>
            <Text style={styles.RadioButtonLable}>{userCity}</Text>
            <RadioButton
              value="other"
              color="#c9302c"
              status={checkFilter === userCity ? 'checked' : 'unchecked'}
              onPress={() => setcheckFilter(userCity)}
            />
          </TouchableOpacity>
        </View> */}
      </View>
      {/*  */}
      <MyFlatList renderData={donorsData} />
    </>
  );
};
// redux
const mapStateToProps = (state) => ({
  donorData: state.donorDetails.DonorsList,
  userData: state.userData.signInUser,
});
//   const mapDispatchToProps = (dispatch) =>({
//   addUser: (data) => dispatch(updateUser1(data))
//   });
export default connect(mapStateToProps, null)(Donors_List);
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
// export default Donors_List
