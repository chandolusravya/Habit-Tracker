import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createStackNavigator } from '@react-navigation/stack';

import Login  from "./screens/Login";
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";


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
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />  */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
