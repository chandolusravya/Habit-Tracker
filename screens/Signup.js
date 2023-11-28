import { View, Text, Image, Pressable, TextInput, TouchableOpacity,Button, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

// import COLORS from '../constants/Colors';
import { Ionicons } from 'react-native-vector-icons';

// import Button from '../components/Button';

export default Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try{
            const userData = {
                name,
                email,
                mobileNumber,
                password,
            };
            console.log('User Data:', userData);
            if(name.length==0|| email.length==0||mobileNumber.length==0||password.length==0){
                Alert.alert("Please fill in all fields");
                return;
                
            }
            if (!isChecked) {
                Alert.alert("Please agree to the terms and conditions");
                return; // Exit the function if checkbox is not checked
            }
            //to save the data
            // const userData = {
            //     name,
            //     email,
            //     mobileNumber,
            //     password
            // };
            await AsyncStorage.setItem(email,JSON.stringify(userData));
            console.log('User Data saved successfully.');
            Alert.alert("Success!! Your account is created");
            //to navigate
            navigation.navigate('Login');

        }catch(error){
            console.error('Error signing up!:', error);
            Alert.alert('an error occured during signup');

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
                        Create Account
                    </Text>

                    {/* <Text style={{
                        fontSize: 16,
                        color: "black"
                    }}>Join us today!!</Text> */}
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}> Name</Text>

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
                            placeholder='Enter your first name, last name'
                            placeholderTextColor={"black"}
                            keyboardType='ascii-capable'
                            value={name}
                            onChangeText={(text) => setName(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
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
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Mobile Number</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: "black",
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='+1'
                            placeholderTextColor={"black"}
                            keyboardType='phone-pad'
                            
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: "grey",
                                height: "100%"
                            }}
                        />

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={"black"}
                            keyboardType='numeric'
                            value={mobileNumber}
                            onChangeText={(text) => setMobileNumber(text)}
                            style={{
                                width: "80%"
                            }}
                        />
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
                            value={password}
                            onChangeText={(text) => setPassword(text)}
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
                            {
                                isPasswordShown == true ? (
                                    <Text>NoEye</Text>
                                ) : (
                                    <Text>EYE</Text>
                                )
                            }

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

                <Text style={{marginVertical:8 }}>I agree to the terms and conditions</Text>
                </View>
                <TouchableOpacity onPress={handleSignUp} style={{ marginTop: 18, marginBottom: 4 }}>
                <View
                    style={{
                        backgroundColor: 'blue',
                        height: 48,
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
                </View>
                </TouchableOpacity> 
                    
                {/* <TouchableOpacity 
                    onPress={handleSignUp} style={{ marginTop: 18, marginBottom: 4 }}>
                <Button
                    title="Sign Up"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
                </TouchableOpacity>  */}

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: "grey",
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
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
                    <Text style={{ fontSize: 16, color: "black" }}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: 'red',
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        
    )
}

