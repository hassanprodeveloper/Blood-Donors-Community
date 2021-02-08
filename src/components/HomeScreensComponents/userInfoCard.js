import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import {Button} from 'react-native-paper';
import BloodGroupContainer from '../BloodGroupContainer';
const UserInfoCard = ({donorName, mobileNumber, adress, bloodGroup, id}) => {
  return (
    <>
        <View id={id} style={styles.userInfoCard} >
          {/* <View style={styles.bloodGroupCont}>
            <View style={styles.bloodGroupContTitleCont}>
              <Text style={{...styles.title, fontSize: 10}}>B-Group</Text>
            </View>
            <View
              style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{...styles.title, color: '#ffffff', fontSize: 25}}>
                {bloodGroup}
              </Text>
            </View>
          </View> */}
          <BloodGroupContainer bloodGroup={bloodGroup}/>
          <View style={styles.userInfoCardTitleCont}>
            <Text style={{...styles.title, fontSize: 19}}>{donorName}</Text>
            <View>
              <Text style={styles.userInfo}>
                Mobile Number: <Text>{mobileNumber}</Text>
              </Text>
              <Text style={styles.userInfo}>
                Adress: <Text>{adress}</Text>
              </Text>
            </View>
          </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  userInfoCard: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    // shadow css down here
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  userInfoCardTitleCont: {
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
    //  color: '#676767'
  },
  userInfo: {
    paddingLeft: 15,
    fontSize: 14,
    paddingTop: 3,
  },
});

export default UserInfoCard;
