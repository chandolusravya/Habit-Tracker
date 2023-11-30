import { View, Text, Image, Pressable, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';


//import COLORS from '../constants/Colors';
import { Ionicons } from 'react-native-vector-icons';

//import Button from '../components/Button';

export default Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          // Retrieve user data from AsyncStorage
            const userDataString = await AsyncStorage.getItem(email);
            console.log('Stored User Data:', userDataString);
    
            if (userDataString) {
            // User found, check the password
            const userData = JSON.parse(userDataString);
            if (userData.password === password) {
              // Password is correct, navigate to the welcome screen or any other screen
                navigation.navigate('HomeScreen');
            } else {
              // Incorrect password
                alert('Incorrect password. Please try again.');
            }
            } else {
            // User not found
            alert('No user found with the provided email address.');
            }
            } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred while logging in.');
        }
    };
    

    return (
        <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginVertical: 12,
                    color: "black"
                }}>
                    Hi Welcome Back ! 👋
                </Text>

                <Text style={{
                    fontSize: 16,
                    color: "black"
                }}>Hello again you have been missed!</Text>
            </View>
            <View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: "black",
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={"black"}
                            keyboardType='email-address'
                            onChangeText={setEmail}
                            value={email}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
            </View>
        
            
        

            <View style={{ marginBottom: 12 }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8
                }}>Password</Text>

                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: "black",
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22
                }}>
                    <TextInput
                        placeholder='Enter your password'
                        placeholderTextColor={"black"}
                        secureTextEntry={isPasswordShown}
                        onChangeText={setPassword}
                        value={password}
                        style={{
                            width: "100%"
                        }}
                    />
                
            
                    <TouchableOpacity
                        onPress={() => setIsPasswordShown(!isPasswordShown)}
                        style={{
                            position: "absolute",
                            right: 12
                        }}
                    >
                        
                        <Text>{isPasswordShown ? 'Hide' : 'Show'}</Text>
                        

                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 6 }}>
                <CheckBox
                    style={{ marginRight: 8 }}
                    value={isChecked}
                    onValueChange={() => setIsChecked(!isChecked)}
                    tintColors={{ true: "green", false: "black" }}
                /> 

                <Text style={{marginVertical : 8, fontSize : 16}}>Remember Me</Text>
            </View>

            {/* <Button
                    title="Login"
                    filled
                    onPress={() => navigation.navigate("Welcome")}
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />  */}
            
                <TouchableOpacity
        onPress={handleLogin}
        style={{
            marginTop: 18,
            marginBottom: 4,
            backgroundColor: '#5359D1',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center'
        }}
    >
        <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
        </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                <View
                    style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: "grey",
                        marginHorizontal: 10
                    }}
                />
                <Text style={{ fontSize: 14 }}>Or Login with</Text>
                <View
                    style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: "grey",
                        marginHorizontal: 10
                    }}
                />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        height: 52,
                        borderWidth: 1,
                        borderColor: "grey",
                        marginRight: 4,
                        borderRadius: 10
                    }}
                >
                    <Image
                        source={require("../assets/facebook.png")}
                        style={{
                            height: 36,
                            width: 36,
                            marginRight: 8
                        }}
                        resizeMode='contain'
                    />

                    <Text>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        height: 52,
                        borderWidth: 1,
                        borderColor: "grey",
                        marginRight: 4,
                        borderRadius: 10
                    }}
                >
                    <Image
                        source={require("../assets/google.png")}
                        style={{
                            height: 36,
                            width: 36,
                            marginRight: 8
                        }}
                        resizeMode='contain'
                    />

                    <Text>Google</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 22
            }}>
                <Text style={{ fontSize: 16, color: "black" }}>Don't have an account ? </Text>
                <Pressable
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text style={{
                        fontSize: 16,
                        color: "red",
                        fontWeight: "bold",
                        marginLeft: 6
                    }}>Register</Text>
                </Pressable>
            </View>
        </View>

    )
}

