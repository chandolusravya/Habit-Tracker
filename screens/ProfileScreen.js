// ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserContext } from './UserContext';

const ProfileScreen = () => {
  const { user, updateUser } = useUserContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  useEffect(() => {
    const fetchUserFromStorage = async () => {
      try {
        // Fetch the logged-in user data from AsyncStorage
        const storedUser = await AsyncStorage.getItem('user');
        console.log('Stored User Data profile:', storedUser);
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setEditedUser(parsedUser);
          updateUser(parsedUser); // Update user data in context
        }
      } catch (error) {
        console.error('Error fetching user data from AsyncStorage:', error);
      }
    };

    fetchUserFromStorage();
  }, [updateUser]);

  const handleEditToggle = () => {
    console.log('Toggling edit mode');
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    try {
      updateUser(editedUser); // Update user data in context
      await AsyncStorage.setItem('user', JSON.stringify(editedUser)); // Save to AsyncStorage

      Alert.alert('Success', 'Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'An error occurred while updating the profile.');
    }
  };
  const handleInputChange = (field, value) => {
    setEditedUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  const handleImageClick = () => {
    // Implement logic for changing profile picture here
    // You can use a library for image selection and updating
    Alert.alert('Change Profile Picture', 'Implement logic for changing profile picture here.');
  };

  return (
    <View>
    <Text style={{fontSize:33, fontWeight: 'bold', marginBottom: 16, justifyContent:'center',color:'red'}}> Welcome {editedUser.name},</Text>
      {/* Display the profile picture */}
      <TouchableOpacity onPress={handleImageClick}>
        <Image
          source={require('../assets/profile.png')} // Replace with the actual prop for the image
          style={{ width: 100, height: 100, borderRadius: 50, alignItems:'center'}}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Display user information */}
      <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>Name: {editedUser.name}</Text>
      <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>Email: {editedUser.email}</Text>
      <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>Phone Number: {editedUser.mobileNumber}</Text>

      {/* Display input fields and Save button when editing */}
      {isEditing ? (
        <>
          <TextInput
            value={editedUser.name}
            onChangeText={(text) => handleInputChange('name', text)}
            placeholder="Enter name"
            // onChangeText={(text) => setEditedUser({ ...editedUser, name: text })}
            // placeholder="Enter name"
          />
          <TextInput
            value={editedUser.email}
            onChangeText={(text) => setEditedUser({ ...editedUser, email: text })}
            placeholder="Enter email"
          />
          <TextInput
            value={editedUser.mobileNumber}
            onChangeText={(text) => setEditedUser({ ...editedUser, mobileNumber: text })}
            placeholder="Enter phone number"
          />

          <Button title="Save" onPress={handleSave} />
        </>
      ) : (
        // Display Edit button when not editing
        <Button title="Edit" onPress={handleEditToggle} />
      )}
    </View>
  );
};

export default ProfileScreen;
