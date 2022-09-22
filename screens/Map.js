import React, {useCallback, useLayoutEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import IconButton from '../components/UI/IconButton';

function Map({navigation}) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 45.25,
    longitude: 19.82,
    latitudeDelta: 0.01,
    longitudeDelta: 0.045,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({lat: lat, lng: lng});
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location picked',
        'You have to pick location by tapping on the map first!',
      );
      return;
    }

    navigation.navigation('AddPlace', {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({tintColor}) => (
        <IconButton
          icon="save-outline"
          size={30}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}>
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
