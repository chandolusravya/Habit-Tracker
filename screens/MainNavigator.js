// MainNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const MainNavigator = ({ userLoggedIn }) => {
    return (
    <Stack.Navigator headerMode="none">
        {userLoggedIn ? (
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
        )}
    </Stack.Navigator>
    );
};

export default MainNavigator;
