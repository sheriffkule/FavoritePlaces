import React from 'react';
import {Button, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function ImagePicker() {
  async function takeImageHandler() {
    const image = await launchCamera({
      saveToPhotos: true,
      quality: 1,
      includeExtra: true,
      maxHeight: 2048,
    });
    console.log(image);
  }

  return (
    <View>
      <View></View>
      <Button title="take image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;
