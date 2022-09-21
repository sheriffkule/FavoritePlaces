import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {Colors} from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();

  async function takeImageHandler() {
    const image = await launchCamera({
      //saveToPhotos: true,
      quality: 1,
      includeExtra: true,
    });

    setPickedImage(image.uri);
  }

  let imagePreview = <Text>Take an image</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
