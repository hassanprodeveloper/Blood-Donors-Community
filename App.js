/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Navigations from "./src/Navigation/Navigations";
import LodingScreen from './src/components/LodingScreen'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#c9302c" barStyle="light-content" />
      {/* <LodingScreen /> */}
      <Navigations />
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
