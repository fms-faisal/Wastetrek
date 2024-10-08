// components/Navbar.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>WasteTrek</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarText: {
    color: "white",
    fontSize: 18,
  },
});

export default Navbar;
