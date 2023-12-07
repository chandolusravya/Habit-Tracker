import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet,Linking, TouchableOpacity } from 'react-native';


const NewAbout =()=>{
    const handleLinkPress = () => {
        // Define the URL you want to open
        const url = 'https://github.com/chandolusravya/Habit-Tracker.git';
    
        // Open the URL using the Linking module
        Linking.openURL(url);
    };
    return(
        <View>
            <Text style={{fontSize:32, fontWeight:'bold', color:'orange',marginLeft:10}}>Hello Habbitiess!!!</Text>
            <Text style={{fontSize: 20, fontWeight:'bold', color:'grey',marginLeft:10}}>Habit Tracker is a user-friendly application designed to help individuals track their daily activities and cultivate a healthy, productive lifestyle.</Text>
            <Text style={{fontSize: 28, fontWeight:'bold',color: 'black',marginLeft:10}}>Membership</Text>
            <Text style={{fontSize: 20, fontWeight:'bold', color:'grey',marginLeft:10}}>Join Habbity Premium now!!!</Text>
            <Text style={{fontSize: 26, fontWeight:'bold', color:'red',marginLeft:10}}>Get $100 instant eCard</Text>
            <Text style={{fontSize: 28, fontWeight:'bold', color:'black',marginLeft:10}}>For Help & Support </Text>
            <Text style={{fontSize: 26, fontWeight:'bold', color:'black',marginLeft:10}}>Contact Us:</Text>
            <Text style={{fontSize: 20, fontWeight:'bold', color:'grey',marginLeft:10}}>+1(676)345-4567  </Text>
            <Text style={{fontSize: 20, fontWeight:'bold', color:'grey',marginLeft:10}}>Mon-Fri: 10:00 AM - 5:00 PM</Text>
            <Text style={{fontSize: 20, fontWeight:'bold', color:'grey',marginLeft:10}}> Habbity@yours.co</Text>
            <Text style={{ marginTop: 30, textAlign: 'center', color:'black'}}>
        For more infomation, Checkout my github {' '}
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
              here
          </Text>
        </TouchableOpacity>
        .
      </Text>


        </View>

    );
}
export default NewAbout;