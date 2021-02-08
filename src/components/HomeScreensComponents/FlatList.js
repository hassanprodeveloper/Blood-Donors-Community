import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
// import {connect} from 'react-redux';
import UserInfoCard from './userInfoCard';

// importing functions from action file

// importing components

const MyFlatList = ({renderData}) => {
  const obj = renderData;
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={Object.keys(obj)}
          renderItem={({item}) => (
            <UserInfoCard 
              id={obj[item].id}
              donorName={obj[item].name}
              mobileNumber={obj[item].number}
              bloodGroup={obj[item].bloodGroup}
              adress={obj[item].adress}
            />
          )}
        />
      </View>
    </>
  );
};

// redux functions
// const mapStateToProps = (state) => ({
//   donorData: state.donorDetails.DonorsList,
// });
//   const mapDispatchToProps = (dispatch) =>({
//   addUser: (data) => dispatch(updateUser1(data))
//   });

// STYLE_SHEET
const styles = StyleSheet.create({
  appCont: {
    flex: 2,
    padding: 13,
  },
});

// export default connect(mapStateToProps, null)(MyFlatList);
export default MyFlatList
