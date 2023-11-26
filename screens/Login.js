import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
//import CheckBox from '@react-native-community/checkbox';

//import COLORS from '../constants/Colors';
import { Ionicons } from 'react-native-vector-icons';

//import Button from '../components/Button';

export default Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

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
                            isPasswordShown? (
                                
                                <Text> EYE </Text>
                            ) : (
                                <Text>NEYE</Text>
                            )
                        }

                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 6 }}>
                {/* <CheckBox
                    style={{ marginRight: 8 }}
                    value={isChecked}
                    onValueChange={() => setIsChecked(!isChecked)}
                    tintColors={{ true: "red", false: "black" }}
                /> */}

                <Text>Remember Me</Text>
            </View>

            {/* <Button
                    title="Login"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                /> */}

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

