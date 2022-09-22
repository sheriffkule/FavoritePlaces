import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

function Map() {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 45.2654728,
    longitude: 19.827377,
    latitudeDelta: 0.01,
    longitudeDelta: 0.045,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({lat: lat, lng: lng});
  }

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
