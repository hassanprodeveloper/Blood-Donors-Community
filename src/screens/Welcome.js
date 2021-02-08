import React,{useState} from 'react'
import {
  StyleSheet, 
  View, 
  Text, 
  Button,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
// importing functions from action file 
import {
  updateUser1,
} from '../redux/action'
// importing components 
import WelcomeHeading from '../components/WelcomeHeading'

const Welcome = (props) => {
  const [InputData, setInputData] = useState();

  return (
    <View style={styles.appCont}>
      <WelcomeHeading text1='React Native' text2=' Boiler Plate' />
    <View style={styles.appContainer}>
      <View>
        <WelcomeHeading text1='Welcome ' text2={props.user1} />
        <Text>{props.user2.name}</Text>
        <TextInput
          onChangeText={(val) => {setInputData(val)} }
         placeholder="What is your Name?"/>
        <Button onPress={() =>{ props.addUser(InputData); }} style={styles.button} title='Update Name' />
        <Text>Navegations Buttons are Down Here</Text>

        <Button style={styles.button} onPress={() => props.navigation.navigate('Home')} title='Go to Home' />
        <Button style={styles.button} onPress={() => props.navigation.navigate('About')} title='Go to About' />
      </View>
    </View>
    </View>
  );
};
  const mapStateToProps = (state) =>({
    user1: state.userData.signInUser,
    user2: 'ali'
  });
  const mapDispatchToProps = (dispatch) =>({
  addUser: (data) => dispatch(updateUser1(data))  
  });

  
  // STYLE_SHEET
  const styles = StyleSheet.create({
    appCont: {
    flex: 2,
    padding:13,

  },
    appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin:10
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);