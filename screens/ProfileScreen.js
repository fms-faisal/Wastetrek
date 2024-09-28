import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Sample user data
  const user = {
    name: 'Faisal Mahmud',
    email: 'faisal@example.com',
    profilePicture: 'https://example.com/profile.jpg', // replace with your profile image URL
  };

  const handleLogout = () => {
    // Implement logout functionality
    console.log('User logged out');
    navigation.navigate('Login'); // Navigate to login screen after logout
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
});

export default ProfileScreen;
