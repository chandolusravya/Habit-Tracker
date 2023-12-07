import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createStackNavigator } from '@react-navigation/stack';
import { HabitProvider } from './screens/HabitContext';
import Login  from "./screens/Login";
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
import HomeScreen from './screens/HomeScreen';
import AddHabitScreen from './screens/AddHabitScreen';
import EditHabitScreen from './screens/EditHabitScreen';
import AppStack from './screens/AppStack';
import RoutineScreen from './screens/RoutineScreen';
import { UserProvider } from './screens/UserContext';
import ProfileScreen from './screens/ProfileScreen';
import Settings from './screens/Settings';
import LogsScreen from './screens/LogsScreen';
import NewAbout from './screens/NewAbout';


import Tabs from './screens/tabs';

import {View, Text, Button} from 'react-native';
import React from 'react';

const Stack = createStackNavigator();


// const Introduction = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Welcome to the Habit Tracker App!</Text>
//       <Button
//         onPress={() => {console.warn("About Navigator"); 
//         navigation.navigate("Welcome")}}
//                         title='Login'
//                     ></Button>
      
//     </View>
//   );
// };

export default function App() {
  
    return (
    <UserProvider>
        <HabitProvider>
            <NavigationContainer>
            
                <Stack.Navigator
                initialRouteName='Welcome'
                >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{
                    headerShown: false
                    }}
                />
                
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                    headerShown: false
                    }}
                /> 
                <Stack.Screen
                    name="AddHabitScreen"
                    component={AddHabitScreen}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="EditHabitScreen"
                    component={EditHabitScreen}
                    options={{
                    headerShown: false
                    }}
                />  
                <Stack.Screen
                    name="AppStack"
                    component={AppStack}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="RoutineScreen"
                    component={RoutineScreen}
                    options={{
                        headerShown: false
                    }}
                    />
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={{
                        headerShown: false
                    }}
                    />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: false
                    }}
                    />
                <Stack.Screen
                    name="LogsScreen"
                    component={LogsScreen}
                    options={{
                        headerShown: false
                    }}
                    />
                <Stack.Screen
                    name="NewAbout"
                    component={NewAbout}
                    options={{
                        headerShown: false
                    }}
                    />
                
                
                
                </Stack.Navigator>
            </NavigationContainer>
        </HabitProvider>
    </UserProvider>
    );
}
