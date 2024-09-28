import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

// Sample data for images
const images = [
  { id: '1', uri: 'https://example.com/image1.jpg' },
  { id: '2', uri: 'https://example.com/image2.jpg' },
  { id: '3', uri: 'https://example.com/image3.jpg' },
  { id: '4', uri: 'https://example.com/image4.jpg' },
  // Add more image URIs as needed
];

const GalleryScreen = () => {
  const renderImage = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery of Uploaded Trash Photos</Text>
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={item => item.id}
        numColumns={2} // Display 2 images per row
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 5, // Space between images
    borderRadius: 10, // Rounded edges
    overflow: 'hidden', // Ensure the image respects the border radius
  },
  image: {
    width: '100%', // Full width of the container
    height: 100, // Set a fixed height for images
    borderRadius: 10, // Rounded edges
  },
});

export default GalleryScreen;
