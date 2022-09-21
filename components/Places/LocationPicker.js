import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getCurrentPosition} from 'react-native-geolocation-service';
import {useNavigation} from '@react-navigation/native';

import OutlinedButton from '../UI/OutlinedButton';
import {Colors} from '../../constants/colors';
import {getMapPreview} from '../../util/location';

function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState();

  const navigation = useNavigation();

  //async function verifyPermissions() }
  //wanted to grant permissions for getting location, but I just don't know how to do it. fuck.

  async function getLocationHandler() {
    const location = await getCurrentPosition();

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate('Map');
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.latitude, pickedLocation.longitude),
        }}
      />
    );
  }
  // Location preview also wont work, cos I didn't knew how to solve previous issues and also cos I didn't got that
  // GOOGLE_API_KEY. But still, it doesn't matter, because this all of this is in the purpose of practising.

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
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
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
