import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants/colors';

function OutlinedButton({onPress, icon, children}) {
  return (
    <Pressable
      android_ripple={{color: 'Colors.primary100'}}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Ionicons
        style={styles.icon}
        name={icon}
        size={25}
        color={Colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
      <Ionicons
        style={styles.icon}
        name={icon}
        size={25}
        color={Colors.primary500}
      />
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary500,
    width: '80%',
    alignSelf: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
  icon: {
    marginHorizontal: 12,
  },
  text: {
    color: Colors.primary500,
    letterSpacing: 1,
    fontSize: 18,
  },
});
