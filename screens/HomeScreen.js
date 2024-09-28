// screens/HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>TrashTracker</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <View style={styles.cameraContainer}>
        <Button title="Take Photo" onPress={() => console.log("Camera Opened")} />
        <Button title="Upload from Gallery" onPress={() => console.log("Gallery Opened")} />
      </View>
      {/* AI Progress bar, Trash Volume will go here after image is uploaded */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cameraContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default HomeScreen;
