// screens/HeatmapScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Heatmap } from "react-native-maps";

const HeatmapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: 23.8103,  // Latitude of Dhaka
            longitude: 90.4125, // Longitude of Dhaka
            latitudeDelta: 0.0922,  // Zoom level for latitude
            longitudeDelta: 0.0421,  // Zoom level for longitude
        }}
      >
        {/* Add Heatmap points based on trash data */}
        <Heatmap points={[]} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default HeatmapScreen;
