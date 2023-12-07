
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHabitContext } from './HabitContext';

const EditHabitScreen = ({ route }) => {
  const navigation = useNavigation();
  const { habitId } = route.params;
  const { habits, editHabit, deleteHabit } = useHabitContext();

  const [habit, setHabit] = useState({
    id: '',
    title: '',
    description: '',
    frequency: [],
  });

  const [editedHabit, setEditedHabit] = useState({
    title: '',
    description: '',
    frequency: [],
  });

  useEffect(() => {
    const fetchHabit = async () => {
      try {
        // Fetch habit data based on habitId from the context
        const selectedHabit = habits.find((h) => h.id === habitId);
        if (selectedHabit) {
          setHabit(selectedHabit);
          setEditedHabit(selectedHabit);
        }
      } catch (error) {
        console.error('Error fetching habit data:', error);
      }
    };

    fetchHabit();
  }, [habitId, habits]);

  const handleEdit = async () => {
    const updatedHabit = {
      ...habit,
      title: editedHabit.title,
      description: editedHabit.description,
      frequency: editedHabit.frequency
    };

    await editHabit(habitId, updatedHabit);

    Alert.alert('Success', 'Habit updated successfully!');
  };

  const handleDelete = async () => {
    await deleteHabit(habitId);
    navigation.goBack(); // Navigate back after deleting
  };

  const toggleDaySelection = (day) => {
    const updatedDays = editedHabit.frequency.includes(day)
      ? editedHabit.frequency.filter((selectedDay) => selectedDay !== day)
      : [...editedHabit.frequency, day];

    setEditedHabit({ ...editedHabit, frequency: updatedDays });
  };

  return (
    <View>
    <Text style={styles.sectionTitle}>Change of Plans??</Text>
      <Text style={styles.items}>Title: {habit.title}</Text>
      <TextInput
        style={styles.items}
        value={editedHabit.title}
        onChangeText={(text) => setEditedHabit({ ...editedHabit, title: text })}
        placeholder="Enter title"
      />

      <Text style={styles.items}>Description: {habit.description}</Text>
      <TextInput
        style={styles.items}
        value={editedHabit.description}
        onChangeText={(text) => setEditedHabit({ ...editedHabit, description: text })}
        placeholder="Enter description"
      />

      <Text>Select Days:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
          (day) => (
            <TouchableOpacity
              key={day}
              onPress={() => toggleDaySelection(day)}
              style={{
                backgroundColor: editedHabit.frequency.includes(day) ? 'green' : 'gray',
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text>{day.charAt(0)}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <Button title="Edit Habit" onPress={handleEdit} />
      <Button title="Delete Habit" onPress={handleDelete} />

      <Text style={styles.subSectionTitle}>Updated Habit:</Text>
      <View>
        <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>{habit.title}</Text>
        <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>{habit.description}</Text>
        <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>{habit.frequency.join(', ')}</Text>
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
  sectionTitle:{
    fontSize:33,
    fontWeight: 'bold',
    marginBottom: 16,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    marginLeft:10,
    color:'red'
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

export default EditHabitScreen;

