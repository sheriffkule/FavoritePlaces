import React from 'react';
import {StyleSheet, View} from 'react-native';
import {getCurrentPosition} from 'react-native-geolocation-service';

import OutlinedButton from '../UI/OutlinedButton';
import {Colors} from '../../constants/colors';

function LocationPicker() {
  //async function verifyPermissions() }
  //wanted to grant permissions for getting location, but I just don't know how to do it. fuck.

  async function getLocationHandler() {
    const location = await getCurrentPosition();
    console.log(location);
  }

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
