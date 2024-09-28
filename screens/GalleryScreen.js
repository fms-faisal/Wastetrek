// screens/GalleryScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Gallery of Uploaded Trash Photos</Text>
      {/* Use FlatList or GridView to display photos */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GalleryScreen;
