import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const BloodGroupContainer = ({bloodGroup}) => {
  return (
    <>
      <View style={styles.bloodGroupCont}>
        <View style={styles.bloodGroupContTitleCont}>
          <Text style={{...styles.title, fontSize: 10}}>B-Group</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{...styles.title, color: '#ffffff', fontSize: 25}}>
            {bloodGroup}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bloodGroupCont: {
    backgroundColor: '#676767',
    width: 60,
    borderRadius: 5,
    height: 70,
  },
  bloodGroupContTitleCont: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c9302c',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    //  color: '#676767'
  },
});

export default BloodGroupContainer;
