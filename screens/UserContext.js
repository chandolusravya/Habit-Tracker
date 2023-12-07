// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    // Add other user-related fields as needed
    });

    const updateUser = (updatedUser) => {
    setUser(updatedUser);
    };

    useEffect(() => {
    const fetchUserFromStorage = async () => {
        try {
        // Fetch the logged-in user data from AsyncStorage
        const storedUser = await AsyncStorage.getItem('user');

        if (storedUser) {
            try {
            // Check if the stored data is a valid JSON string
            const parsedUser = JSON.parse(storedUser);
            updateUser(parsedUser); // Update user data in context
        } catch (parseError) {
            console.error('Error parsing user data:', parseError);
        }
        }
    } catch (error) {
        console.error('Error fetching user data from AsyncStorage:', error);
    }
    };

    fetchUserFromStorage();
}, []);
return (
    <UserContext.Provider value={{ user, updateUser }}>
        {children}
    </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
