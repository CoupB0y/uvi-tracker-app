import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import ConnectionsModal from "./ConnectionsModal";

function HomeScreen() {
    // display current uv index and connect device button
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function startScanHandler() {
        setModalIsVisible(true);
    }

    function endScanHandler() {
        setModalIsVisible(false);
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.uvConatiner}>
                <Text style={styles.uvText}>UV index: 0</Text>
            </View>
            <ConnectionsModal visible={modalIsVisible} onCancel={endScanHandler}/>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={startScanHandler}>
                    Connect Device
                </PrimaryButton>
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
