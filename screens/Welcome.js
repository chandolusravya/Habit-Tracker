import { View, Text, Pressable, Image, StyleSheet,Button} from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors';
//import Button from '../components/Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary, // Replace with your desired background color
    },
    background: {
        flex: 1,
        position: 'relative',
        // Add styling for your background here
    },

});

export default Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image
                    source={require("../assets/hero1.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/hero2.jpg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
            </View>

            {/* content  */}

            <View style={{
                paddingHorizontal: 22,
                position: "absolute",
                top: 400,
                width: "100%"
            }}>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 800,
                    color: COLORS.white
                 }}>Let's Get</Text>
                <Text style={{
                    fontSize: 46,
                    fontWeight: 800,
                    color: COLORS.white
                }}>Started</Text>

                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.white,
                        marginVertical: 4
                    }}>Connect with yourself..</Text>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.white,
                    }}>set goals, motivate yourself, lead a healthy+happy life</Text>
                </View>

                <Button
                    title="Join Now"
                    onPress={() => navigation.navigate("Signup")}
                    style={{
                        marginTop: 22,
                        width: "100%"
                    }}
                />

                <View style={{
                    flexDirection: "row",
                    marginTop: 12,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.white
                    }}>Already have an account ?</Text>
                    <Pressable 
                        onPress={() => navigation.navigate("Login")}
                    
                    >
                    <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            fontWeight: "bold",
                            marginLeft: 4
                        }}>Login</Text> 
                    </Pressable>

                </View>
            </View>
        </View>
        
    )
}