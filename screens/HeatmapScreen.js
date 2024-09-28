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
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
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
