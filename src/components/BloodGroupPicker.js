import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import {ScrollView} from 'react-native-gesture-handler';
// import {CitiesList} from '../resources/CitiesList';
import DropDownPicker from 'react-native-dropdown-picker';
import {BloodGroupList} from '../resources/BloodGroupList';

// console.log('BloodGroupList', BloodGroupList);

const BloodGroupPicker = ({dropdownPlaceHolder, setBloodGroup}) => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState(BloodGroupList);
  let controller;
  console.log('blood picker #15__ value>>', value)
  return (
    <>
        <DropDownPicker
          items={items}
          controller={(instance) => (controller = instance)}
          onChangeList={(items, callback) => {
            new Promise((resolve, reject) => resolve(setItems(items)))
              .then(() => callback())
              .catch(() => {});
          }}
          style={styles.dropdownStyling}
          placeholder={dropdownPlaceHolder}
          labelStyle={{color: '#000000'}}
          defaultValue={value}
          onChangeItem={(item) => {
            setValue(item.value);
            setBloodGroup(item.value);
            // console.log('blood group picker #33', item)
          }}
          containerStyle={{height: 40}}
          searchable={true}
          searchablePlaceholder="Search Blood Group..."
          searchablePlaceholderTextColor="gray"
          seachableStyle={{height: 20}}
          searchableError={() => <Text>Blood Group Not Found</Text>}
          searchableStyle={{height: 30, fontSize: 15}}
          onSearch={(text) => {
            text,
              (items) => {
                controller.resetItems(items);
              };
          }}
          zIndex= {100}
        />
    </>
  );
};

export default BloodGroupPicker;

const styles = StyleSheet.create({
  dorpdownContainer: {
    marginVertical: 15,
    paddingVertical: 5,
  },
});
