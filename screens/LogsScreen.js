// import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   Modal,
// } from 'react-native';
// import DatePicker from 'react-native-modern-datepicker';
// import { getFormatedDate } from 'react-native-modern-datepicker';
// import Sound from 'react-native-sound';

// export default function LogsScreen() {
//   const [openDatePicker, setOpenDatePicker] = useState(false);
//   const today = new Date();
//   const initialSelectedDate = getFormatedDate(today, 'YYYY/MM/DD');
//   const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
//   const [logData, setLogData] = useState('');
//   const [submittedData, setSubmittedData] = useState([]);
//   const [submitSound, setSubmitSound] = useState();

//   useEffect(() => {
//     // Load data from AsyncStorage when the component mounts
//     loadData();

//     // Load the submit sound
//     const sound = new Sound('vineboom.mp3', Sound.MAIN_BUNDLE, (error) => {
//       if (error) {
//         console.error('Error loading sound', error);
//       } else {
//         setSubmitSound(sound);
//       }
//     });

//     return () => {
//       // Release the sound when the component unmounts
//       if (submitSound) {
//         submitSound.release();
//       }
//     };
//   }, []);

//   const loadData = async () => {
//     try {
//       const storedData = await AsyncStorage.getItem('submittedData');
//       if (storedData) {
//         setSubmittedData(JSON.parse(storedData));
//       }
//     } catch (error) {
//       console.error('Error loading data from AsyncStorage:', error);
//     }
//   };

//   const saveData = async () => {
//     try {
//       const entry = { date: selectedDate, log: logData };
//       const newData = [...submittedData, entry];

//       // Save data to AsyncStorage
//       await AsyncStorage.setItem('submittedData', JSON.stringify(newData));

//       // Update local state
//       setSubmittedData(newData);

//       // Clear logData
//       setLogData('');

//       // Close the date picker modal
//       setOpenDatePicker(false);

//       // Play the submit sound
//       if (submitSound) {
//         submitSound.play();
//       }
//     } catch (error) {
//       console.error('Error saving data to AsyncStorage:', error);
//     }
//   };

//   function handleChangeDate(newDate) {
//     setSelectedDate(newDate);
//   }

//   const handlePressDatePicker = () => {
//     setOpenDatePicker(!openDatePicker);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.content}>
//         <Text style={styles.header}>Logs</Text>

//         <View style={styles.dateContainer}>
//           <Text style={styles.label}>Select Date</Text>
//           <TouchableOpacity
//             style={styles.dateInput}
//             onPress={handlePressDatePicker}
//           >
//             <Text>{selectedDate}</Text>
//           </TouchableOpacity>
//         </View>

//         <TextInput
//           style={styles.textInput}
//           placeholder="Enter additional data"
//           value={logData}
//           onChangeText={(text) => setLogData(text)}
//         />

//         <TouchableOpacity onPress={saveData} style={styles.submitButton}>
//           <Text style={styles.submitButtonText}>Submit</Text>
//         </TouchableOpacity>

//         {/* Display submitted data */}
//         <Text style={styles.submittedDataHeader}>Submitted Data:</Text>
//         {submittedData.map((data, index) => (
//           <View key={index} style={styles.submittedDataItem}>
//             <Text>Date: {data.date}</Text>
//             <Text>Log: {data.log}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Modal for date picker */}
//       <Modal animationType="slide" transparent={true} visible={openDatePicker}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <DatePicker
//               mode="calendar"
//               selected={selectedDate}
//               onDateChanged={handleChangeDate}
//               onSelectedChange={(date) => setSelectedDate(date)}
//               options={{
//                 backgroundColor: '#080516',
//                 textHeaderColor: '#469ab6',
//                 textDefaultColor: '#FFFFFF',
//                 selectedTextColor: '#FFF',
//                 mainColor: '#469ab6',
//                 textSecondaryColor: '#FFFFFF',
//                 borderColor: 'rgba(122, 146, 165, 0.1)',
//               }}
//             />

//             <TouchableOpacity onPress={handlePressDatePicker}>
//               <Text style={styles.closeButton}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       width: '100%',
//       height: '100%',
//       backgroundColor: '#fff',
//     },
//     content: {
//       flex: 1,
//       alignItems: 'center',
//       paddingHorizontal: 22,
//       marginTop: 64,
//     },
//     header: {
//       fontSize: 36,
//       marginVertical: 20,
//       color: '#111',
//     },
//     dateContainer: {
//       marginBottom: 20,
//     },
//     label: {
//       fontSize: 18,
//     },
//     dateInput: {
//       borderWidth: 1,
//       borderRadius: 4,
//       borderColor: '#222',
//       height: 50,
//       paddingLeft: 8,
//       fontSize: 18,
//       justifyContent: 'center',
//       marginTop: 14,
//     },
//     textInput: {
//       borderWidth: 1,
//       borderRadius: 4,
//       borderColor: '#222',
//       height: 50,
//       paddingLeft: 8,
//       fontSize: 18,
//       justifyContent: 'center',
//       marginTop: 14,
//       marginBottom: 20,
//       width: '100%',
//     },
//     submitButton: {
//       backgroundColor: '#342342',
//       paddingVertical: 22,
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderRadius: 8,
//       paddingVertical: 12,
//       marginVertical: 16,
//     },
//     submitButtonText: {
//       fontSize: 20,
//       color: 'white',
//     },
//     submittedDataHeader: {
//       fontSize: 20,
//       marginTop: 20,
//       marginBottom: 10,
//     },
//     submittedDataItem: {
//       borderWidth: 1,
//       borderRadius: 8,
//       borderColor: '#ccc',
//       padding: 10,
//       marginBottom: 10,
//     },
//     centeredView: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     modalView: {
//       margin: 20,
//       backgroundColor: '#080516',
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderRadius: 20,
//       padding: 35,
//       width: '90%',
//       shadowColor: '#000',
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5,
//     },
//     closeButton: {
//       color: 'white',
//       marginTop: 10,
//     },
//     deleteButton: {
//       backgroundColor: 'red',
//       padding: 8,
//       borderRadius: 8,
//       marginTop: 8,
//       alignItems: 'center',
//     },
  
//     deleteButtonText: {
//       color: 'white',
//       fontWeight: 'bold',
//     },
//   });
  
  

import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
//import { View } from 'react-native-safe-area-context';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import Sound from 'react-native-sound';


export default function LogsScreen() {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const today = new Date();
  const initialSelectedDate = getFormatedDate(today, 'YYYY/MM/DD');
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [logData, setLogData] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    // Load data from AsyncStorage when the component mounts
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('submittedData');
      if (storedData) {
        setSubmittedData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  };
  const playSubmitSound = () => {
    const sound = new Sound('vineboom.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.error('Error loading sound', error);
      } else {
        sound.play();
      }
    });
  };
  
  const saveData = async () => {
    try {
      const entry = { date: selectedDate, log: logData };
      const newData = [...submittedData, entry];

      // Save data to AsyncStorage
      await AsyncStorage.setItem('submittedData', JSON.stringify(newData));

      // Update local state
      setSubmittedData(newData);

      // Clear logData
      setLogData('');

      // Close the date picker modal
      setOpenDatePicker(false);
      // Play the submit sound
      playSubmitSound();
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };
  const deleteEntry = async (index) => {
    try {
      const newData = submittedData.filter((_, i) => i !== index);

      // Save updated data to AsyncStorage
      await AsyncStorage.setItem('submittedData', JSON.stringify(newData));

      // Update local state
      setSubmittedData(newData);
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  function handleChangeDate(newDate) {
    setSelectedDate(newDate);
  }

  const handlePressDatePicker = () => {
    setOpenDatePicker(!openDatePicker);
  };

  
  
  
  

  return (
    <View style={{ flex: 1 }}>
      
        <View style={styles.content}>
          <Text style={styles.header}>Log your Journey</Text>

          <View style={styles.dateContainer}>
            <Text style={styles.label}>Select Date</Text>
            <TouchableOpacity
              style={styles.dateInput}
              onPress={handlePressDatePicker}
            >
              <Text>{selectedDate}</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="Accomplishments"
            value={logData}
            onChangeText={(text) => setLogData(text)}
          />

          <TouchableOpacity
            onPress={saveData}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

          {/* Display submitted data */}
          <Text style={styles.submittedDataHeader}>Submitted Data:</Text>
          {submittedData.map((data, index) => (
            <View key={index} style={styles.submittedDataItem}>
              <Text style={{fontWeight:'bold', color:'black'}}>Date: {data.date}</Text>
              <Text style={{fontWeight:'bold', color:'black'}}>Log: {data.log}</Text>
              <TouchableOpacity
              onPress={() => deleteEntry(index)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
            </View>
          ))} 
          
          
        </View>

        
        <Modal
          animationType="slide"
          transparent={true}
          visible={openDatePicker}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker
                mode="calendar"
                selected={selectedDate}
                onDateChanged={handleChangeDate}
                onSelectedChange={(date) => setSelectedDate(date)}
                options={{
                  backgroundColor: '#080516',
                  textHeaderColor: '#469ab6',
                  textDefaultColor: '#FFFFFF',
                  selectedTextColor: '#FFF',
                  mainColor: '#469ab6',
                  textSecondaryColor: '#FFFFFF',
                  borderColor: 'rgba(122, 146, 165, 0.1)',
                }}
              />

              <TouchableOpacity onPress={handlePressDatePicker}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 22,
    marginTop: 64,
  },
  header: {
    fontSize: 36,
    marginVertical: 10,
    color: 'black',
    fontWeight:'bold',
  },
  dateContainer: {
    marginBottom: 20,
    color:'black',
  },
  label: {
    fontSize: 18,
    fontWeight:'bold',
    color:'black',
  },
  dateInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#222',
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: 'center',
    marginTop: 14,
    color:'black',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#222',
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: 'center',
    marginTop: 14,
    marginBottom: 20,
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#342342',
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
  },
  submitButtonText: {
    fontSize: 20,
    color: 'white',
    width:80,
    alignItems:'stretch'
  },
  submittedDataHeader: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color:'black',
    
  },
  submittedDataItem: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#080516',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 35,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    color: 'white',
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },

  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

