import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      <StatusBar barStyle={'dark-content'} />
    </View>
  );
};
export default HelloWorldApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
