import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

import {Colors} from '../../constants/colors';
import Button from '../UI/Button';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

function PlaceForm() {
  const [enteredTitle, setenteredTitle] = useState();

  function changeTitleHandler(enteredText) {
    setenteredTitle(enteredText);
  }

  function savePlaceHandler() {}

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>TITLE:</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 15,
  },
  label: {
    fontWeight: '700',
    marginBottom: 4,
    color: Colors.primary500,
    fontSize: 20,
    alignSelf: 'center',
    letterSpacing: 5,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    height: 50,
  },
});
