import * as React from "react";
import { View, StyleSheet } from "react-native";

import PrimaryButton from "../../components/PrimaryButton";

function HomeScreen() {
    return (
        <View style={styles.rootContainer}>
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
        justifyContent: "center",
    },
    buttonContainer: {
        margin: 20,
    },
});
