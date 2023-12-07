import { createStackNavigator } from '@react-navigation/stack';
import AddHabitScreen from './AddHabitScreen';
import HomeScreen from './HomeScreen';


const Stack = createStackNavigator();

const AppStack = () => {
return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddHabit" component={AddHabitScreen} />
    </Stack.Navigator>
);
};

export default AppStack;
