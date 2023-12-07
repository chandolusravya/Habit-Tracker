import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import Settings from "./Settings";
import LogsScreen from "./LogsScreen";
import { Image, Text, View } from "react-native";
const Tab = createBottomTabNavigator();


const Tabs=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
            tabBarLabel: ({ focused }) => (
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: focused ? 'blue' : 'black' }}>
            HOME
        </Text>
        ),
        tabBarIcon: null,
                
    tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
    },
   
    }} />
            <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{   headerShown: false, tabBarLabel: ({ focused }) => (
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: focused ? 'blue' : 'black' }}>
            PROFILE
        </Text>
        ),
    tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
        
    },tabBarIcon: null,}}
            />
            <Tab.Screen name="settings" component={Settings} 
            options={{
                headerShown: false,
                tabBarLabel: ({ focused }) => (
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: focused ? 'blue' : 'black' }}>
            SETTINGS
        </Text>
        ),
    tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
    },}} />
            <Tab.Screen name="Logs" component={LogsScreen} options={{
                headerShown: false,
                tabBarLabel: ({ focused }) => (
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: focused ? 'blue' : 'black' }}>
            LOGS
        </Text>
        ),
        tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
        },}}/>
            
        </Tab.Navigator>

    );
}
export default Tabs;

