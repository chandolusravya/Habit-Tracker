import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet} from "react-native";


const Settings = ({ navigation }) => {
    const navigateToEditProfile = () => {
        navigation.navigate("ProfileScreen");
    };

    const navigateToSecurity = () => {
        console.log("Security function");
    };

    const navigateToNotifications = () => {
        console.log("Notifications function");
    };

    

    const navigateToSubscription = () => {
        console.log("Subscription function");
        navigation.navigate("NewAbout");
    };

    const navigateToSupport = () => {
        console.log("Support function");
        navigation.navigate("NewAbout");
    };

    const navigateToTermsAndPolicies = () => {
        console.log("About");
        navigation.navigate("NewAbout");
    };

    const navigateToFreeSpace = () => {
        console.log("Free Space function");
    };

    const navigateToDateSaver = () => {
        console.log("Date saver");
    };

    const navigateToReportProblem = () => {
        console.log("Customer feedback");
        navigation.navigate("NewAbout");
    };

    

    const logout = () => {
        console.log("Logout");
        navigation.navigate("Welcome");

    };

    const accountItems = [
        { text: "Edit Profile", action: navigateToEditProfile },
        { text: "Security", action: navigateToSecurity },
        { text: "Notifications", action: navigateToNotifications },
        
    ];

    const supportItems = [
        { text: "My Subscription", action: navigateToSubscription },
        { text: "Help & Support", action: navigateToSupport },
        { text: "About", action: navigateToTermsAndPolicies },
    ];

    const cacheAndCellularItems = [
        { text: "Free up space", action: navigateToFreeSpace },
        { text: "Date Saver", action: navigateToDateSaver },
    ];

    const actionsItems = [
        { text: "Feedback", action: navigateToReportProblem },
        
        { text: "Log out", action: logout },
    ];

    const renderSettingsItem = ({ text, action }) => (
        <TouchableOpacity
        onPress={action}
        style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 8,
            paddingLeft: 12,
            backgroundColor: "#ddd", // Use your desired background color
        }}
        >
        <Text
            style={{
            marginLeft: 12,
            fontWeight: "600",
            fontSize: 16,
            }}
        >
            {text}{" "}
        </Text>
        </TouchableOpacity>
    );

    return (
        <View
        style={{
            flex: 1,
            backgroundColor: "#fff", // Use your desired background color
        }}
        >
        <View
            style={{
            marginHorizontal: 12,
            flexDirection: "row",
            justifyContent: "center",
            }}
        >
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
                position: "absolute",
                left: 0,
            }}
            >
            <Text style={{ fontSize: 20 }}>{"< Back"}</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>SETTINGS</Text>
        </View>

        <ScrollView style={{ marginHorizontal: 12 }}>
            {/* Account Settings */}
            <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 18, marginVertical: 10,fontWeight:"bold",color:'black' }}>Account</Text>
            <View style={{ borderRadius: 12, backgroundColor: "#ddd" }}>
                {accountItems.map((item, index) => (
                <React.Fragment key={index}>
                    {renderSettingsItem(item)}
                </React.Fragment>
                ))}
            </View>
            </View>

            {/* Support and About settings */}
            <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 18, marginVertical: 10, fontWeight:"bold",color:'black' }}>Support & About </Text>
            <View style={{ borderRadius: 12, backgroundColor: "#ddd" }}>
                {supportItems.map((item, index) => (
                <React.Fragment key={index}>
                    {renderSettingsItem(item)}
                </React.Fragment>
                ))}
            </View>
            </View>

            {/* Cache & Cellular */}
            <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 18, marginVertical: 10, fontWeight:"bold",color:'black' }}>Cache & Cellular </Text>
            <View style={{ borderRadius: 12, backgroundColor: "#ddd" }}>
                {cacheAndCellularItems.map((item, index) => (
                <React.Fragment key={index}>
                    {renderSettingsItem(item)}
                </React.Fragment>
                ))}
            </View>
            </View>

            {/* Actions Settings */}
            <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 18, marginVertical: 10, fontWeight:"bold",color:'black' }}>Actions</Text>
            <View style={{ borderRadius: 12, backgroundColor: "#ddd" }}>
                {actionsItems.map((item, index) => (
                <React.Fragment key={index}>
                    {renderSettingsItem(item)}
                </React.Fragment>
                ))}
            </View>
            </View>
        </ScrollView>
        </View>
    );
    };

const styles=StyleSheet.create({
    sectionTitle:{
        fontSize:33,
        fontWeight: 'bold',
        marginBottom: 16,
        justifyContent:'center',
        color:'black'
    },

})
export default Settings;