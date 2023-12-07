import React, { createContext, useContext, useState } from 'react';

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
    const [habits, setHabits] = useState([]);

    const addHabit = async (newHabit) => {
    setHabits([...habits, newHabit]);
    };

    const editHabit = async (habitId, updatedHabit) => {
    const updatedHabits = habits.map((h) => (h.id === habitId ? updatedHabit : h));
    setHabits(updatedHabits);
    };

    const deleteHabit = async (habitId) => {
    const updatedHabits = habits.filter((h) => h.id !== habitId);
    setHabits(updatedHabits);
    };

    return (
    <HabitContext.Provider value={{ habits, addHabit, editHabit, deleteHabit }}>
        {children}
    </HabitContext.Provider>
    );
};

export const useHabitContext = () => {
        const context = useContext(HabitContext);
    if (!context) {
    throw new Error('useHabitContext must be used within a HabitProvider');
    }
    return context;
};

// import React, { createContext, useContext, useState } from 'react';

// const HabitContext = createContext();

// export const HabitProvider = ({ children }) => {
//   const [habits, setHabits] = useState([]);

//   const addHabit = async (newHabit) => {
//     setHabits([...habits, newHabit]);
//   };

//   const editHabit = async (habitId, updatedHabit) => {
//   try {
//     if (!updatedHabit) {
//       throw new Error('Updated habit is undefined or null.');
//     }

//     const updatedHabits = habits.map((h) => (h.id === habitId ? updatedHabit : h));
//     setHabits(updatedHabits);

//     // Save the updated habits to AsyncStorage
//     await AsyncStorage.setItem('habits', JSON.stringify(updatedHabits));
//   } catch (error) {
//     console.error('Error updating habit:', error);
//   }
// };

//   const deleteHabit = async (habitId) => {
//     const updatedHabits = habits.filter((h) => h.id !== habitId);
//     setHabits(updatedHabits);
//     return updatedHabits; // Return the updated habits
//   };
//   const updateHabits = (updatedHabits) => {
//     setHabits(updatedHabits);
//   };

//   return (
//     <HabitContext.Provider value={{ habits, addHabit, editHabit, deleteHabit, updateHabits }}>
//       {children}
//     </HabitContext.Provider>
//   );
// };

// export const useHabitContext = () => {
//   const context = useContext(HabitContext);
//   if (!context) {
//     throw new Error('useHabitContext must be used within a HabitProvider');
//   }
//   return context;
// };
