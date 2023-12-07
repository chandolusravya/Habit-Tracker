import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHabitContext } from './HabitContext';
import { Picker } from '@react-native-picker/picker';

const RoutineScreen = () => {
    const navigation = useNavigation();
    const { habits } = useHabitContext();
    const [selectedDays, setSelectedDays] = useState('');

    const handleEditHabit = (habitId) => {
        navigation.navigate('EditHabitScreen', { habitId });
    };

    return (
        <View>
            <Text style={styles.sectionTitle}>  Curated Routines</Text>
            
            {/* Dropdown list for selecting days */}
            <Picker
                selectedValue={selectedDays}
                onValueChange={(itemValue) => setSelectedDays(itemValue)}
            >
                <Picker.Item label="All Days" value="" />
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturday" value="Saturday" />
                <Picker.Item label="Sunday" value="Sunday" />
                {/* Add more days as needed */}
            </Picker>

            {/* Map over habits and render habit items based on selected days */}
            {habits.map((habit) => {
                const habitHasSelectedDays =
                    !selectedDays || habit.frequency.includes(selectedDays);

                if (habitHasSelectedDays) {
                    return (
                        <View key={habit.id}>
                            <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>{habit.title}</Text>
                            <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>{habit.description}</Text>
                            <Text style={{ fontSize:16, marginLeft:10, color:'black', }}>{habit.frequency.join(', ')}</Text>
                            <Button title="Edit Habit" onPress={() => handleEditHabit(habit.id)} />
                        </View>
                    );
                } else {
                    return null; // Habit does not match the selected days, don't render it
                }
            })}
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
    },
    sectionTitle:{
        fontSize:33,
        fontWeight: 'bold',
        marginBottom: 16,
        justifyContent:'center',
        color:'orange',
        marginLeft:50,
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
      },
})
export default RoutineScreen;

// import React from 'react';
// import { View, Text, Button, FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useHabitContext } from './HabitContext';

// const RoutineScreen = () => {
//     const navigation = useNavigation();
//     const { habits } = useHabitContext();

//     const handleEditHabit = (habitId) => {
//     // Navigate to the Edit Habit screen with the habitId as a parameter
//     navigation.navigate('EditHabitScreen', { habitId });
//     };

//     const renderHabitItem = ({ item }) => (
//     <View>
//         <Text>{item.title}</Text>
//         <Text>{item.description}</Text>
//         <Text>{item.frequency.join(', ')}</Text>
//         <Button title="Edit Habit" onPress={() => handleEditHabit(item.id)} />
//     </View>
//     );

//     return (
//     <View>
//         <Text>Welcome to Routine Screen!</Text>
//         <FlatList
//             data={habits}
//             keyExtractor={(habit) => habit.id}
//             renderItem={renderHabitItem}
//     />
//     </View>
//     );
// };

// export default RoutineScreen;
