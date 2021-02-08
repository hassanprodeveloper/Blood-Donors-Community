/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RadioButton, Button, Divider} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeTabScreen from '../../Navigation/HomeTabNavigation'
// 
import MyActionSheet from '../../components/ActionSheet/ActionSheet';
import * as Actions from '../../components/ActionSheet/actionComponents';
// 
const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      {/* top section down here */}
      <View style={styles.topContainer}>
        {/* user menu drawer */}
        <View style={styles.drawerMenuCont}>
          <Icon
            onPress={() => navigation.openDrawer()}
            name="ios-menu-sharp"
            color="#ffffff"
            size={26}
          />
          {/* <MyActionSheet
          actionSheetHeading="Search Donors"
          actionComponent={<Actions.SearchDonorAction />}
          button={
            <Icon
            name="ios-search-sharp"
            color="#ffffff"
            size={26}
          />
          }
        /> */}

        </View>
        <View style={styles.homeTitleTextCont}>
          <Text style={styles.homeTitleText}>
            Blood Donors Community
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        {/* <Animatable.Image
          animation="zoomIn"
          style={styles.logo}
          source={require('../../assets/logo.png')}
        /> */}
        {/* <View style={{height: 50}} /> */}
        <HomeTabScreen />
        {/* <View style={{height: 50}} /> */}
      </View>
    </View>
  );
};
// redux functions
const mapStateToProps = (state) => ({
  donorData: state.donorDetails.DonorsList,
});
// const mapDispatchToProps = (dispatch) =>({
// setUserInfo01: (data) => dispatch(setUserInfo01(data))
// });
export default connect(mapStateToProps, null)(Home);

// Styling Starts from here
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c9302c',
  },
  topContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: '#c9302c',
    paddingBottom: 10,
  },
  bottomContainer: {
    flex: 12,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderTopRightRadius: 10,
    // paddingTop: 10,
    paddingBottom: 5,
    borderTopLeftRadius: 10,
  },
  drawerMenuCont: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 8,
    flex: 1,
    paddingRight: 30,
  },

  homeTitleTextCont: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 2,
  },
  homeTitleText: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 5,
  },
  logo: {
    width: 30,
    height: 30,
    borderColor: '#c9302c',
    borderRadius: 50,
  },
});
