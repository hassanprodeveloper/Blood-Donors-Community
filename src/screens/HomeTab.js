import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {IconButton, Colors, Badge, Button} from 'react-native-paper';
import MyActionSheet from '../components/ActionSheet/ActionSheet';
import {db} from '../config/firestoreConfig';
import {connect} from 'react-redux';
import MyFlatList from '../components/HomeScreensComponents/FlatList';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Actions from '../components/ActionSheet/actionComponents';
//
const HomeTab = ({navigation, userCampaigns, userData}) => {
  // console.log('home tab # 12__>', userData.campaigns.campaignsList[0]._documentPath._parts[0]);
  // const docRefPath = userData.campaigns.campaignsList[0]._documentPath.relativeName._parts
  const refPath =() =>{
  console.log('home tab # 15_>', docRefPath[0]);
      
    // db
    //   .collection(docRefPath[0])
    //   .doc(docRefPath[1])
    //   .collection(docRefPath[2])
    //   .doc(docRefPath[3])
    //   .collection(docRefPath[4])
    //   .doc(docRefPath[5])
    //   .get()
    //   .then((snapshots) => {
    //     const data = snapshots._data;
    //     console.alert('home tab #20__ >>> ', data)
    //   })
    //   .catch((error) => console.alert('home tab #22__ >>> ',error));

  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.HomeTabMain}>
        <View style={styles.campaign}>
          <Text style={styles.campaignTitle}>
            Your Campaigns
            <View style={styles.campaignsbadge}>
              <Text style={{fontSize: 15, color: '#fff'}}>
                {userData.totalCampaigns}
              </Text>
            </View>
          </Text>
          <MyActionSheet
            showExtendIcon={true}
            extendScreen={() => navigation.navigate('AddCampaignScreen')}
            myactionSheetRef="addCampaignsActionSheet"
            actionSheetHeading="Add New Campaign"
            actionComponent={<Actions.AddCampaignsScreen />}
            button={
              <View style={styles.searchButton02}>
                <Icon
                  name="ios-add-outline"
                  color="#c9302c"
                  size={30}
                  // onPress={() => alert('You are adding Campaigns')}
                  // style={{alignSelf: 'flex-end', marginRight: 15}}
                />
              </View>
            }
          />
        </View>

        <MyFlatList renderData={userCampaigns} />

        {/* <Button
          style={styles.button}
          color="#ffffff"
          // loading= 'true'
          onPress={() => navigation.navigate('LoginScreen')}>
          Login screen
        </Button>
        <Button
          style={styles.button}
          color="#ffffff"
          // loading= 'true'
          onPress={() => refPath()}>
          get data from referance
        </Button> */}
      </View>
      <View style={styles.section2}>
        <MyActionSheet
          myactionSheetRef="searchDonorActionSheet"
          showExtendIcon={true}
          extendScreen={() => navigation.navigate('SearchDonorScreen')}
          actionSheetHeading="Search Blood Donors"
          actionComponent={<Actions.SearchDonorAction />}
          button={
            <View style={styles.searchButton01}>
              <Icon name="ios-search-sharp" color="#ffffff" size={26} />
              {/* <Text style={styles.searchButtonTitle}>Search Donor</Text> */}
            </View>
          }
        />
      </View>
    </View>
  );
};
// redux
const mapStateToProps = (state) => ({
  userCampaigns: state.userData.usercampaign,
  userData: state.userData.signInUser,
});
//   const mapDispatchToProps = (dispatch) =>({
//   addUser: (data) => dispatch(updateUser1(data))
//   });
// export default HomeTab;
export default connect(mapStateToProps, null)(HomeTab);
// styling
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  HomeTabMain: {
    flex: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  campaignsbadge: {
    backgroundColor: '#c9302c',
    minWidth: 20,
    minHeight: 20,
    padding: 4,
    margin:5,
    borderRadius: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  campaign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingTop: 10,
  },
  campaignTitle: {
    color: '#c9302c',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 25,
    // marginHorizontal: 10,
    // marginVertical: 8,
    // marginTop: 10,
  },
  button: {
    backgroundColor: '#c9302c',
    color: '#ffffff',
    margin: 10,
    borderRadius: 20,
  },
  section2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  footerTitle: {
    // color: '#ffffff',
    color: '#000000',
    fontStyle: 'italic',
    fontSize: 12,
    marginRight: 20,
  },
  searchButton: {
    backgroundColor: '#c9302c',
    padding: 5,
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  searchButton01: {
    backgroundColor: '#c9302c',
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    bottom: 15,
    right: 10,
  },
  searchButton02: {
    // backgroundColor: '#c9302c',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  searchButtonTitle: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
