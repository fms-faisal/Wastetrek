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
            uploadImage(result.assets[0].uri); // Upload the image to the server
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
            uploadImage(result.assets[0].uri); // Upload the image to the server
        } else {
            alert('Image capture was canceled.');
        }
    };

    // Function to upload the image to the Express server
    const uploadImage = async (uri) => {
        let formData = new FormData();
        formData.append('image', {
            uri: uri,
            name: 'photo.jpg', // You can customize the name
            type: 'image/jpeg', // Ensure this matches the image type
        });

        try {
            let response = await fetch('http://192.168.0.3:5000/upload', { // Use your local IP here
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let responseData = await response.json();
            console.log(responseData); // Handle the server response
        } catch (error) {
            console.error('Error uploading image:', error);
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
