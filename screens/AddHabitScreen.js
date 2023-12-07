import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHabitContext } from './HabitContext';

const AddHabitScreen = () => {
  const navigation = useNavigation();
  const { addHabit, habits } = useHabitContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);

  const addNewHabit = async () => {
    if (title && description && selectedDays.length > 0) {
      const newHabit = {
        id: Math.random().toString(36).substring(7),
        title,
        description,
        frequency: selectedDays,
      };

      await addHabit(newHabit);

      // Reset form fields
      setTitle('');
      setDescription('');
      setSelectedDays([]);
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
    <View><Text style={styles.sectionTitle}>Plan your journey</Text>
      <Text style={styles.items}>Title:</Text>
      <TextInput style={styles.items} value={title} onChangeText={(text) => setTitle(text)} placeholder="Enter title" />

      <Text style={styles.items}>Description:</Text>
      <TextInput
        style={styles.items}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Enter description"
      />

      <Text style={styles.items}>Select Days:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', fontSize:16, }}>
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

      <Button title="Submit" onPress={addNewHabit} />

      <Text style={styles.subSectionTitle}>Created Habits:</Text>
      {habits.map((habit) => (
        <View key={habit.id}>
          <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>{habit.title}</Text>
          <Text style={{ fontSize:16, marginLeft:10, color:'black',}}>{habit.description}</Text>
          <Text style={{ fontSize:16, marginLeft:10, color:'black',}}>{habit.frequency.join(', ')}</Text>
        </View>
      ))}
    </View>
  );
};
const styles=StyleSheet.create({
  conatiner:{
    flex:1,
    backgroundColor:'#fff',
  },
  sectionTitle:{
    fontSize:33,
    fontWeight: 'bold',
    marginBottom: 16,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    marginLeft:10,
    color:'green'
  },
  items:{
    fontSize:16,
    backgroundColor:'#FFF',
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 20,
    fontWeight:'bold',
    color:'black',
  },
  subSectionTitle:{
    
      fontSize:20,
      fontWeight: 'bold',
      marginBottom: 16,
      alignItems: 'center', // Center content horizontally
      justifyContent: 'center', // Center content vertically
      marginLeft:10,
      color: 'black',
    
  },
})

export default AddHabitScreen;

