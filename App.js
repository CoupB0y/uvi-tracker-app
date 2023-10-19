import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import HomeScreen from "./navigation/screens/HomeScreen";
import Colors from "./constants/colors";

function App() {
    return (
        <LinearGradient
            colors={[
                Colors.primary300,
                Colors.primary100,
            ]}
            style={styles.rootContainer}
        >
            <SafeAreaView style={styles.rootContainer}>
                <HomeScreen />
            </SafeAreaView>
        </LinearGradient>
    );
}

export default App;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
