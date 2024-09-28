import * as ImagePicker from 'expo-image-picker';
import { Button, Image, View, Text } from 'react-native';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const [image, setImage] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // Request permission when the component mounts
    const getPermissions = async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      setPermissionGranted(granted);
      if (!granted) {
        alert('Permission to access camera is required!');
      }
    };
    getPermissions();
  }, []);

  const pickImageFromGallery = async () => {
    if (!permissionGranted) {
      alert('Camera permission not granted!');
      return;
    }

    // Launch the image picker for selecting images from the gallery
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert('Image selection was canceled.');
    }
  };

  const takePhoto = async () => {
    if (!permissionGranted) {
      alert('Camera permission not granted!');
      return;
    }

    // Launch the camera
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert('Image capture was canceled.');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {permissionGranted ? (
        <>
          <Button title="Take a photo" onPress={takePhoto} />
          <Button title="Upload from Gallery" onPress={pickImageFromGallery} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </>
      ) : (
        <Text>Camera permission is required to use this feature.</Text>
      )}
    </View>
  );
}
