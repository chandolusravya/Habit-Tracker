// HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useHabitContext } from './HabitContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { habits, updateHabits } = useHabitContext(); // Ensure you are using updateHabits correctly

  useEffect(() => {
    // Fetch habits data from AsyncStorage when the component mounts
    const fetchHabits = async () => {
      try {
        const habitsData = await AsyncStorage.getItem('habits');
        if (habitsData) {
          const parsedHabits = JSON.parse(habitsData);
          updateHabits(parsedHabits); // Correctly use updateHabits
        }
      } catch (error) {
        console.error('Error fetching habits data:', error);
      }
    };

    fetchHabits();
  }, [updateHabits]); // Make sure to include updateHabits in the dependency array

  return (
    <View style={styles.conatiner}>
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Welcome to Habbity!!</Text>
      <View style={styles.items}>
      <Pressable onPress={() => navigation.navigate('AddHabitScreen')}>
        <Text style={{ fontSize: 28, color: 'red', fontWeight: 'bold', marginLeft: 6 }}>
          AddHabitScreen
        </Text>
      </Pressable>
      </View>
      <View style={styles.items}>
      <Pressable onPress={() => navigation.navigate('RoutineScreen')}>
        <Text style={{ fontSize: 28, color: 'red', fontWeight: 'bold', marginLeft: 6 }}>
          RoutineScreen
        </Text>
      </Pressable></View>
      {/* <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={{ fontSize: 16, color: 'red', fontWeight: 'bold', marginLeft: 6 }}>
          PROFILE
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Text style={{ fontSize: 16, color: 'red', fontWeight: 'bold', marginLeft: 6 }}>
          SETTINGS
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('LogsScreen')}>
        <Text style={{ fontSize: 16, color: 'red', fontWeight: 'bold', marginLeft: 6 }}>
          Log your journey!
        </Text>
      </Pressable> */}

      {/* Display the list of habits
      {habits.map((habit) => (
        <View key={habit.id}>
          <Text>{habit.title}</Text>
          <Text>{habit.description}</Text>
          <Text>{habit.frequency.join(', ')}</Text>
          <Pressable onPress={() => navigation.navigate('EditHabitScreen', { habitId: habit.id })}>
            <Text style={{ fontSize: 16, color: 'red', fontWeight: 'bold', marginLeft: 6 }}>
              Edit Habit
            </Text>
          </Pressable>
        </View>
      ))} */}
      
      </View>
    </View>
  );
};

const styles=StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize:33,
    fontWeight: 'bold',
    marginBottom: 16,
    justifyContent:'center',
  },
  items:{
    fontSize:33,
    backgroundColor:'#FFF',
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 20,
  }
})

export default HomeScreen;


// // HomeScreen.js
// import React, { useEffect } from 'react';
// import { View, Text, Pressable } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import { useHabitContext } from './HabitContext';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const { habits } = useHabitContext();

//   useEffect(() => {
//     // Fetch habits data from AsyncStorage when the component mounts
//     const fetchHabits = async () => {
//       try {
//         const habitsData = await AsyncStorage.getItem('habits');
//         if (habitsData) {
//           const parsedHabits = JSON.parse(habitsData);
//           updateHabits(parsedHabits);
//         }
//       } catch (error) {
//         console.error('Error fetching habits data:', error);
//       }
//     };

//     fetchHabits();
//   }, []);

//   return (
//     <View>
//       <Text>Welcome to the Home Screen!</Text>
//       <Pressable onPress={() => navigation.navigate('AddHabitScreen')}>
//         <Text style={{ fontSize: 16, color: 'red', fontWeight: 'bold', marginLeft: 6 }}>
//           AddHabitScreen
//         </Text>
//       </Pressable>

//       {/* Display the list of habits */}
//       {habits.map((habit) => (
//         <View key={habit.id}>
//           <Text>{habit.title}</Text>
//           <Text>{habit.description}</Text>
//           <Text>{habit.frequency.join(', ')}</Text>
//           <Pressable onPress={() => navigation.navigate('EditHabitScreen', { habitId: habit.id })}>
//             <Text style={{ fontSize: 16, color: 'red', fontWeight: 'bold', marginLeft: 6 }}>Edit Habit</Text>
//           </Pressable>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default HomeScreen;
