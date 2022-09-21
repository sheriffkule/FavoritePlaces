import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

function Map() {
  const region = {
    latitude: 45.2654728,
    longitude: 19.827377,
    latitudeDelta: 0.01,
    longitudeDelta: 0.045,
  };

  return <MapView style={styles.Map} initialRegion={region} />;
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
