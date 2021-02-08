import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {CitiesList} from '../resources/CitiesList';
import DropDownPicker from 'react-native-dropdown-picker';

const CitiesDropdownPicker = ({setCity, dropdownPlaceHolder}) => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(CitiesList);
  let controller;
  // console.log('userCity ==>>',userCity);

  return (
    <>
      <View style={styles.dorpdownContainer}>
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
            setCity(item.value);
          }}
          containerStyle={{height: 40}}
          searchable={true}
          searchablePlaceholder="Search for Your City..."
          searchablePlaceholderTextColor="gray"
          seachableStyle={{height: 20}}
          searchableError={() => <Text>City Not Found</Text>}
          searchableStyle={{height: 30, fontSize: 15}}
          onSearch={(text) => {
            // Example
            // if (this._API.isFetching()) this._API.abort();

            text,
              (items) => {
                // See controller: https://github.com/hossein-zare/react-native-dropdown-picker#controller
                controller.resetItems(items); // Maybe a new method will be introduced for a better UX!
              };
          }}
        />
      </View>
    </>
  );
};

export default CitiesDropdownPicker;

const styles = StyleSheet.create({
  dorpdownContainer: {
    marginVertical: 15,
    paddingVertical: 5,
  },
});
