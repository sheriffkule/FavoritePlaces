import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Colors} from '../../constants/colors';

function Button({onPress, children}) {
  return (
    <Pressable
      android_ripple={{color: '#40bf7b'}}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: Colors.primary800,
    borderWidth: 1,
    borderColor: Colors.primary700,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1,
    color: Colors.primary50,
  },
});
