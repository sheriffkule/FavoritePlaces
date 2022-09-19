import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../constants/colors';

function PlaceForm() {
  const [enteredTitle, setenteredTitle] = useState();

  function changeTitleHandler(enteredText) {
    setenteredTitle(enteredText);
  }

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
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 25,
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
