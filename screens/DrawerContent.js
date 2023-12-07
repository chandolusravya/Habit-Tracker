// Example DrawerContent.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function DrawerContent({ navigation }) {
  return (
    <View>
      <Text>User Info</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Logout"
        onPress={() => {
          // Handle logout logic
          navigation.navigate('Login'); // Navigate to the login screen after logout
        }}
      />
    </View>
  );
}

export default DrawerContent;
