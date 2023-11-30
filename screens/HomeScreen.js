// Import necessary modules and components...
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddHabitScreen from './AddHabitScreen';

function HomeScreen({ navigation }) {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    // Fetch habits data from AsyncStorage when the component mounts
    const fetchHabits = async () => {
      try {
        const habitsData = await AsyncStorage.getItem('habits');
        if (habitsData) {
          const parsedHabits = JSON.parse(habitsData);
          setHabits(parsedHabits);
        }
      } catch (error) {
        console.error('Error fetching habits data:', error);
      }
    };

    fetchHabits();
  }, []);

  useEffect(() => {
    // Set the habits parameter when it changes
    navigation.setParams({ habits, setHabits });
  }, [habits]);

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Pressable
        onPress={() => navigation.navigate('AddHabitScreen', { habits, setHabits })}>
        <Text style={{
          fontSize: 16,
          color: 'red',
          fontWeight: "bold",
          marginLeft: 6
        }}>AddHabitScreen</Text>
      </Pressable>

      {/* Display the list of habits */}
      {habits.map((habit) => (
        <View key={habit.id}>
          <Text>{habit.title}</Text>
          <Text>{habit.description}</Text>
          <Text>{habit.frequency.join(', ')}</Text>
        </View>
      ))}
    </View>
  );
}

export default HomeScreen;
