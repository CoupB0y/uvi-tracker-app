import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import Colors from "../constants/colors";

function HomeScreen() {
    return (
        <View style={styles.rootContainer}>
            <Header>UV Index</Header>
            <View style={styles.uvConatiner}>
                <Text style={styles.uvText}>UV index: 0</Text>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Connect Device</PrimaryButton>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    uvConatiner: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary300,
        width: "50%",
        height: "10%",
        borderRadius: 10,
    },
    uvText: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
    buttonContainer: {
        margin: 20,
    },
});
