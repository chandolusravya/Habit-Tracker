import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const AddHabitScreen = ({ route, navigation }) => {
  //const navigation = useNavigation();
  const { habits, setHabits } = route.params || { habits: [], setHabits: () => {} };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);

  const addHabit = async () => {
    if (title && description && selectedDays.length > 0) {
      const newHabit = {
        id: Math.random().toString(36).substring(7),
        title,
        description,
        frequency: selectedDays,
      };

      try {
        // Save the new habit to AsyncStorage
        await AsyncStorage.setItem('habits', JSON.stringify([...habits, newHabit]));

        // Update the local state with the new habit
        setHabits([...habits, newHabit]);

        // Reset form fields
        setTitle('');
        setDescription('');
        setSelectedDays([]);
      } catch (error) {
        console.error('Error saving habit:', error);
      }
    } else {
      alert('Please fill in all the fields and select at least one day.');
    }
  };

  const toggleDaySelection = (day) => {
    const updatedDays = selectedDays.includes(day)
      ? selectedDays.filter((selectedDay) => selectedDay !== day)
      : [...selectedDays, day];

    setSelectedDays(updatedDays);
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Enter title"
      />

      <Text>Description:</Text>
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Enter description"
      />

      <Text>Select Days:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
          (day) => (
            <TouchableOpacity
              key={day}
              onPress={() => toggleDaySelection(day)}
              style={{
                backgroundColor: selectedDays.includes(day) ? 'green' : 'gray',
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text>{day.charAt(0)}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <Button title="Submit" onPress={addHabit} />

      <Text>Created Habits:</Text>
      {habits.map((habit) => (
        <View key={habit.id}>
          <Text>{habit.title}</Text>
          <Text>{habit.description}</Text>
          <Text>{habit.frequency.join(', ')}</Text>
        </View>
      ))}
    </View>
  );
};

export default AddHabitScreen;
