import { createStackNavigator } from '@react-navigation/stack';
import AddHabitScreen from './AddHabitScreen';
import HomeScreen from './HomeScreen';
import EditHabitScreen from './EditHabitScreen';
import ProfileScreen from './ProfileScreen';
import Settings from './Settings';
import LogsScreen from './LogsScreen';

import NewAbout from './NewAbout';


const Stack = createStackNavigator();

const AppStack = () => {
return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddHabit" component={AddHabitScreen} />
        <Stack.Screen name="EditHabit" component={EditHabitScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="LogsScreen" component={LogsScreen} />
        <Stack.Screen name="NewAbout" component={NewAbout} />
        
    </Stack.Navigator>
);
};

export default AppStack;
