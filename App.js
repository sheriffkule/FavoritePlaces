import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';

export function HelloWorldApp() {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
