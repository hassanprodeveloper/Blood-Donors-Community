import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

const PersonalDetailsStatus = ({title, condition}) => {
  return (
    <>
      <View style={styles.InputFieldCont}>
        <Text style={styles.InputFieldLable}>{title}:</Text>
        {condition === '' ? (
          <Animatable.Text
            animation="bounceIn"
            style={{
              ...styles.indicatorText,
              color: 'red',
              
            }}>
            *required
          </Animatable.Text>
        ) :  (
          <Animatable.Text
            animation="bounceIn"
            style={{
              ...styles.indicatorText,
              color: 'green',
              marginHorizontal: 10,
            }}>
            <Icon name="ios-checkmark-circle" size={20} />
          </Animatable.Text>
        )}
      </View>
    </>
  );
};
export default PersonalDetailsStatus;

// styling
const styles = StyleSheet.create({

    InputFieldCont: {
      marginTop: 5,
      padding: 2,
      flexDirection: 'row', justifyContent: 'space-between'
    },
    InputFieldLable: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  
    indicatorText: {
      fontSize: 10,
      fontStyle: 'italic',
      marginHorizontal: 10,
    },
  });